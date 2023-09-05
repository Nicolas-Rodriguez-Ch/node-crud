import { Router } from "express";
import { getAllNotesController } from "./notesController";

const router = Router();
router.get("/", getAllNotesController);

export default router;
