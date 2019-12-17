import * as compression from 'compression';
import * as express from 'express';
import * as session from 'express-session';
import * as helmet from 'helmet';
import { MySQL } from './mysql/MySql';
import { any_route_get } from './routes/any_route';
import { example_route_get, example_route_post } from './routes/example_route';
import { index_route_get } from './routes/index_route';
import { add_question_route_post, add_question_route_get } from './routes/add_question_route';
import { SocketConnection } from './socket_connection/SocketConnection';

const app = express();

const server = app.listen(80);


SocketConnection.initialize(server);

app.use(helmet());
app.use(compression());
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    store: MySQL.sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// initialize session variables
app.use((req, res, next) => {
    if (!req.session.initialized) {
        req.session.exampleUserName = Math.random();

        req.session.initialized = true;
    }

    next();
});

// example
app.use((req, res, next) => {
    // req obj is the same in all middleware functions and route handlers
    console.log(req.session.exampleUserName);
    next();
});

app.get('/', index_route_get);

app.get('/example', example_route_get).post('/example', example_route_post);

// post questions and answers to database
app.post('/add-question', add_question_route_post);

// show add_question page
app.get('/add-question', (req, res) => { res.sendFile(__dirname + '/views/add_question.html') });

app.get('*', any_route_get);