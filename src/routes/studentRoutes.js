import {Router} from "express";
import {
    addScore,
    addStudent, countStudentsByNames,
    findStudent,
    findStudentsByMinScore,
    findStudentsByName,
    updateStudent
} from "../controller/studentController";
import {removeStudent} from "../service/studentService.js";

const router = Router();

router.post("/student", addStudent);
router.get("/student/:id", findStudent);
router.delete("/student/:id", removeStudent);
router.patch("/student/:id", updateStudent);
router.post("/score/student/:id", addScore);
router.get("/students/name/:name", findStudentsByName);
router.get("//quantity/students", countStudentsByNames);
router.get("/students/exam/:exam/minscore/:minScore", findStudentsByMinScore);

export default router;