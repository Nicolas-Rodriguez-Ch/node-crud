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

export const getNoteByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const note = await getNoteById(parseInt(id, 10));
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note found!", data: note });
  } catch (error) {
    next(error);
  }
};

export const updateNoteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await updateNote(parseInt(id, 10), title, content);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note updated", data: note });
  } catch (error) {
    next(error);
  }
};

export const deleteNoteController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const note = await deleteNote(parseInt(id, 10));

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(204).json({ message: "Note deleted succesfully", data: note });
  } catch (error) {
    next(error);
  }
};
