import * as studentService from '../service/studentService.js'
import {err_404} from "../errors/err.js";

export const addStudent = async (req, res) => {
    const success = await studentService.addStudent(req.body);

    success ? res.status(204).send() : res.status(409).send('Not found');
};

export const findStudent = async (req, res) => {
    const student = await studentService.findStudent(req.params.id);

    student ? res.json(student) : res.status(404).send(err_404(req.params.id, req.params));
};

export const removeStudent = async (req, res) => {
    const student = await studentService.removeStudent(req.params.id);

    student ? res.json(student) : res.status(404).send(err_404(req.params.id, req.params));
};

export const updateStudent = async (req, res) => {
    const student = await studentService.updateStudent(req.params.id, req.body);

    student ? res.json(student) : res.status(404).send(err_404(req.params.id, req.params));
};

export const addScore = async (req, res) => {
    const success = await studentService.addScore(req.body);

    success ? res.status(204).send() : res.status(404).send(err_404(req.params.id, req.params));
};

export  const findStudentsByName = async (req, res) => {
    const students = await studentService.findStudentsByName(req.params.name);
    res.json(students);
};

export const countStudentsByNames = async (req, res) => {
    const names = [].concat(req.params.names || []);
    const counts = await studentService.countStudentsByNames(names);
    res.json(counts);
};

export const findStudentsByMinScore = async (req, res) => {
    const students = await studentService.findStudentsByMinScore(req.params.exam, req.params.minScore);
    res.json(students);
};


