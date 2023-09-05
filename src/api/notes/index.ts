import { Router } from "express";
import { createNoteController, getAllNotesController } from "./notesController";

const router = Router();
router.get("/", getAllNotesController);
router.post("/", createNoteController);

export default router;
