import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';
import {Card} from './Card';

type StatisticsProps = {
  data: {label: string; value: string}[];
};

const Statistics: FC<StatisticsProps> = ({data}) => {
  return (
    <Card styles={styles.container}>
      {data.map(({label, value}, index) => {
        const isLast = data.length === index + 1;
        return (
          <View
            key={index}
            style={StyleSheet.flatten([
              styles.infoContainer,
              !isLast ? styles.infoBorder : undefined,
            ])}>
            <Text style={styles.valueText}>{value}</Text>
            <Text style={styles.labelText}>{label}</Text>
          </View>
        );
      })}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBorder: {
    borderRightColor: colors.white,
    borderRightWidth: 2,
  },
  valueText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.bold,
  },
  labelText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});

export {Statistics};
