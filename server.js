const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/webhook", async (req, res) => {
  await axios.post(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
    {
      chat_id: process.env.CHAT_ID,
      text: req.body.message
    }
  );
  res.send("OK");
});

app.listen(process.env.PORT || 3000);
