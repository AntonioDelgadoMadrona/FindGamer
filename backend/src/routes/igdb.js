var axios = require("axios");
var app = require("../app");

// var API_KEY = "f0f1952d6e1bfdcea5a1bdd0785d2a85";
// var API_KEY = "ffcf240e48780de90bcbc0dea4ecac93";
// var API_KEY = "415fe0b9204132522e64181ccd609ac0";
// var API_KEY = "c2f1d9cdffcb96713fe4e594b35945d2";
var API_KEY = "a28bc2b42206c362aa5c24af2e887e6d";

// BUSCADOR DE JUEGOS(POR PLATAFORMA)
app.get("/games/search/platforms/:id/:sortingMethod?", function(req, res) {
  // console.log(req.params.id)
  let platform = req.params.id;
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data: `fields name,cover.image_id,platforms.name,release_dates.date,rating,genres.name;where rating > 50 & themes != 42 & platforms = ${
      platform === "1" ? "(48,49,6,130)" : platform
    };sort ${
      req.params.sortingMethod
        ? req.params.sortingMethod
        : "first_release_date asc"
    };limit 20;`
  })
    .then(response => {
      // console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
    });
});

// BUSQUEDA POR NOMBRE
app.get("/games/search:name", function(req, res) {
  console.log(req.params.name);
  let game = '';
  if(req.params.name){
    game = req.params.name;
  }
  
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data: `fields name,cover.image_id,platforms.name,release_dates.date,rating; search "${game}";`
  })
    .then(response => {
      // console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(err => {
      // console.error(err);
      res.send(err);
    });
});

// MOSTRAR TODA LA INFO DE UN JUEGO
app.get("/game/info/:id", function(req, res) {
  console.log(req.params);
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data: `fields name,cover.image_id,platforms.name,screenshots.image_id,release_dates.date,summary,rating,involved_companies.company.name,genres.name,screenshots.image_id; where id = ${
      req.params.id
    };`
  })
    .then(response => {
      //   console.log(response.data)
      res.status(200).send(response.data);
    })
    .catch(err => {
      // console.error(err);
      res.send(err);
    });
});

// LOS ULTIMOS JUEGOS PUBLICADOS
app.get("/lastgames", function(req, res) {
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data:
      "fields name,cover.image_id,genres.name,platforms.name,release_dates.date;where themes != 42 & popularity > 100;sort first_release_date desc;limit 16;"
  })
    .then(response => {
      //   console.log(response.data)
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});

// LOS JUEGOS MAS ESPERADOS
app.get("/hypegames", function(req, res) {
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data:
      "fields name,cover.image_id,release_dates.date,platforms.name,screenshots.url,hypes;where hypes >100;sort hypes desc;limit 12;"
  })
    .then(response => {
      // console.log(response.data)
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});

// NOTICIAS
app.get("/news", (req, res) => {
  axios({
    url: "https://api-v3.igdb.com/pulses",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data:
      "fields author,created_at,image,published_at,title,uid,updated_at,videos,website.url;sort created_at desc;limit 12;"
  })
    .then(response => {
      // console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});

// LOS JUEGOS CON MAS RATING
app.get("/ratedgames", (req, res) => {
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data:
      "fields name,cover.image_id,platforms.name,rating,genres.name;sort rating desc;where rating > 90 & themes != 42 & popularity > 30;limit 10;"
  })
    .then(response => {
      // console.log(response.data)
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});

// TOP 10 JUEGOS MAS POPULARES
app.get("/popularitygames", (req, res) => {
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data:
      "fields name,cover.image_id,platforms.name,popularity,involved_companies.company.name;sort popularity desc;where popularity >200;limit 10;"
  })
    .then(response => {
      // console.log(response.data)
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});

// LOS MEJORES JUEGOS CAROUSEL
app.get("/carouselgames", (req, res) => {
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data:
      "fields name,cover.image_id,popularity,rating;sort popularity desc;where rating >95;limit 10;"
  })
    .then(response => {
      // console.log(response.data)
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});
