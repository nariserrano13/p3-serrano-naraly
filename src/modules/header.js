export default class Header {
    constructor(text){
        this.text = text
    }
}

export function printHeaderText(header){
    console.log('The header has ${header.text}')
}