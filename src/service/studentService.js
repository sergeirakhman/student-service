import * as repo from "../repository/studentRepository.js";

export const addStudent = async ({id, name, password}) => {
    if (await repo.findStudentById(id)) return false;
    await repo.createStudent({_id: id, name, password});
    return true;
}

export const findStudent = async id => await repo.findStudentById(+id);

export const removeStudent = async (id) => await repo.removeStudent(+id);

export const updateStudent = async (id, data) => await repo.updateStudent(+id, data);

export const addScore = async (id, exam, score) => {
    console.log(id)
    return await repo.updateStudent(+id, {[`scores.${exam}`]: score});
}

export const findStudentsByName = async (name) => await repo.findStudentsByName(name);

export const countStudentsByNames = async (names) => {
    names = Array.isArray(names) ? names : [names];
    return repo.countStudentsByNames(names);
}

export const findStudentsByMinScore = async (exam, minScore) => repo.findStudentsByMinScore(exam, minScore);