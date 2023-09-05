import { Router } from "express";
import {
  createNoteController,
  deleteNoteController,
  getAllNotesController,
  getNoteByIdController,
  updateNoteController,
} from "./notesController";

const router = Router();
router.get("/", getAllNotesController);
router.get("/:id", getNoteByIdController);
router.post("/", createNoteController);
router.put("/:id", updateNoteController);
router.delete("/:id", deleteNoteController);

export default router;
