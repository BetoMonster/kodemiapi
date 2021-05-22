
const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
    .then(()=>{
        console.log('DB Connected')
        server.listen(8080, ()=>{
            console.log('Server is listening')
        })

    })
    .catch((error)=>{
        console.error('DB Conection Error: ',error)
    })


// GET /koders

// 1. Crear el modelo necesario(koders)
// 2. Crear el caso de uso necesario
// 3. Crear el Endpoint necesario

/*
Practica:
- POST /koders
- DELETE /koders/:id  koders.findByIdAndDelete(id)
- PATCH /koders/:id

*/ 

/*
Practica:
- GET /mentores
- POST /mentores
- DELETE /mentores/:id  
- PATCH /mentores/:id

Mentors
  - name
  - lastName
  - age
  - gender
  - modulo [ 'front', 'back', 'cloud', 'react' ]

*/ 

/*
Practica 

Middleware que loggea las peticiones

[Metodo] [Ruta] [body]
GET /koders { }
POST /mentores {name}

*/