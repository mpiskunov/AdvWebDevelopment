var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    
//      First name (firstName)
//      Last name (lastName)
//      Department (department)
//      Start Date  (startDate)
//      Job Title  (jobTitle)
//      Salary  (salary)
    firstName: String,
    lastName: String,
    department: String,
    startDate: {
        type: Date,
        "default": Date.now
    },
    jobTitle: String,
    salary: {
        type: Number,
        required: true,
        min: 0,
        max: 100000
    },
    
//    author: String,
//    rating: {
//        type: Number,
//        required: true,
//        min: 0,
//        max: 5
//    },
//    reviewText: String,
//    createdOn: {
//        type: Date,
//        "default": Date.now
//    }
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;