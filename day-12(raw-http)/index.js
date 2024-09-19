const http = require('http');
const url = ""

http.request(url,(response) => {
    
    const data = ''
    
    response.on('data',(chunk) => {
        data = data + chunk.toSting()
        // console.log(chunk)
    })

    response.on('end',() => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error',(error) => {
    console.log('An Error',error)
})

request.end()