import React, {FC} from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import { fonts } from '../theme/fonts';

type ForecastItemProps = {
  title: string;
  subTitle?: string;
  icon: string;
  tempC: number;
};

const ForecastItem: FC<ForecastItemProps> = ({
  title,
  subTitle,
  icon,
  tempC,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {subTitle && <Text style={styles.subTitleText}>{subTitle}</Text>}
      <Image source={{uri: `https:${icon}`}} style={styles.icon} />
      <Text style={styles.tempText}>{`${tempC}°C`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  titleText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.semiBold,
  },
  subTitleText: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.regular,
  },
  icon: {
    width: 50,
    height: 50,
    marginVertical: 4,
  },
  tempText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.semiBold,
  },
});

export {ForecastItem};
export type {ForecastItemProps};
