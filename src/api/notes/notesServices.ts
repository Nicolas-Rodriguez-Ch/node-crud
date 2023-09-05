import { Note } from "../../models/note";

let currentId = 1;

const notes: Note[] = [];

export const createNote = (title: string, content: string): Note => {
  const note: Note = {
    id: currentId++,
    title,
    content,
    dateCreated: new Date(),
  };
  notes.push(note);
  return note;
};

export const getAllNotes = (): Note[] => notes;

export const getNoteById = (id: number): Note | undefined =>
  notes.find((n) => n.id === id);

export const updateNote = (
  id: number,
  title: string,
  content: string
): Note | undefined => {
  const note = getNoteById(id);
  if (note) {
    note.title = title || note.title;
    note.content = content || note.content;
  }
  return note;
};

export const deleteNote = (id: number): boolean => {
  const index = notes.findIndex((n) => n.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    return true;
  }
  return false;
};
