'use strict'

// --------------------------------------


try {
   if(true) {
       throw { name : 'Aerror' , message : 'this is an error'}
   }
} catch (err) {
    // console.log(err);
    console.log(err.name , err.message)
}