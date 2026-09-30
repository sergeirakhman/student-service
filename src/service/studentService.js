import * as repo from "../repository/studentRepository.js";

export const addStudent = async student => await repo.createStudent(student);

export const findStudent = async id => renameID(await repo.findStudentById(+id));

export const removeStudent = async (id) => renameID(await repo.removeStudent(+id));

export const updateStudent = async (id, data) => renameID(await repo.updateStudent(+id, data));

export const addScore = async (id, exam, score) => {
    console.log(id)
    return await repo.updateStudent(+id, {[`scores.${exam}`]: score});
}

export const findStudentsByName = async (name) => {
    const students = await repo.findStudentsByName(name);
    return students.map(student => renameID(student));
}

export const countStudentsByNames = async (names) => {
    names = Array.isArray(names) ? names : [names];
    return repo.countStudentsByNames(names);
}

export const findStudentsByMinScore = async (exam, minScore) => repo.findStudentsByMinScore(exam, minScore);

function renameID(student) {
    const { _id, ...rest } = student;
    return {id: _id, ...rest};
}