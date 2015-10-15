'use strict';

var semistandard = require('semistandard');
var format = require('util').format;
var assign = require('object-assign');
var loaderUtils = require('loader-utils');

module.exports = function semistandardLoader (text) {
  var self = this;
  var callback = this.async();

  var config = assign(
    this.options.semistandard || {},
    loaderUtils.parseQuery(this.query)
  );

  this.cacheable();

  semistandard.lintText(text, config, function (err, result) {
    if (err) {
      return callback(err, text);
    } else if (result.errorCount === 0) {
      return callback(err, text);
    }

    var warnings = result.results.reduce(function (items, result) {
      return items.concat(result.messages.map(function (message) {
        return format(
          '%s:%d:%d: %s',
          result.filePath, message.line || 0, message.column || 0, message.message
        );
      }));
    }, []);

    self.emitWarning(warnings.join('\n'));
    callback(err, text);
  });
};
