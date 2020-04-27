'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App(header, generator, footer) {
    _classCallCheck(this, App);

    this.header = header;
    this.generator = generator;
    this.footer = footer;
};

var renderTemplate = new App('this is the header', 'this is the generator', 'this is the footer');

var template = '\n    <header>\n        <div>\n            <h1>' + renderTemplate.header + '</h1>\n        </div>\n        <figure></figure>\n    </header>\n    <main>\n        <div>' + renderTemplate.generator + '</div>\n        <div></div>\n    </main>\n    <footer>\n        <div>' + renderTemplate.footer + '</div>\n        <div></div>\n        <div></div>\n    </footer>\n';

document.body.innerHTML = template;