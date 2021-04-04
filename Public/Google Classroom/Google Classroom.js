const Client = require('google-classroom')

const client = new Client({
    clientId: 'xxx',
    clientSecret:  'xxx',
    refreshToken: 'xxx'
})

client.on('ready', async classr =>{
    client.getCourses()
        .then(data =>{
            console.log(data)
        })
})