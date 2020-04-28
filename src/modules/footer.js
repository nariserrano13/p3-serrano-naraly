export default class Footer {
    constructor(text){
        this.text = text;
    }
}

export function printFooterText(Footer){
    console.log('The footer has ${Footer.text}');
}



//can only default export one thing
