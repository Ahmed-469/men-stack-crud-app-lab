const mongoose = require('mongoose');

const carsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, min: 1970 },
    price: { type: Number, min: 0 },
    isElectric: Boolean,
    description: String
}, { timestamps: true });

const Car = mongoose.model('Car',carsSchema);
module.exports = Car;