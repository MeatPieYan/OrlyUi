import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

test('shallow', t => {
  const wrapper = shallow(<Header />);
  t.is(wrapper.contains(<header></header>), true);
});
