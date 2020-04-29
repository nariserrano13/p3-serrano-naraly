 class Header {
    constructor(subtext, pageTitle, pageLogoSrc){
        this.subtext = subtext;
        this.pageTitle = pageTitle;
        this.pageLogoSrc = pageLogoSrc;
    }
    logSomethingToTheConsole(){
        console.log("something");
    }
}

export const header = new Header ('Header Content');


//const headerImg = new Header ()

  

//do i need this function? I did not get it to print in the console on via index.js
// export function printHeaderText(header){
//     console.log('The header has ${header.text}')
// }