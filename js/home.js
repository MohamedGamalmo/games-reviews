import { Details } from "./detailse.js";
import { Ui } from "./ui.js";
export class Home { 
    constructor() {
        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                document.querySelector(".navbar-nav .active").classList.remove("active");
                link.classList.add("active")
                const categoryData=link.id;
                this.getGames(categoryData);
                

                

            })
        }
        )

        this.loading=document.querySelector(".loading")
        this.ui= new Ui();
        this.getGames("mmorpg");

    }

    async getGames(category) {
        this.loading.classList.remove("d-none")
        
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '62369be48emshe24888b4ff0ad59p114d8fjsnb5d3651363cd',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const url =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
        const response = await url.json();
        // console.log(response);
        this.loading.classList.add("d-none")
        this.ui.displayGames(response);
        

        document.querySelectorAll(".content").forEach(item =>{
            item.addEventListener("click" ,()=> {
                // console.log("hello");
                document.querySelector(".details").classList.remove("d-none")
                document.querySelector(".home").classList.add("d-none")
                const details = new Details(item.dataset.id);


                
            })
        })
        
    }
}





