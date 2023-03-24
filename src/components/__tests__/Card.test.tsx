import React from 'react';
import {create} from 'react-test-renderer';
import {Card} from '../Card';

describe('Card', () => {
  it('should render with default styles', () => {
    const tree = create(<Card>{`Test`}</Card>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with custom styles', () => {
    const tree = create(
      <Card styles={{backgroundColor: 'red'}}>{`Test`}</Card>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
