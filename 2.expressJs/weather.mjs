import express from 'express';
const app = express()


// http://192.168.0.104:3000/profile
app.get('/', (req, res) => {
    console.log('hello world', new Date());
  res.send('hello world' + new Date());
})


app.get('/profile', (req, res) => {
  console.log('this is profile', new Date());
res.send('this is profile' + new Date());
})


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})