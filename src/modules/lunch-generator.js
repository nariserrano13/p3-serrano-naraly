export default class LunchGenerator {
    constructor(text){
        this.text = text;
    }
}

export function printGeneratorText(LunchGenerator){
    console.log('The generator has ${LunchGenerator.text}');
}
