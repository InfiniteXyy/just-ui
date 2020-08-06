import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Button from './Button';

describe('test Button', function () {
  it('should render content correctly', function () {
    const wrapper = mount(<Button content="123" />);
    expect(wrapper.text()).to.eq('123');
  });
});
