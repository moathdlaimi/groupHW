const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({

      title:{type:String, required:true},
      img:{type:String, required:true},
      genre:{type:String, required:true},
      rating:{type:Number, required:true, max_value:5},
      year:{type:Number, required:true}
})



module.exports = mongoose.model('Movie', movieSchema)
