const mongoose = require('mongoose');

const {Schema} = mongoose;

// * Title - Text
// * Description - Text
// * Comments - Text
// * Rating - scale of 1 - 10 
// * Image - Text - URL
// * Start Date - DateTime
// * End Date - DateTime
// * Latitude - Number
// * Longitude - Number
// * Created At - DateTime
// * Updated At - DateTime

const requireString = {
    type: String,
    required: true,
};

const logEntrySchma = new Schema({
    title: requireString, // String is shorthand for {type: String}
    Description: String,
    Comments:   String,
    image: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    latitude:{
        type: Number,
        required: true,
        min: -90,
        max: 90,
    },
    longitude:{
        type: Number,
        required: true,
        min: -180,
        max: 180,
    },
    visitDate:{
        type: Date,
        required: true,
    },
},{
    timestamps: true,
    // created_at: { type: Date, default: Date.now, required: true, },
    // updated_at: { type: Date, default: Date.now, required:true,},

});

const LogEntry = mongoose.model('LogEntry', logEntrySchma);

module.exports = LogEntry;