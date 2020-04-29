 class Header {
    constructor(pageTitle, subtext, pageLogoSrc){
        this.pageTitle = pageTitle;
        this.subtext = subtext;
        this.pageLogoSrc = pageLogoSrc;
    }
    logSomethingToTheConsole(){
        console.log("something");
    }
}

export const header = new Header ("Random Lunch Generator","when you just cannot decide what to eat");


//const headerImg = new Header ()

  

//do i need this function? I did not get it to print in the console on via index.js
// export function printHeaderText(header){
//     console.log('The header has ${header.text}')
// }