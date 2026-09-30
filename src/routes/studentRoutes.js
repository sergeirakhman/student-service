import {Router} from "express";
import {
    addScore,
    addStudent, countStudentsByNames,
    removeStudent,
    findStudent,
    findStudentsByMinScore,
    findStudentsByName,
    updateStudent
} from "../controller/studentController.js";

const router = Router();

router.post("/student", addStudent);
router.get("/student/:id", findStudent);
router.delete("/student/:id", removeStudent);
router.patch("/student/:id", updateStudent);
router.patch("/score/student/:id", addScore);
router.get("/students/name/:name", findStudentsByName);
router.get("/quantity/students", countStudentsByNames);
router.get("/students/exam/:exam/minscore/:minScore", findStudentsByMinScore);

export default router;