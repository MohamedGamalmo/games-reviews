export class Ui {

    constructor(){}
    displayGames(data) {
       let gamesBox = ``;
       for (let i = 0; i < data.length ; i++) {
          gamesBox +=
           `
        <div class="col-md-3 content1">
            <div class="content" data-id="${data[i].id}" >
              <div class=" position-relative ">
                <img src="${data[i].thumbnail}" class="d-block w-100 p-2" alt="">
              </div>
                <div class="hstack justify-content-between p-2">
                 <h4 class="small">${data[i].title}</h4>
                 <span class="free text-bg-primary ">Free</span>
              </div>
              <div class="parag p-2">
                <p class="hstack text-center">${data[i].short_description.split(" ", 6)}</p>
                </div>
              <hr class="m-0">
              <div class="footer d-flex justify-content-between p-2">
                <h6>${data[i].genre}</h6>
                <h6>${data[i].platform}</h6>
              </div>
            </div>
        </div>
         `;
       }
 
       document.querySelector(".games").innerHTML = gamesBox;
    }
 
    displayDetails(data){
       let box=`
            <div class="col-md-6">
                <div class="detImg">
                  <img src="${data.thumbnail}" class="d-block w-75" alt="">
                </div>
              </div>
                <div class="col-md-6">
                  <div class="detText">
                  <h2>Title: ${data.title}</h2>
                  <h4>Category: <span class="category">${data.genre}</span></h4>
                  <h4>Platform: <span class="platform">${data.platform}</span></h4>
                  <h4>Status: <span class="status">${data.status}</span></h4>
                  <p class="description">${data.description}</p>
                  <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                </div>
                </div>
    `  
        document.querySelector(".det").innerHTML=box;
    }
    
 }
 