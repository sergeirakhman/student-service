import {Schema, model, version} from 'mongoose';

const studentSchema = new Schema({
    _id: {type: Number, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    scores: {type: Map, key: String, of: Number, default: []},

}, {
        versionId: false,
        toJSON: {
            transform(doc, ret) {
                ret.id = doc._id;
                delete ret._id;
            }
        }
    }
)

const Student = model('student', studentSchema, 'college');
export default Student;