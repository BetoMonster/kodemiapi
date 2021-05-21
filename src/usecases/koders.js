
//EndPoint -> caso de uso -> modelo
const Koders = require ('../models/koders')

function getAll(){
   return Koders.find()  //se regresa una promesa
}

function insertKoder(koder){
    const {name,lastname, age, gender} = koder
    return Koders.create({ name, lastname, age, gender })
}

function deleteKoder(koderId){
    return Koders.findByIdAndDelete(koderId);
}

module.exports = {
    getAll,
    insertKoder,
    deleteKoder
}
