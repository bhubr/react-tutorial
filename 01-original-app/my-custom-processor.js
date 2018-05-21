// my-custom-processor.js

/**
 * Usage as MyCustomProcessor
 * @param {Object} testResult Jest test result data
 */
const MyCustomProcessor = (testResult) => {
  console.log('MyCustomProcessor', testResult)
	return testResult;
};

module.exports = MyCustomProcessor;
