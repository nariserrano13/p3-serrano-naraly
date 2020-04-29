import './main.css';
import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';
import { plantLunchGenerator } from './modules/lunch-generator';
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
         console.log("",plantLunchGenerator);
     }

     renderTemplate(){
        const template = `
            <header>
                <div id="banner-icon">
                    <div><h1></h1></div>
                    <div><img id="logo" src="./images/lunch_icon.png"></></div>
                </div>
                <div><p>${header.subtext}</p></div>
            </header>
            <main>
                <div>${lunchGenerator.text}</div>
                <a onclick="plantBasedIdeas()">CLICK ME</a>
            </main>
            <footer>
                <div>${footer.text}</div>
                <div id="plantBasedContainer"></div>
                <div></div>
            </footer>
        `;
        document.body.innerHTML= template;
    }
}

new App;

