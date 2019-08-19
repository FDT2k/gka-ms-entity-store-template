var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var _ = require('lodash');


var _Schema   = new Schema(  {
    insurer_code: String,
    canton: String,
    year: String,
    region_code: String,
    age_range: String,
    accident: Boolean,
    tarif: String,
    franchise_class: String,
    franchise: String,
    cost: Number,
    tarif_name: String
},{strict:false});


module.exports = mongoose.model('Catalog', _Schema);
