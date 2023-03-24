import React from 'react';
import renderer from 'react-test-renderer';
import {mockResponse} from '../../../test-helpers/mockData';
import {Forecast} from '../Forecast';

describe('Forecast', () => {
  it('renders correctly for hourly', () => {
    const props = {
      data: mockResponse.forecast.forecastday,
      hourly: true,
    };
    const tree = renderer.create(<Forecast {...props} />);
    const treeJSON = tree.toJSON();
    const text = tree.root.findByProps({testID: 'label'});
    expect(treeJSON).toMatchSnapshot();
    expect(text.props.children).toBe('HOURLY FORECAST');
  });

  it('renders correctly for daily', () => {
    const props = {
      data: mockResponse.forecast.forecastday,
      hourly: false,
    };
    const tree = renderer.create(<Forecast {...props} />);
    const treeJSON = tree.toJSON();
    const text = tree.root.findByProps({testID: 'label'});
    expect(treeJSON).toMatchSnapshot();
    expect(text.props.children).toBe('DAILY FORECAST');
  });
});
