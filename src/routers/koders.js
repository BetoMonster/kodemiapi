
const express = require('express')
const router = express.Router()
const koders = require('../usecases/koders')

//GET
router.get('/',async (request,response)=>{
    try{
        const allKoders= await koders.getAll()
        response.json({ //respuesta con 3 keys success, message, data
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })

    }catch(error){
        response.status(400)
        response.json({ //respuesta con 3 keys succes,message,error
            success: false,
            message: 'Error at get all koders',
            error:  error.message
            
        })
    }    
})

//POST
router.post('/',async (request,response)=>{
    try{
        const insertedKoder= await koders.insertKoder(request.body)
        response.json({ 
            success: true,
            message: 'New Koder created :D',
            data: {
                koders: insertedKoder
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at save a new koder :(',
            error:  error.message
            
        })
    }    
})


//DELETE
router.delete('/:id',async (request,response)=>{
    try{
    
        const deleteKoder = await koders.deleteKoder(request.params.id)
        response.json({ 
            success: true,
            message: 'Koder successfully eliminated :D',
            data: {
                koders: deleteKoder
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at delete a koder :(',
            error:  error.message
            
        })
    }    
})



module.exports = router
