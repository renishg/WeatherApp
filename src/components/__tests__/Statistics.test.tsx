import React from 'react';
import {View, Text} from 'react-native';
import {create} from 'react-test-renderer';
import {Statistics} from '../Statistics';

const mockData = [
  {label: 'Label 1', value: 'Value 1'},
  {label: 'Label 2', value: 'Value 2'},
  {label: 'Label 3', value: 'Value 3'},
];

describe('Statistics', () => {
  it('should render correctly', () => {
    const tree = create(<Statistics data={mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the correct number of data items', () => {
    const component = create(<Statistics data={mockData} />);
    const numberOfDataItems = component.root.findAllByType(View).length - 1;
    expect(numberOfDataItems).toEqual(mockData.length);
  });

  it('should render the correct label and value for each data item', () => {
    const component = create(<Statistics data={mockData} />);
    const infoContainers = component.root.findAllByType(View);
    infoContainers.shift();
    infoContainers.forEach((infoContainer, index) => {
      const AllTexts = infoContainer.findAllByType(Text);
      const valueText = AllTexts[0].props.children;
      const labelText = AllTexts[1].props.children;
      expect(valueText).toEqual(mockData[index].value);
      expect(labelText).toEqual(mockData[index].label);
    });
  });
});
