var eslint = Npm.require('eslint');
var CLIEngine = eslint.CLIEngine;

function reportErrors(file, results) {
  results.forEach(function (result) {
    result.messages.forEach(function (error) {
      file.error(error);
    });
  });
}

function EslintLinter() {}

EslintLinter.prototype.processFilesForPackage = function (files, options) {
  var errors;
  var cli = new CLIEngine(options);

  files.forEach(function (file) {
    var path = file.getPathInPackage();
    var isIgnored = cli.isPathIgnored(path);
    if (!isIgnored) {
      errors = cli.executeOnFiles([path]);

      if (errors.errorCount > 0 || errors.warningCount > 0) {
        reportErrors(file, errors.results);
      }
    }
  });
};

Plugin.registerLinter({
  extensions: ['js'],
}, function () {
  var linter = new EslintLinter();
  return linter;
});
