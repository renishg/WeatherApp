/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView} from 'react-native';
import {Text} from 'react-native';
import {SafeAreaView, View, StyleSheet, ImageBackground} from 'react-native';
import {images} from '../assets/images';
import {Forecast} from '../components/Forecast';
import {Loader} from '../components/Loader';
import {Location} from '../components/Location';
import {Statistics} from '../components/Statistics';
import {TemperatureInfo} from '../components/TemperatureInfo';
import {useGetWeatherQuery} from '../redux/api';

const HomeScreen = () => {
  const {data, error, isLoading} = useGetWeatherQuery('London');

  return (
    <ImageBackground style={styles.container} source={images.background}>
      <SafeAreaView style={styles.safeAreaView}>
        {(isLoading || error) && (
          <View style={styles.secondaryContainer}>
            {isLoading && <Loader />}
            {error && <Text>{'Something went wrong!'}</Text>}
          </View>
        )}
        {data && !isLoading && (
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}>
            <Location
              name={data.location.name}
              region={data.location.region}
              country={data.location.country}
              lastUpdated={data.current.last_updated}
            />

            <TemperatureInfo
              tempC={data.current.temp_c}
              conditionText={data.current.condition.text}
              conditionIcon={data.current.condition.icon}
              feelsLikeC={data.current.feelslike_c}
            />

            <Forecast hourly data={data.forecast.forecastday} />

            <Forecast hourly={false} data={data.forecast.forecastday} />

            <Statistics
              data={[
                {label: 'Humidity', value: `${data.current.humidity} %`},
                {label: 'UV Index', value: `${data.current.uv} of 10`},
                {label: 'Visibility', value: `${data.current.vis_km} km`},
              ]}
            />

            <Statistics
              data={[
                {label: 'Precipitation', value: `${data.current.precip_mm} mm`},
                {label: 'Gust', value: `${data.current.gust_kph} kph`},
                {label: 'Pressure', value: `${data.current.pressure_mb} mb`},
              ]}
            />

            <Statistics
              data={[
                {label: 'Wind Speed', value: `${data.current.wind_kph} kph`},
                {
                  label: 'Direction',
                  value: `${data.current.wind_dir}`,
                },
                {label: 'Degree', value: `${data.current.wind_degree}°`},
              ]}
            />
          </ScrollView>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  safeAreaView: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    flexGrow: 1,
  },
  secondaryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {HomeScreen};
