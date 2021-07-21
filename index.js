//express server
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.use(
    cors({
        origin: "*",
        methods: "GET",
        preflightContinue: false,
        optionsSuccessStatus: 204
    })
);


app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});
