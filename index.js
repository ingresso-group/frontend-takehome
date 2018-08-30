const express = require("express");
const path = require("path");
const request = require("request");
const app = express();

app.use(express.static(__dirname + "/build"));
app.use(express.static(__dirname + "/views"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(5656, () => {
  console.log("http://localhost:5656");
});

const apiURL = "https://www.fromtheboxoffice.com/api";

app.get("/api/calendar/:eventID", (req, res) => {
  request(
    `${apiURL}/calendar/${req.params.eventID}`,
    (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send(response.body);
      } else {
        res.status(response.statusCode);
        if (response.statusCode === 404) {
          res.send("Event not found");
        } else if (response.statusCode < 500) {
          res.send("Invalid request");
        } else {
          res.send("Server error");
        }
      }
    }
  );
});

app.get("/api/months/:eventID", (req, res) => {
  request(`${apiURL}/months/${req.params.eventID}`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(response.body);
    } else {
      res.status(response.statusCode);
      if (response.statusCode === 404) {
        res.send("Event not found");
      } else if (response.statusCode < 500) {
        res.send("Invalid request");
      } else {
        res.send("Server error");
      }
    }
  });
});

app.get("/api/event/:eventID/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const url = `${apiURL}/event/${req.params.eventID}`;
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(response.body);
    } else {
      res.status(response.statusCode);
      if (response.statusCode === 404) {
        res.send("Event not found");
      } else if (response.statusCode < 500) {
        res.send("Invalid request");
      } else {
        res.send("Server error");
      }
    }
  });
});
