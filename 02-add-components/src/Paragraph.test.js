import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import Paragraph from './Paragraph';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paragraph />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Paragraph shows default content', () => {
  const app = TestUtils.renderIntoDocument(
    <Paragraph />
  );

  const appNode = ReactDOM.findDOMNode(app);
  expect(appNode.textContent).toEqual('We changed the paragraph content too.');

});
