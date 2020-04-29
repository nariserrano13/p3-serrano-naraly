import './main.css';
import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';
import { footer } from './modules/footer';


// import Footer from './modules/footer.js'
// const footer = new Footer ("this is the footer from the footerjs file")
// console.log(footer);

// import Header from './modules/header.js'
// const subheading = new Header ("Lorem ipsum dolor sit, amet consectetur adipisicing .","","")
// const header = new Header ("", "Random Lunch Generator","")
// const headerLogo = new Header ("", "","./images/lunch_icon.png")

// import LunchGenerator from './modules/lunch-generator.js'
// const generator = new LunchGenerator ("this is the lunch generator from lunchgeneratorjs")
// console.log(generator);


class App{
     constructor(){
         this.renderTemplate();
         header.logSomethingToTheConsole();
     }

     renderTemplate(){
        const template = `
            <header>
                <div id="banner-icon">
                    <div><h1></h1></div>
                    <div><img id="logo" src=""></></div>
                </div>
                <div><p>${header.subtext}</p></div>
            </header>
            <main>
                <div>${lunchGenerator.text}</div>
                <div></div>
            </main>
            <footer>
                <div>${footer.text}</div>
                <div></div>
                <div></div>
            </footer>
        `;
        document.body.innerHTML= template;
    }
}

new App;

/*
class App {
    constructor (header, generator, footer){
        this.header = header;
        this.generator = generator;
        this.footer = footer;
    }
}

const renderTemplate = new App (header.pageTitle, 'this is the generator', 'this is the footer');

const template = `
    <header>
        <div id="banner-icon">
            <div><h1>${renderTemplate.header}</h1></div>
            <div><img id="logo" src=${headerLogo.pageLogoSrc}></></div>
        </div>
        <div><p>${subheading.subtext}</p></div>
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

*/