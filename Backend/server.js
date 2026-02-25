import express from 'express';
//import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';
/* import cookieParser from 'cookie-parser';
import session from 'express-session'; */
//import { connectDB } from './config/db.js';
//import {Person} from './models/Person.js';
//import multer from 'multer';
//import { storage } from './config/multer.js';
//import router from './route.js';
const app = express();
// configure multer to save uploaded files to the uploads directory with a file size limit of 5MB (not available in express5) : const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } }) : we can also set other options for multer like fileFilter to filter files by type (not available in express5) : const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 }, fileFilter: (req, file, cb) => { if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') { cb(null, true) } else { cb(new Error('Only JPEG and PNG files are allowed'), false) } } })
//const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } })
 // configure multer to save uploaded files to the uploads directory
const PORT = 3000;
app.use(express.json()); 
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // exit the process with a non-zero code to indicate an error    
})// handle uncaught exceptions to prevent the server from crashing (not available in express5) : we can also handle unhandled promise rejections (not available in express5) : process.on('unhandledRejection', (reason, promise) => { console.error('Unhandled Rejection:', reason) })
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1); // exit the process with a non-zero code to indicate an error    
})
//app.use(cookieParser()) // middleware to parse cookies from the request headers (not available in express5) : app.use(cookieParser())
//await connectDB()
/* //always ad it if we are parsing any json data
app.use(session({
  secret: 'my-secret-key', // secret key to sign the session ID cookie (not available in express5) : app.use(session({ secret:
  resave: false, // whether to save the session back to the session store even if it was never modified during the request (not available in express5) : app.use(session({ resave: false }))
  saveUninitialized: false, */ // whether to save uninitialized sessions to the session store (not available in express5) : app.use(session({ saveUninitialized: false }))
  // middleware to handle sessions (not available in express5) : app.use(session({ secret: 'my-secret-key', resave: false, saveUninitialized: false })) 
//}))
//const users=[]
// we can use an array to store user data in memory (not recommended for production) : we can also use a database like MongoDB to store user data (not available in express5) : we can create a User model and use it to create, read, update, and delete user data in the database
// we can also use sessions to keep track of logged-in users and their data (not available in express5) : we can use req.session to store user data in the session and access it in subsequent requests (not available in express5) : req.session.user = user
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
  console.log('new request received at : '+Date.now()) // log the time of the request
  next() // call next middleware or route handler
})//middleware to log incoming requests

app.use((req,res,next)=>{
  console.log('this is the second middleware') 
  // this will be executed after the first middleware
  res.on('finish',()=>{
    console.log('End');
    // this will be executed after the response is sent to the client (after the request is finished)
  })
  next() // call next middleware or route handler
//we can use 3rd party middleware (cookie parser body parser) or we can create our own middleware like this to log the time of the request and the end of the request (after response is sent)
})
app.get('/', (req, res) => {// create route for the root path 
 // res.cookie('name','express-app',) // set a cookie in the response headers (not available in express5) : res.cookie('name', 'value', { options }) : we can also set options for the cookie like maxAge, httpOnly, secure, etc. (not available in express5) : res.cookie('name', 'value', { maxAge: 900000, httpOnly: true })
  res.send('Hello worldd and welcome!'); // {maxAge : 360000} // set the cookie to expire in 1 hour (not available in express5) : res.cookie('name', 'value', { maxAge: 3600000 }) : we can also set the cookie to be a session cookie that expires when the browser is closed (not available in express5) : res.cookie('name', 'value', { maxAge: 0 })
});
// SYNCHRONOUS ERROR
app.get('/sync-error',(req,res)=>{ 
  try{ 
  throw new Error('This is a synchronous error') // this will be caught by the default error handler in express and will send a 500 Internal Server Error response to the client (not available in express5) : we can also create a custom error handler to handle errors in a specific way (not available in express5) : app.use((err, req, res, next) => { console.error(err.stack) res.status(500).send('Something went wrong!') })
  } catch(error){
    next(error)
   } // pass the error to the next middleware (error handler)
  })

