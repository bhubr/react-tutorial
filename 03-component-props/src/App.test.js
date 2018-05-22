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
  expect(appNode.textContent).toEqual("Variable content with component propsThe paragraph content is variable, just like the header's content. So far we used only one property (content).Coming soon: more properties!");

});
