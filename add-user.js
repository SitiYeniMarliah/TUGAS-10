const response = require('express')

fetch('http://localhost:3000/api/users',{
    method:'POST',
    headers :{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name:'Zaidan',
        email:'zaidan@gmail.com',
        phone:'000000000000'
    })
})
.then(response=>response.json())
.then(data => console.log(data))
.catch(error => console.log(error))