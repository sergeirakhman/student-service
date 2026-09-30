const students = new Map();
let collection;

export const init = db => collection = db.collection("college");

export const createStudent = async ({id, name, password}) => {
    const student = await collection.findOne({_id: id});

    if (student) return false;

    await collection.insertOne({_id: id, name, password, scores: {}});
    return true;
}

export const findStudentById = async id => await collection.findOne({ _id: id }, {projection: {password:0}});

export const removeStudent = async id => await collection.findOneAndDelete({_id: id}, {projection: {password:0}});

export const updateStudent = async (id, data) => await collection.findOneAndUpdate({_id: id}, {$set: data}, {projection: {scores:0}, returnDocument:'after'});

export const findStudentsByName = async name => await collection.find({name: {$regex:`^${name}$`, $options:'i'}}, {projection: {password:0}}).toArray();

export const countStudentsByNames = async names => {
    const regexNames = names.map(name => new RegExp(`^${name}$`, 'i'));
    return await collection.countDocuments({name: {$in: regexNames}});
}

export const findStudentsByMinScore = (exam, minScore) => [...students.values()].filter(s => s.scores[exam] >= minScore);