import express from 'express'

const app = express();

const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.send("Hello API! social network");
})

app.listen(port, () => console.log(`server running on port ${port}`))