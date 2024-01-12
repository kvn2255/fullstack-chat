
//import express
const express = require("express");
//bring in cors so to call server from any other origin
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//create post endpoint for authentication
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
 
   // Store a user-copy on Chat Engine!
   try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username},
      { headers: { "PRIVATE-KEY": "7a6b4964-e27b-4b30-9eac-e54c88db5e41" }}
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

