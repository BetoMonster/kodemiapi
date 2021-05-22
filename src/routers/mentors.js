
const express = require('express')
const router = express.Router()
const mentors = require('../usecases/mentors')

router.get('/', async (request, response)=>{
    try{
        const  allMentors = await mentors.getAll()
        response.json({ 
            success: true,
            message: 'All mentors',
            data: {
                koders: allMentors
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at get all mentors',
            error:  error.message
            
        })
    }
})

router.post('/', async (request, response)=>{
    try{
        const createdMentor = await mentors.create(request.body)
        response.json({ 
            success: true,
            message: 'Mentor created :)',
            data: {
                koders: createdMentor
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at mentor create',
            error:  error.message
            
        })
    }
})


router.patch('/:id', async (request, response)=>{
    try{
        const updatedMentor = await mentors.updateById(request.params.id, request.body)
        response.json({ 
            success: true,
            message: 'Mentor updated :)',
            data: {
                koders: updatedMentor
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at mentor update',
            error:  error.message
            
        })
    }
})

router.delete('/:id', async (request, response)=>{
    try{
        const deletedMentor = await mentors.deleteById(request.params.id)
        response.json({ 
            success: true,
            message: 'Mentor deleted :)',
            data: {
                koders: deletedMentor
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at mentor delete',
            error:  error.message
            
        })
    }
})

module.exports = router
