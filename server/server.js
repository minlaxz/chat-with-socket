const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")))

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})