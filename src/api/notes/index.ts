import { Router } from "express";
import {
  createNoteController,
  getAllNotesController,
  getNoteByIdController,
  updateNoteController,
} from "./notesController";

const router = Router();
router.get("/", getAllNotesController);
router.get("/:id", getNoteByIdController);
router.post("/", createNoteController);
router.put("/:id", updateNoteController);

export default router;
