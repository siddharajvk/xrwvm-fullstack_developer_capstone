/* jshint esversion: 6 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    dealer_id: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true
    },
    purchase: {
        type: Boolean,
        required: true
    },
    purchase_date: {
        type: Date,
        required: true
    },
    car_make: {
        type: String,
        required: true
    },
    car_model: {
        type: String,
        required: true
    },
    car_year: {
        type: Number,
        required: true
    },
    sentiment: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);
