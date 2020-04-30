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
                title: 'Chicken Burrito Bowl',
                image: './images/chicken_bowl.jpg'
            },
            {
                title: 'Shredded Chicken Tacos',
                image: './images/chicken_tacos.jpg'
            },
            {
                title: 'Asian Chicken Wrap w/ Peanut Sauce',
                image: './images/chicken_wrap.jpg'
            },
            {
                title: 'Chicken Parmesan Sandwhich',
                image: './images/chicken_sandwhich.jpg'
            }
        ];
        this.lunchSeaArray = [
            {
                title: 'Tuna Quinoa Salad',
                image: './images/sea_salad.jpg'
            },
            {
                title: 'Thai Salmon Chili Skewers',
                image: './images/sea_skewers.jpg'
            },
            {
                title: 'Shrimp & Avacado Salad',
                image: './images/sea_shrimpsalad.jpg'
            },
            {
                title: 'Shrimp Ceviche Tostada',
                image: './images/sea_tostada.jpg'
            },            
            {
                title: 'Cod Fish Tacos',
                image: './images/sea_tacos.jpg'
            }
        ];

        this.lunchBeefArray = [
            {
                title: 'Beef Broccoli Stir Fry',
                image: './images/beef_stirfry.jpg'
            },
            {
                title: 'Hamburger Pizza',
                image: './images/beef_pizza.jpg'
            },
            {
                title: 'Beef Tacos',
                image: './images/beef_tacos.jpg'
            },
            {
                title: 'Cheeseburger',
                image: './images/beef_burger.jpg'
            },
            {
                title: 'Thai Beef Salad',
                image: './images/beef_salad.jpg'
            }
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
        for (let i = this.lunchSeaArray.length -1; i > 0; i--){
              const j = Math.floor(Math.random() * i)
              const k = this.lunchSeaArray[i]
              this.lunchSeaArray[i] = this.lunchSeaArray[j]
              this.lunchSeaArray[j] = k
        }
        for (let i = this.lunchBeefArray.length -1; i > 0; i--){
              const j = Math.floor(Math.random() * i)
              const k = this.lunchBeefArray[i]
              this.lunchBeefArray[i] = this.lunchBeefArray[j]
              this.lunchBeefArray[j] = k
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

            document.getElementById("buttonSea").addEventListener('click', ()=>{
                this.sorting();
                seaContainer.innerHTML = this.lunchSeaArray[0].title
                seaImg.src = this.lunchSeaArray[0].image
            })
            
            document.getElementById("buttonBeef").addEventListener('click', ()=>{
                this.sorting();
                beefContainer.innerHTML = this.lunchBeefArray[0].title
                beefImg.src = this.lunchBeefArray[0].image
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

