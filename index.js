const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");

const config = require("./config/env.js");
const passport = require("./midlewares/passport");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./controllers/swaggercontroller");
const routes = require("./Routes/routes");

const sessionOptions = {
    secret: "api_ecommerce",
    resave: false,
    saveUninitialized: true,
};

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + "/public"));

// Rotas
app.get("/docs/swagger.json", (req, res) => res.json(swaggerSpec));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

app.use('/', routes);

// Inicializar o servidor
app.listen(config.port, function () {
    console.log(`App running on localhost:${config.port}`);
});
