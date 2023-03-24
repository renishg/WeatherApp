import moment from 'moment';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

type LocationProps = {
  name: string;
  region: string;
  country: string;
  lastUpdated: string;
};

const Location: FC<LocationProps> = ({name, region, country, lastUpdated}) => {
  return (
    <View style={styles.container}>
      <Text testID={'name'} style={styles.nameText}>
        {name}
      </Text>
      <Text testID={'region'} style={styles.regionText}>
        {`${region}, ${country}`}
      </Text>
      <Text testID={'updatedText'} style={styles.updatedText}>
        {`Updated ${moment(lastUpdated).fromNow()}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  nameText: {
    color: colors.white,
    fontSize: 30,
    fontFamily: fonts.medium,
  },
  regionText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  updatedText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginTop: 10,
  },
});

export {Location};
