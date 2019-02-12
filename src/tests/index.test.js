import React from 'react';
import { shallow } from 'enzyme';
import Spacer from '../index';

/*
Tests are run with __DEV__ set to
true in the jest configuration file.
*/

describe('<Spacer />', () => {
  it('should add one space as a default when amount prop is not passed in', () => {
    const wrapper = shallow(<Spacer />);
    expect(wrapper.text().length).toEqual(1);
  });

  it('should one space when amount specified is 0', () => {
    const wrapper = shallow(<Spacer amount={0} />);
    expect(wrapper.text().length).toEqual(1);
  });

  it('should add three spaces', () => {
    const wrapper = shallow(<Spacer amount={3} />);
    expect(wrapper.text().length).toEqual(3);
  });

  it('should still add three spaces when amount is a negative', () => {
    const wrapper = shallow(<Spacer amount={-3} />);
    expect(wrapper.text().length).toEqual(3);
  });
});
