import * as studentService from '../service/studentService.js'

export const addStudent = async (req, res) => {
    const success = await studentService.addStudent(req.body);

    success ? res.status(204).send() : res.status(409).send('Not found');
};

export const findStudent = async (req, res) => {
    const student = await studentService.findStudent(req.params.id);

    student ? res.json(student) : res.status(404).send({
        "timestamp": new Date().toISOString(),
        "status": 404,
        "error": "Not Found",
        "message": `Student with id ${req.params.id} not found`,
        "path": req.params
    });
};

export const removeStudent = async (req, res) => {};

export const updateStudent = async (req, res) => {};


