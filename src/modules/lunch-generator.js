class LunchGenerator {
    constructor(){
        this.lunchPlantArray = 
            [
                {
                    title: 'Tofu Banh Mi',
                    image: './images/plant_banhmi.jpg'
                },
                {
                    title: 'Burrito Bowl',
                    image: './images/plant_burritobowl.jpg'
                },
                {
                    title: 'Chickpea Avacado Salad',
                    image: './images/plant_chickpea.jpg'
                },
                {
                    title: 'Cherry Tomato Pasta',
                    image: './images/plant_pasta.jpg'
                },
                {
                    title: 'Black Bean Taquitos',
                    image: './images/plant_taquitos.jpg'
                }
            ];

        this.lunchChickenArray = [
            {
                title: 'Chicken Quesadilla',
                image: './images/chicken_quesadilla.jpg'
            },
            {
                title: 'chicken 2',
                image: './image/pic.png'
            },
            {
                title: 'chicken 3',
                image: './images/pic.png'
            },
            {
                title: 'chicken 4',
                image: './image/pic.png'
            },
            {
                title: 'chicken 5',
                image: './images/pic.png'
            }
        ];
        this.lunchSeaArray = [

        ];

        this.lunchBeefArray = [

        ];

    }

    sorting(){

        for (let i = this.lunchPlantArray.length -1; i > 0; i--){
              const j = Math.floor(Math.random() * i)
              const k = this.lunchPlantArray[i]
              this.lunchPlantArray[i] = this.lunchPlantArray[j]
              this.lunchPlantArray[j] = k
        }
        for (let i = this.lunchChickenArray.length -1; i > 0; i--){
              const j = Math.floor(Math.random() * i)
              const k = this.lunchChickenArray[i]
              this.lunchChickenArray[i] = this.lunchChickenArray[j]
              this.lunchChickenArray[j] = k
        }
    }

    addText(){
        window.onload =()=>{
            document.getElementById("buttonPlant").addEventListener('click',()=>{
                this.sorting();
                plantBasedContainer.innerHTML = this.lunchPlantArray[0].title
                //add empty img tag in index.js. give it an id
                // .src instead of .innerHTML 
                //plantBasedContainer.src = this.lunchArray[0].image
                plantBasedImg.src = this.lunchPlantArray[0].image
            })

            document.getElementById("buttonChicken").addEventListener('click', ()=>{
                this.sorting();
                chickenContainer.innerHTML = this.lunchChickenArray[0].title
                chickenImg.src = this.lunchChickenArray[0].image
            })
        }
    }

    refreshButton(){
        window.location.reload(); 
    }
    clickRefreshButton(){
        document.getElementById("refreshButton").addEventListener('click',()=>{
        this.refreshButton();
        })
    }
}

export const lunchGenerator = new LunchGenerator ();

