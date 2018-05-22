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
  expect(appNode.textContent).toEqual('Welcome to ReactTo get started, edit src/App.js and save to reload.Coming soon!');

});