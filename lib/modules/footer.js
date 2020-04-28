'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.printFooterText = printFooterText;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = function Footer(text) {
    _classCallCheck(this, Footer);

    this.text = text;
};

exports.default = Footer;
function printFooterText(Footer) {
    console.log('The footer has ${Footer.text}');
}

//can only default export one thing