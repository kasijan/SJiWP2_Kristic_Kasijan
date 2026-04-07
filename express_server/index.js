import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send("<h1>My Home Page</h1>")
})
app.get('/about', (req, res) => {
  res.send("<h3>About my page</h3>")
})
app.get('/contact', (req, res) => {
  res.send("<h3>Contact us</h3>")
})
app.get('/info', (req, res) => {
  res.send("<h3>Info</h3>")
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})