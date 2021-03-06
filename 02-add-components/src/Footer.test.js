import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import Footer from './Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Footer "We added a footer."', () => {
  const app = TestUtils.renderIntoDocument(
    <Footer />
  );

  const appNode = ReactDOM.findDOMNode(app);
  expect(appNode.textContent).toEqual('We added a footer.');

});
