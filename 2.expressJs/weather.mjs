import express from 'express';
const app = express()


// http://192.168.0.104:3000/profile
app.get('/', (req, res) => {
    console.log('hello world', new Date());
  res.send('hello world' + new Date());
})


app.get('/weather', (req, res) => {
  console.log('this is profile', new Date());

  res.send({
     city: 'America',
     tempInC: 30,
     humidity: 56,
     high: 32,
     low: 18
  });
})


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})