import moment from 'moment';
import React, {FC, useMemo} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {ForecastDay} from '../redux/types';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';
import {Card} from './Card';
import {ForecastItem, ForecastItemProps} from './ForecastItem';

type ForecastProps = {
  hourly: boolean;
  data: ForecastDay[];
};

const Forecast: FC<ForecastProps> = ({hourly, data}) => {
  const listData: ForecastItemProps[] = useMemo(() => {
    if (hourly) {
      return data[0].hour.map(({time, condition: {icon}, temp_c}) => ({
        title: moment(time).format('h A'),
        icon: icon,
        tempC: Math.round(temp_c),
      }));
    }

    return data.map(
      ({
        date: time,
        day: {
          condition: {icon},
          avgtemp_c: temp_c,
        },
      }) => ({
        title: moment(time).format('ddd'),
        subTitle: moment(time).format('MMM DD'),
        icon: icon,
        tempC: Math.round(temp_c),
      }),
    );
  }, [data, hourly]);

  return (
    <Card>
      <Text testID={'label'} style={styles.labelText}>
        {`${hourly ? 'HOURLY' : 'DAILY'} FORECAST`}
      </Text>
      <FlatList<ForecastItemProps>
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        data={listData}
        renderItem={({item}) => <ForecastItem {...item} />}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.bold,
    margin: 8,
  },
});

export {Forecast};