// ASYNCHRONOUS ERROR
app.get('/async-error', async (req, res,next) => {
  try {
    await Promise.reject(new Error('This is an asynchronous error')) // this will be caught by the catch block and will send a 500 Internal Server Error response to the client (not available in express5) : we can also create a custom error handler to handle errors in a specific way (not available in express5) : app.use((err, req, res, next) => { console.error(err.stack) res.status(500).send('Something went wrong!') })
  } catch (error) {
    next(error)
  }
})
//global error handeling middlewqre
app.use((err, req, res, next) => {
  console.error(err.stack) // log the error stack trace to the console
  res.status(500).json({message:err.message}) // send a JSON response with a status code of 500 and the error message (not available in express5) : res.status(500).json({ message: err.message }) : we can also send a custom error message to the client (not available in express5) : res.status(500).json({ error: 'An error occurred on the server'
   })


/* //GET ALL PRODUCT
app.get('/api/products',( req,res)=>{
  
    const products = [
      { id: 1, name: 'Laptop', price: 10 },
      { id: 2, name: 'phone', price: 20 },
      { id: 3, name: 'tv', price: 30 },  
    ] ;
    res.status(200).json({products}) // send the products as a JSON response with a status code of 200 (not available in express5) : res.json(products) : we can also set a custom status code for the response (not available in express5) : res.status(201).json(products)
})
//GET A SINGLE PRODUCT
app.get('/api/products/:id',( req,res)=>{
  const {id}=req.params
const products = [
      { id: 1, name: 'Laptop', price: 10 },
      { id: 2, name: 'phone', price: 20 },
      { id: 3, name: 'tv', price: 30 },  
    ] ;
    const product = products.find(p => p.id === Number(req.params.id) ) // find the product with the given id (not available in express5) : Product.findById(id)
    if(product){
      res.status(200).json({product}) // send the product as a JSON response with a status code of 200 (not available in express5) : res.json(product) : we can also set a custom status code for the response (not available in express5) : res.status(201).json(product)
    } else{
      res.status(404).json({message:'Product not found'}) // send a JSON response with a status code of 404 if the product is not found (not available in express5) : res.status(404).json({ message: 'Product not found' })
    }
})
// CREATE NEW PRODUCT
app.post('/api/products',( req,res)=>{
  const newProduct=req.body
  newProduct.id= Date.now() // generate a unique id for the new product (not available in express5) : we can also use a library like uuid to generate unique ids (not available in express5) : newProduct.id = uuid.v4()
  res.status(201).json({message:'Product created successfully',newProduct}) // send a JSON response with a status code of 201 and the new product (not available in express5) : res.status(201).json(newProduct) : we can also set a custom message for the response (not available in express5) : res.status(201).json({ message: 'Product created successfully', product: newProduct })
}) */
// UPDATE A PRODUCT

/* app.post('/register', async(req,res)=>{
const{username,password}=req.body
const hashedPassword= await bcrypt.hash(password,10) // hash the password using bcrypt with a salt rounds of 10 (not available in express5) : we can also use a different number of salt rounds (not available in express5) : const hashedPassword = await bcrypt.hash(password, 12
users.push({//push function adds user with xusername and xpasword in the end of the array user(append)
  username,
  password:hashedPassword
  
})
res.send('user registered')
})
/* app.post('/login', async(req,res)=>{
const{username,password}=req.body
const user= users.find(u=>u.username===username)
if(!user ||!(await bcrypt.compare(password /*normal password */
//,user.password))){ //if user doesnt exist or pass doesnt match Without sessions: User logs in Next request → server forgets who they are With sessions: User logs in once Server keeps their identity stored
/* return res.send('not authorized') 
}
const token=jwt.sign({username:user.username},'secretkey',{expiresIn:'1h'}) // generate a JWT token with the username as the payload and a secret key to sign the token (not available in express5) : we can also set an expiration time for the token (not available in express5) : const token = jwt.sign({ username: user.username }, 'secretkey', { expiresIn: '1h' })
res.json({token}) // send the token to the client in the response body (not available in express5) : res.json({ token }) : we can also send the token in a cookie (not available in express5) : res.cookie('token', token, { httpOnly: true })
/* req.session.user= user //save user in session
res.send('user logged in') */
//}) */
/* app.get('/dashboard',(req,res)=>{
  try {

     const token = req.header('authorization') // get the token from the request headers (not available in express5) : we can also get the token from a cookie (not available in express5) : const token = req.cookies.
  const decodedToken = jwt.verify(token,'secretkey') // verify the token using the same secret key (not available in express5) : we can also handle errors that may occur during token verification (not available in express5) : try { const decoded = jwt.verify(token, 'secretkey') } catch (err) { return res.status(401).send('Invalid token') }
     if(decodedToken.username){
    res.send(`welcome ${decodedToken.username} to your dashboard`)
     } else{
      res.send('not authorized')
     }
  } catch (error) {
     res.send('not authorized')
  } */
  /* */
  /*  if(!req.session.user){
    return res.send('unauthorized')
  }
  res.send(`welcome ${req.session.user.username}`) */
