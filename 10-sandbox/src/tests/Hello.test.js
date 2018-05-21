// Link.react.test.js
import React from 'react';
import Hello from '../Hello';
import renderer from 'react-test-renderer';

test('Hello world', () => {
  const component = renderer.create(
    <Hello name="Dr. Robert" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
