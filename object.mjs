class api {
  static jenis = "hiburan";
  #apikey = "13997e33";
  #link_Search = "http://www.omdbapi.com/?apikey=13997e33&s=";
  constructor() {
    this.apikey = this.#apikey;
    this.dari = "omdapi";
  }
  film(judul) {
    let link = `http://www.omdbapi.com/?apikey=13997e33&s=${judul}`;

    fetch(link)
      .then((e) => e.json())
      .then((response) => {
        let film = response.Search;
        // console.log(film);
        let x = "";
        console.log(film)
        film.forEach((e) => {
          x += ` <div class="card mb-2" style="width: 18rem;">
          <img src="${e.Poster}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${e.Title}</h5>
            <p class="card-text">${e.Year}</p>
            <a href="#" class="mdl-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdb="${e.imdbID}">Go somewhere</a>
          </div>
        </div>
      
    `;
        });

        let wadah = document.getElementById("pembungkus");
        wadah.innerHTML = x;

        let modalbtn= document.querySelectorAll(".mdl-btn")
        modalbtn.forEach((e)=>{
          e.addEventListener("click",function(){
            console.log(this.dataset.imdb)
            let idfilm= this.dataset.imdb
            fetch(`http://www.omdbapi.com/?apikey=13997e33&i=`+idfilm)
            // fetch(`http://www.omdbapi.com/?apikey=13997e33&i=${idfilm}`)
            .then(((e)=> e.json()))
            .then((response)=>{ 

              let isidetail = `
              <div class="container-fluid">
              <div class="col-2">
                <img src="${response.Poster}"alt="...">
              </div>
              <div class="col">
                <ul class="list-group">
                  <li class="list-group-item">nama: muhammad </li>
                  <li class="list-group-item">kitab suci alquran</li>
                  <li class="list-group-item">islam</li>
                  <li class="list-group-item">${response.Title}</li>
                  <li class="list-group-item">${response.Plot}</li>
                </ul>
            </div>
              `
              let detailmdl = document.querySelector(".modal-body")

              detailmdl.innerHTML= isidetail
              
              console.log(response)

       

            })
          
          
          })
        })

      })
      .catch((response) => {
        alert(
          " judul yang anda cari belum tersedia di server kami\n silahkan cari judul lain"
        );
      });
  }
}

let data = new api();

export { data };
// export let cont = document.getElementById("cari")
// cont.addEventListener("click",()=>{alert("ok")})
