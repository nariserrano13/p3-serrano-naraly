import './main.css'

import Footer from './modules/footer.js'
const footer = new Footer ("this is the footer from the footerjs file")
console.log(footer);

import Header from './modules/header.js'
const header = new Header ("this is the header from the headerjs")
console.log(header);

import LunchGenerator from './modules/lunch-generator.js'
const generator = new LunchGenerator ("this is the lunch generator from lunchgeneratorjs")
console.log(generator);

class App {
    constructor (header, generator, footer){
        this.header = header;
        this.generator = generator;
        this.footer = footer;
    }
}

const renderTemplate = new App ('this is the header', 'this is the generator', 'this is the footer');

const template = `
    <header>
        <div>
            <h1>${renderTemplate.header}</h1>
        </div>
        <figure></figure>
    </header>
    <main>
        <div>${renderTemplate.generator}</div>
        <div></div>
    </main>
    <footer>
        <div>${renderTemplate.footer}</div>
        <div></div>
        <div></div>
    </footer>
`;


document.body.innerHTML= template;