
//EndPoint -> caso de uso -> modelo
const Koders = require ('../models/koders')

function getAll(){
   return Koders.find()  //se regresa una promesa
}

/*function insertKoder(koder){
    const {name,lastname, age, gender} = koder
    return Koders.create({ name, lastname, age, gender })
}
*/
function create({name,lastname, age, gender}){
    return Koders.create({ name, lastname, age, gender })
}
/*
function deleteKoder(koderId){
    return Koders.findByIdAndDelete(koderId);
}
*/
function deleteById(id){
    return Koders.findByIdAndDelete(id);
}

function updateById(id,dataToUpdate){
    return Koders.findByIdAndUpdate(id,dataToUpdate);
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}
