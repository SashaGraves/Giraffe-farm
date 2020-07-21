const {Schema, model} = require('mongoose');

const GiraffeSchema = new Schema({
    name: {type: String, required: true, unique: true},
    weight: {type: Schema.Types.Mixed},
    sex: {type: String},
    height: {type: Schema.Types.Mixed}, 
    color: {type: String}, 
    diet: {type: String}, 
    temper: {type: String}, 
    image: {type: String}
});

module.exports = model('Giraffe', GiraffeSchema);
