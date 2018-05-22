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
    <Paragraph content="The paragraph content is variable, just like the header's content. So far we used only one property (content)." />
  );

  const appNode = ReactDOM.findDOMNode(app);
  expect(appNode.textContent).toEqual("The paragraph content is variable, just like the header's content. So far we used only one property (content).");

});
