import { Request, Response, NextFunction } from "express";
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from "./notesServices";

export const getAllNotesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notes = await getAllNotes();
    res.status(200).json({ message: "Notes found", data: notes });
  } catch (error) {
    next(error);
  }
};

export const createNoteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;
    const note = await createNote(title, content);
    res.status(201).json({ message: "Note created!", data: note });
  } catch (error) {
    next(error);
  }
};
