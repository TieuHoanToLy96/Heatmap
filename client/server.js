const express = require("express")
const server = express()
const path = require('path');

server.set("port", 6868)

server.use(express.static('dist'))

server.get("/dist/bundle.js", (req, res) => {
  res.sendFile(__dirname + "/dist/bundle.js")
})
server.get("/", (req, res) => {
  res.send("test")
})

server.listen(server.get("port"), (req, res) => {
  console.log("Server is running on %", server.get("port"))
})