import React from 'react';
import moment from 'moment';
import {create} from 'react-test-renderer';
import {Location} from '../Location';

describe('Location', () => {
  const mockProps = {
    country: 'United Kingdom',
    lastUpdated: '2023-03-23 18:15',
    name: 'London',
    region: 'City of London, Greater London',
  };

  it('should render the Location component correctly', () => {
    const tree = create(<Location {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the name, region, and country correctly', () => {
    const tree = create(<Location {...mockProps} />).root;
    const nameText = tree.findByProps({testID: 'name'});
    const regionText = tree.findByProps({testID: 'region'});
    expect(nameText.props.children).toBe(mockProps.name);
    expect(regionText.props.children).toBe(
      `${mockProps.region}, ${mockProps.country}`,
    );
  });

  it('should render the updated time correctly', () => {
    const tree = create(<Location {...mockProps} />).root;
    const updatedText = tree.findByProps({testID: 'updatedText'});
    expect(updatedText.props.children).toBe(
      `Updated ${moment(mockProps.lastUpdated).fromNow()}`,
    );
  });
});
