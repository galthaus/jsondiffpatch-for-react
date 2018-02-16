'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jsondiffpatch = require('jsondiffpatch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by guoguangyu on 2016/10/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var JsonDiffReact = function (_Component) {
  _inherits(JsonDiffReact, _Component);

  function JsonDiffReact() {
    _classCallCheck(this, JsonDiffReact);

    return _possibleConstructorReturn(this, (JsonDiffReact.__proto__ || Object.getPrototypeOf(JsonDiffReact)).apply(this, arguments));
  }

  _createClass(JsonDiffReact, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          right = _props.right,
          left = _props.left,
          _props$show = _props.show,
          show = _props$show === undefined ? true : _props$show,
          _props$annotated = _props.annotated,
          annotated = _props$annotated === undefined ? false : _props$annotated,
          tips = _props.tips;

      var delta = (0, _jsondiffpatch.diff)(left, right);
      var html = annotated ? _jsondiffpatch.formatters.annotated.format(delta) : _jsondiffpatch.formatters.html.format(delta, left);
      show ? _jsondiffpatch.formatters.html.showUnchanged() : _jsondiffpatch.formatters.html.hideUnchanged();
      var text = tips || '无差异！';
      return html ? React.createElement('div', { dangerouslySetInnerHTML: { __html: html } }) : React.createElement(
        'p',
        { style: { fontSize: 12, color: '#999' } },
        text
      );
    }
  }]);

  return JsonDiffReact;
}(_react.Component);

JsonDiffReact.propTypes = {
  right: _propTypes2.default.any,
  left: _propTypes2.default.any,
  show: _propTypes2.default.bool,
  annotated: _propTypes2.default.bool,
  tips: _propTypes2.default.string
};
exports.default = JsonDiffReact;