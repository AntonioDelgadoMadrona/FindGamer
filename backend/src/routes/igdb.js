var axios = require("axios");
var app = require("../app");

var API_KEY = "f0f1952d6e1bfdcea5a1bdd0785d2a85";
var URL = "https://api-v3.igdb.com";


app.get("/lastgames", function(req, res) {
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data: "fields name,cover.image_id,platforms.name,screenshots.url,popularity;sort popularity desc;limit 8;"
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

// MOSTRAR TODA LA INFO DE UN JUEGO

app.get("/game/info", function(req, res) {
  axios({
    url: "https://api-v3.igdb.com/games",
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data: "fields name,cover.url; where id = 1942;"
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

// MOSTRAR LAS IMAGES DE UN JUEGO
app.get("/game/cover", (req, res) => {
  console.log(req);
  axios({
    url: "https://api-v3.igdb.com/screenshots",
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY
    },
    data: "fields alpha_channel,animated,game,height,image_id,url,width;"
  })
    .then(response => {
      //   console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
    });
});

// axios({
//   url: "https://api-v3.igdb.com/games/",
//   method: 'POST',
//   headers: {
//       'Accept': 'application/json',
//       'user-key': API_KEY
//   },
//   body: "fields game; search mario; where name != null;"
// })
//   .then(response => {
//       console.log(JSON.stringify(response.data, undefined, 2));
//   })
//   .catch(err => {
//       console.error(err);
//   });
