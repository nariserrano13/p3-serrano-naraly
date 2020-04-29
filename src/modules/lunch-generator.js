class LunchGenerator {
    constructor(text){
        this.text = text;
    }
}

class PlantLunchGenerator extends LunchGenerator{
    constructor(text, recipe){
        super(text);
        this.recipe = recipe;
    }
    
    const plantBasedIdea = [
    "plant1",
    "plant2",
    "plant3",
    "plant4",
    "plant5"
    ];

    plantBasedIdeas=()=>{
    let i,j,k;

    for (i = quotes.length -1; i > 0; i--){
          j = Math.floor(Math.random() * i)
          k = plantBasedIdea[i]
          plantBasedIdea[i] = plantBasedIdea[j]
          plantBasedIdea[j] = k
    }
    document.getElementById("plantBasedContainer").innerHTML = plantBasedIdea[0];
    }
}
export const lunchGenerator = new LunchGenerator ('generator goes here');

export const plantLunchGenerator = new PlantLunchGenerator ("",plantBasedIdea[0]);
