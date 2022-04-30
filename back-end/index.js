const express = require('express');
const graphQLHttp = require('express-graphql');
const schema = require('./src/schema');
const cors = require('cors')
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require("body-parser")
const database = require('./config/database');
const cloudinary = require('cloudinary');
const port = 3000;

const Professor = require('./src/models/Professor');

cloudinary.config({
    cloud_name: 'dvuzy4836',
    api_key: '517711196614376',
    api_secret: 'k-L7JRrx3simgn1fWT3P_n-PpNA'
});

mongoose.Promise = global.Promise;
mongoose.connect(database.mongoConnectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to DB');
    }
});

const app = express();


app.use(cors())

let jsonParser = bodyParser.json({
    limit: 1024 * 1024 * 2000,
    type: 'application/json'
});
let urlencodedParser = bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 20,
    type: 'application/x-www-form-urlencoding'
})

app.use(jsonParser);
app.use(urlencodedParser);

app.use('/graphql', graphQLHttp({
    schema: schema,
    graphiql: true
}));

// Serve any static files
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/addProfessors', async function (req, res) {
    try {
       await req.body.data.forEach( async(professor, i) => {
            let researchAreaModified = [];
            let dummyIntro = 'Hello from professor';
            if(professor.researchAreas !== undefined){
                researchAreaModified = professor.researchAreas.split(';')
            }
            if(professor.introduction !== undefined){
                dummyIntro = professor.introduction
            }
            const data = {...professor, researchAreas: researchAreaModified, introduction: dummyIntro}
            const uModel = new Professor(data);
            const newProfessor = await uModel.save();
            if(!newProfessor) {
                throw new Error(Error)
            }
        })
        res.json({success: true})
    } catch (err) {
        throw new Error(err);

    }
});

app.listen(port, () => {
    console.log('server running at port', port)
});