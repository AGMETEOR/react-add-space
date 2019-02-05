import React from 'react';
import { render } from 'react-dom';
import Spacer from '../../src';

const App = () => (
  <div>
    Hello, I need space
    <Spacer />
and some more space
    <Spacer amount={3} />
here, add some more space
    <Spacer amount={5} />
 here as well, oh! and here
    <Spacer amount={4} />
too
  </div>

);
render(<App />, document.getElementById('root'));
