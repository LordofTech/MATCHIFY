const Sentry = require('@sentry/node');

// Replace with your actual Sentry DSN
Sentry.init({
  dsn: 'https://<my-actual-dsn>@oXXXXXX.ingest.sentry.io/YYYYYY',
  tracesSampleRate: 1.0,
  debug: true,
  enabled: true, // Ensures data transport is enabled
});



module.exports = Sentry;
