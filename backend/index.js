let express = require('express'),
    mongoose = require('mongoose'),
    cors =  require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db')

//Express route

const userRoute = require('./routes/user.route');

//conceting mongodb
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser: true
}).then(()=>{
    console.log('Database success conceting...');
},
    error =>{
        console.log('Not connect'+error)
    }
)
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use('/user',userRoute);

// app.get('/', (req, res) => res.send('Hello world!'));

// port
const port = process.env.PORT || 4000;
const sever = app.listen(port, ()=>{
    console.log( 'connect to port ' + port)
})

//404 Error
app.use((req,res,next)=>{
    next(createError(404))
})

    
app.use(function(err,req,res,next){
    console.error(err.message);
    if (!err.statusCode) err.statusCode=500;
    res.status(err.statusCode).send(err.message);
})