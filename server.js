const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"))
app.get('/', (req, res) => {
    res.render("/index.html");
})

const server = app.listen(port, () => console.log(`Listening on port ${port}`));