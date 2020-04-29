import './main.css';
import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';
//import { plantLunchGenerator } from './modules/lunch-generator';
import { footer } from './modules/footer';



class App{
     constructor(){
         this.renderTemplate();
        lunchGenerator.addText();
        lunchGenerator.clickRefreshButton();
     }

     renderTemplate(){
        const template = `
            <header class=container>
                <div id="banner-icon">
                    <div><h1>${header.pageTitle}</h1></div>
                    <div><img id="logo" src="./images/lunch_icon.png"></></div>
                </div>
                <div><p>${header.subtext}</p></div>
            </header>
            <main class=container>
                <div></div>
                <div>
                    <a id="buttonPlant">Plant Based</a>
                    <a id="buttonChicken"> Chicken </a>
                </div>
            </main>
            <footer class=container>
                <div>${footer.text}</div>
                <div id="plantBasedContainer"></div>
                <img id="plantBasedImg"></img>

                <div id="chickenContainer"></div>
                <img id="chickenImg"></img>

                <div>${footer.subtext}</div>
                <a id="refreshButton">TRY AGAIN</a>
            </footer>
        `;
        document.body.innerHTML= template;
    }
}

new App;

