import { Ui } from "./ui.js";

export class Details{
    constructor(id){
        document.getElementById("btnClose").addEventListener("click",()=>{
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".home").classList.remove("d-none")
            
            
        })

        this.loading=document.querySelector(".loading")
        this.getDetailse(id)
    }
    async getDetailse(id){
        this.loading.classList.remove("d-none")

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '62369be48emshe24888b4ff0ad59p114d8fjsnb5d3651363cd',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        const url=await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        const response=await url.json()
        // console.log(response);
        this.loading.classList.add("d-none")
        new Ui().displayDetails(response)
        
        
    }
}