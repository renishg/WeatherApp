import React from 'react';
import {useGetWeatherQuery} from '../../redux/api';
import {HomeScreen} from '../HomeScreen';
import renderer from 'react-test-renderer';
import {mockResponse} from '../../../test-helpers/mockData';

jest.mock('../../redux/api');

describe('HomeScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state', () => {
    (useGetWeatherQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders error state', () => {
    (useGetWeatherQuery as jest.Mock).mockReturnValue({
      error: true,
    });

    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders data state', () => {
    (useGetWeatherQuery as jest.Mock).mockReturnValue({
      data: mockResponse,
    });

    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
