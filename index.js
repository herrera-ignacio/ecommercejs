const { env } = require('./load-env')
const { app } = require('./src/app')

//== Environment ==//
console.log('Loaded environment:', env)

//== Start listening ==//
const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port ${port}`))
