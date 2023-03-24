import React from 'react';
import {create} from 'react-test-renderer';
import {Image} from 'react-native';
import {TemperatureInfo} from '../TemperatureInfo';

describe('TemperatureInfo', () => {
  const mockProps = {
    tempC: 30,
    feelsLikeC: 32,
    conditionText: 'Sunny',
    conditionIcon: 'https://www.example.com/icon.png',
  };

  it('should render', () => {
    const tree = create(<TemperatureInfo {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the correct condition icon', () => {
    const tree = create(<TemperatureInfo {...mockProps} />);
    const conditionIcon = tree.root.findByType(Image);

    expect(conditionIcon.props.source.uri).toBe(
      `https:${mockProps.conditionIcon}`,
    );
  });
});
