Package.describe({
  name: 'evanfreeman:eslint',
  version: '1.0.2',
  summary: 'The eslint isobuild plugin. With airbnb support!',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: 'eslint',
  sources: [
    'eslint.js',
  ],
  npmDependencies: {
    'eslint': '1.10.3',
    'eslint-config-airbnb': '2.1.1',
    'babel-eslint': '4.1.6',
    'eslint-plugin-react': '3.12.0',
  },
});

Package.onUse(function (api) {
  api.use('isobuild:linter-plugin@1.0.0');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('evanfreeman:eslint');
});
