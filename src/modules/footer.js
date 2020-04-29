class Footer {
    constructor(text,subtext){
        this.text = text;
        this.subtext = subtext;
    }
}

export const footer = new Footer ('Your Lunch:','not feeling this option?');

   

//can only default export one thing
// export function printFooterText(Footer){
//     console.log('The footer has ${Footer.text}');
// }