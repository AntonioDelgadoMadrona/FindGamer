var axios = require("axios");
var app = require("../app");

var API_KEY = "f0f1952d6e1bfdcea5a1bdd0785d2a85";

// BUSCADOR DE JUEGOS
app.get("/games/search", function(req, res) {
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data: `fields name,cover.image_id,platforms.name,release_dates.date,rating;where popularity > 200;sort rating desc; limit 26;`
  }).then(response => {
      console.log(response.data)
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
    data: `fields name,cover.image_id,platforms.name,release_dates.date,summary,rating,involved_companies.company.name,genres.name,screenshots.image_id; where id = ${
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
      "fields name,cover.image_id,genres.name,platforms.name;where popularity > 80;limit 14;"
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
      "fields name,cover.image_id,platforms.name,screenshots.url,hypes;where hypes >100;sort hypes desc;limit 8;"
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
      "fields name,cover.image_id,platforms.name,rating;sort rating desc;limit 10;where rating <100 & rating >95;"
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
