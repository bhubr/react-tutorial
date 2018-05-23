import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App shows default content', () => {
  const app = TestUtils.renderIntoDocument(
    <App />
  );

  const appNode = ReactDOM.findDOMNode(app);
  expect(appNode.textContent).toEqual('ReactJohn Doe - 23/05/2018Use multiple properties');

});
