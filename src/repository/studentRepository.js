import Student from '../model/student.js';

export const createStudent = student => Student.create(student);

export const findStudentById = id => Student.findById(id).select({password:0}).exec();

export const removeStudent = id => Student.findByIdAndDelete(id).select({password:0}).exec();

export const updateStudent = (id, data) => Student.findByIdAndUpdate(id, data, {returnDocument:'after'}).select({password:0}).exec();

export const findStudentsByName = name => Student.find({name: new RegExp(`^${name}$`, 'i')});

export const countStudentsByNames = names => {
    const regexNames = names.map(name => new RegExp(`^${name}$`, 'i'));
    return Student.countDocuments({name: {$in: regexNames}});
}

export const findStudentsByMinScore = (exam, minScore) => Student.find({[`scores.${exam}`]: {$gte: minScore}}).select({password:0}).exec();