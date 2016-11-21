import test from 'ava';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import Header from './Header';

test('header by default', t => {
  const output = renderStatic()
  t.true(output.includes('header'))
});


function renderStatic(props) {
  return renderToStaticMarkup(<Header {...props} />)
}
