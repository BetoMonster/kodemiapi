
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
/*router.post('/',async (request,response)=>{
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
})*/

router.post('/',async (request,response)=>{
    try{
        const koderCreated = await koders.create(request.body)
        response.json({ 
            success: true,
            message: 'New Koder created :D',
            data: {
                koders: koderCreated
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at koder creation',
            error:  error.message
            
        })
    }    
})


//DELETE
/*
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
*/
router.delete('/:id',async (request,response)=>{
    try{
        const { id } = request.params
        const koderDeleted = await koders.deleteById(id)
        response.json({ 
            success: true,
            message: 'Koder deleted',
            data: {
                koders: koderDeleted
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at koder deletion',
            error:  error.message
            
        })
    }    
})

router.patch('/:id',async (request,response)=>{
    try{
        const { id } = request.params
        const koderUpdated = await koders.updateById(id,request.body)
        response.json({ 
            success: true,
            message: 'Koder updated',
            data: {
                koders: koderUpdated
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at koder update',
            error:  error.message
            
        })
    }    
})


module.exports = router
