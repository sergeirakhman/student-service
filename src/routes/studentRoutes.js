import {Router} from "express";
import {addStudent, findStudent} from "../controller/studentController";

const router = Router();

router.post("/student", addStudent);
router.put("/student/:id", findStudent);

export default router;