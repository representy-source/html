'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = undefined;

var _representyToolRenderer = require('representy-tool-renderer');

var _representyToolRenderer2 = _interopRequireDefault(_representyToolRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HTML {
  constructor(options) {
    this.options = options || {};
  }

  load() {
    const { engine, template, data } = this.options;
    return _representyToolRenderer2.default.renderByEngine(engine, template, data);
  }
}

exports.default = HTML;
exports.Source = HTML;