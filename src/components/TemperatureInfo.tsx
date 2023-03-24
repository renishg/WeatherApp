import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

type TemperatureInfoProps = {
  tempC: number;
  feelsLikeC: number;
  conditionText: string;
  conditionIcon: string;
};

const TemperatureInfo: FC<TemperatureInfoProps> = ({
  tempC,
  feelsLikeC,
  conditionText,
  conditionIcon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tempContainer}>
        <Text style={styles.tempText}>{Math.round(tempC)}</Text>
        <Text style={styles.tempUnitText}>°C</Text>
        <Text style={styles.feelsLikeText}>{`Feels like ${feelsLikeC}°C`}</Text>
      </View>
      <View
        style={StyleSheet.flatten([
          styles.tempContainer,
          styles.conditionContainer,
        ])}>
        <Image
          source={{uri: `https:${conditionIcon}`}}
          style={styles.conditionIcon}
          resizeMode={'contain'}
        />
        <Text style={styles.conditionText}>{conditionText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  tempContainer: {
    flexDirection: 'row',
  },
  tempText: {
    color: colors.white,
    fontSize: 100,
    fontFamily: fonts.semiBold,
  },
  tempUnitText: {
    color: colors.white,
    fontSize: 40,
    marginTop: 30,
    fontFamily: fonts.medium,
  },
  conditionText: {
    color: colors.white,
    fontSize: 30,
    fontFamily: fonts.medium,
  },
  feelsLikeText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.light,
    alignSelf: 'flex-end',
    marginBottom: 30,
    marginLeft: -30,
  },
  conditionIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  conditionContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
});

export {TemperatureInfo};