//})
/* app.get('/visit', (req, res) => {
  if (req.session.visitCount) {
    req.session.visitCount++  // increment the visit count in the session
  } else {
    req.session.visitCount = 1 // initialize the visit count in the session
  }   */
/*   res.send(`You have visited this page ${req.session.visitCount} times.`);
}) */ // route to track the number of visits to the page using sessions (not available in express5) : app.get('/visit', (req, res) => { if (req.session.visitCount) { req.session.visitCount++ } else { req.session.visitCount = 1 } res.send(`You have visited this page ${req.session.visitCount} times.`) })
/* app.get('/remove-session',(req,res)=>{
  req.session.destroy() // destroy the session and remove it from the session store (not available in express5) : req.session.destroy(callback) : we can also pass a callback function to handle any errors that may occur during session destruction (not available in express5) : req.session.destroy((err) => { if (err) { console.error(err) } else { res.send('Session removed successfully') } })
  res.send('Session removed successfully')
}) */ // route to remove the session (not available in express5) : app.get('/remove-session', (req, res) => { req.session.destroy() res.send('Session removed successfully') })
/* app.get('/remove-cookie',(req,res)=>{
  res.clearCookie('name') // clear a cookie from the response headers (not available in express5) : res.clearCookie('name', { options }) : we can also set options for the cookie like path, domain, etc. (not available in express5) : res.clearCookie('name', { path: '/welcome' })
  res.send('Cookie removed successfully')
}) */


/* app.get('/fetch',(req,res)=>{
  console.log(req.cookies) // access cookies from the request headers (not available in express5) : req.cookies : we can also access signed cookies if we use cookie-parser with a secret (not available in express5) : req.signedCookies
  res.send('Cookies received successfully(api called)') 
}) */
/* const username='nour elabed'
  res.render('index',{username}) */ // render the index.ejs view and pass the username variable to it
// we can use pug or handlebars as view engine instead of ejs render html file to display dynamic content 
//creation and saving data in mongodb
/* app.post('/person', async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const newPerson = new Person({ name, age, email });
    await newPerson.save();

    console.log(newPerson);

    res.send({ message: 'Person createdsuccessfully' });
  } catch (error) {
    console.error(error);
   res.send(error.message) 
   
    /we can also send a custom error message to the client (not available in express5) : res.status(500).send({ error: 'An error occurred while creating the person' })
  }
}); */

  
//update data in mongodb
/* app.put('/person',async (req,res)=>{
 
  const{id}=req.body 
  const personData= await Person.findByIdAndUpdate(id,{age:40}) */ // find the person by id and update their age to 30 (send from client to server) : we use {new:true} to return the updated document instead of the original document (not available in express5) : Person.findByIdAndUpdate(id,{age:30},{new:true})

/*   personData.age=30
  await personData.save() */
  /* find() returns a cursor to a list of all documents that match the query criteria.
findOne() returns a single document (the first one found) that matches the query criteria.
findById() is a helper function that finds a single document by its unique _id field.  */
  // find the person in the database by email (send from client to server)
  /* console.log(personData)
  res.send({message:'Person updated successfully'})// route to handle form submission (send from client to server) : we need to use express.json() middleware to parse the request body (not available in express5) : app.use(express.json())
}) */
//delete data from mongodb
/* app.delete('/person/:id',async (req,res)=>{
  const{id}=req.params
  await Person.findByIdAndDelete(id) // find the person by id and delete them from the database (send from client to server)
  res.send({message:'Person deleted successfully'})// route to handle form submission (send from client to server) : we need to use express.json() middleware to parse the request body (not available in express5) : app.use(express.json())
})
 */
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

