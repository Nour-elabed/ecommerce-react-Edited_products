import express from 'express';
//import router from './route.js';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {// create route for the root path
  res.send('Hello worldd!');
});
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
app.get('/things/:name/:id',(req,res)=>{
  const {name,id}=req.params
  res.json({
    id,
    name
  })
}) //route with dynamic parameters (send from client to server)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
