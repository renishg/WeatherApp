import React from 'react';
import renderer from 'react-test-renderer';
import {ForecastItem} from '../ForecastItem';

describe('ForecastItem', () => {
  it('renders correctly with subTitle', () => {
    const props = {
      title: 'Test-Title',
      subTitle: 'Test-SubTitle',
      icon: '//cdn.weatherapi.com/weather/64x64/night/296.png',
      tempC: 8,
    };
    const tree = renderer.create(<ForecastItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without subTitle', () => {
    const props = {
      title: 'Test-Title',
      icon: '//cdn.weatherapi.com/weather/64x64/night/296.png',
      tempC: 8,
    };
    const tree = renderer.create(<ForecastItem {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
