import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import BlogArticle from './BlogArticle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogArticle />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('BlogArticle', () => {
  const app = TestUtils.renderIntoDocument(
    <BlogArticle title="Title" text="Text" authorName="Foo" date="25/12/2018" />
  );

  const appNode = ReactDOM.findDOMNode(app);
  expect(appNode.textContent).toEqual('TitleFoo - 25/12/2018Text');

});
