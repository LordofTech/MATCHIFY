const Sentry = require('./sentry');

function logError(testCaseName, error) {
  Sentry.captureException(error, {
    extra: {
      testCaseName,
      timestamp: new Date().toISOString(),
    },
  });
}

module.exports = logError;
