import express from 'express';
import mongoose from 'mongoose';
//import multer from 'multer';
//import { storage } from './config/multer.js';
//import router from './route.js';
const app = express();
const MONGODB_URI='mongodb+srv://nour:nour123@cluster0.opfx1yj.mongodb.net/Ecommerce';
await mongoose.connect(MONGODB_URI).then(()=>{// we can also use async await to connect to the database first then start server (not available in express5) : await mongoose.connect(MONGODB_URI)
  console.log('Connected to MongoDB');
}).catch((err)=>{
  console.error('Error connecting to MongoDB',err);
});

//const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } })
 // configure multer to save uploaded files to the uploads directory
const PORT = 3000;


/* app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads')) */
 // middleware to parse urlencoded data from the request body (not available in express5) : app.use(express.urlencoded())
/* app.use('/public',express.static('public')) // serve static files from the public directory (css js images) : we can also use app.use('/static', express.static('public')) to serve static files from a different path (http://localhost:3000/static/css/style.css)
app.use('/images',express.static('images'))
 */
//set ejs as the view engine
//app.use(upload.single('image'))
 // parse data middleware to handle file uploads (not available in express5) : app.use(upload.single('file')) : this will handle file uploads from a form with an input field named 'file' (send from client to server)
app.set('view engine', 'ejs') // we can also set the views directory if we want to use a different directory for our views (not available in express5) : app.set('views', path.join(__dirname, 'views'))

app.use((req,res,next)=>{  //'/welcome': middlewre for that path 
  console.log('new request received at '+Date.now()) // log the time of the request
  next() // call next middleware or route handler
})//middleware to log incoming requests

app.use((req,res,next)=>{
  console.log('this is the second middleware') 
  // this will be executed after the first middleware
  res.on('finish',()=>{
    console.log('End');
    
  })
  next()
//we can use 3rd party middleware (cookie parser body parser) or we can create our own middleware like this to log the time of the request and the end of the request (after response is sent)
})
app.get('/', (req, res) => {// create route for the root path
  res.send('Hello worldd and welcome!');
/* const username='nour elabed'
  res.render('index',{username}) */ // render the index.ejs view and pass the username variable to it
});// we can use pug or handlebars as view engine instead of ejs render html file to display dynamic content 

/* app.post('/form', (req,res)=>{
  console.log(req.body) // we need to use express.json() middleware to parse the request body (not available in express5) : app.use(express.json())
  console.log(req.file)
  res.send('Form received successfully') */
//}) // route to handle form submission (send from client to server)

/* app.get('/welcome', (req, res) => {// create route for the root path
  res.send('Hello worldd and welcome!');
}); 
 */
/* app.use('/user',router)
app.use(express.json())
app.post('/users',(req,res)=>{ // we parsed data from the request body using express.json() middleware (we had desructure error before because we were not parsing the body)
  const {name, email}=req.body//post request body to create a new user (send from client to server)
  res.json({message:`User ${name} with email ${email} created successfully`})
})
app.put('/users/:id',(req,res)=>{
  const userId =req.params.id
  const {name, email}=req.body
  res.json({
    message:`User with id ${userId} updated successfully with name ${name} and email ${email}`
  })
}) //put request to update user data (send from client to server)
app.delete('/users/:id',(req,res)=>{
  const userId =req.params.id
  res.json({
    message:`User with id ${userId} deleted successfully`
  }) //delete request to delete a user (send from client to server)
}) */
/* app.get('/things/:name/:id',(req,res)=>{//([0-9]{5}) : no longer availavle :  //we use if( (!/^[0-9]{5}$/.test(id)))
  const {name,id}=req.params
  res.json({
    id,
    name
  }) */
//}) //route with dynamic parameters (send from client to server)
//catch invalid routes: 
/* app.use((req, res) => { //app.get('*', (req, res) => { // this will catch all routes that are not defined above( not available anymore in express5)
  res.status(404).send('Route not found');
}); */


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
