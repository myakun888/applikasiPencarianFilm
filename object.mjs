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
        let x=""
        film.forEach(e => {
          x+= `<div class="card mt-3 me-1" style="width: 16rem">
          <img src="${e.Poster}" class="card-img-top" alt="..." />
           <ul class="list-group list-group-flush">
            <li class="list-group-item fw-bolder">${e.Title}</li>
            <li class="list-group-item">${e.Year}</li>
          
          </ul>
        </div>`


          
        });

        let wadah = document.getElementById("pembungkus")
        wadah.innerHTML=x

      })
      .catch((response)=>{ alert(" judul yang anda cari belum tersedia di server kami\n silahkan cari judul lain")})
  }
}


let data = new api()


export{data}
// export let cont = document.getElementById("cari")
// cont.addEventListener("click",()=>{alert("ok")})
 
