class Footer {
    constructor(text){
        this.text = text;
    }
}

export const footer = new Footer ('Your Lunch:');

   

//can only default export one thing
// export function printFooterText(Footer){
//     console.log('The footer has ${Footer.text}');
// }