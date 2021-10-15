let mongoose = require('mongoose')

const StudentsSchema = new mongoose.Schema({
    first_name: String,
    last_name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true
    },
    total: {
        type: Number,
        default: 0.0,
        validate(v) {
            if(v < 0) throw new Error("Total Marks can not be negative");
        }
    }
})

const Student = mongoose.model("Student", StudentsSchema)
module.exports = Student