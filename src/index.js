import './main.css';
import { header } from './modules/header';
import { lunchGenerator } from './modules/lunch-generator';
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
                <h2>PICK A PROTEIN:</h2>
                <div class="buttons_container">
                    <a id="buttonPlant"> Veggie </a>
                    <a id="buttonChicken"> Chicken </a>
                    <a id="buttonSea"> Seafood</a>
                    <a id="buttonBeef"> Beef </a>
                </div>
            </main>
            <footer class=container>
                <h2>${footer.text}</h2>
                <div class="food_container">
                    <div>
                        <div id="plantBasedContainer"></div>
                        <img id="plantBasedImg"></img>
                    </div>
                    <div>
                        <div id="chickenContainer"></div>
                        <img id="chickenImg"></img>
                    </div>
                    <div>
                        <div id="seaContainer"></div>
                        <img id="seaImg"></img>
                    </div>
                    <div>
                        <div id="beefContainer"></div>
                        <img id="beefImg"></img>
                    </div>
                </div>
                <div>
                    <p>${footer.subtext}</p>
                </div>
                <div class="refresh">
                    <a id="refreshButton">TRY AGAIN</a>
                </div>
            </footer>
        `;
        document.body.innerHTML= template;
    }
}

new App;

