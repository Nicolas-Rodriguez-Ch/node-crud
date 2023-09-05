import { Router } from "express";
import {
  createNoteController,
  getAllNotesController,
  getNoteByIdController,
} from "./notesController";

const router = Router();
router.get("/", getAllNotesController);
router.get("/:id", getNoteByIdController);
router.post("/", createNoteController);

export default router;
