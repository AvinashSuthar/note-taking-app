// title
// content
// createAt

import mongoose, { Schema, Document, models } from "mongoose";

export interface Note extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const NoteSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const NoteModel =
  models.NoteModel || mongoose.model<Note>("NoteModel", NoteSchema);
export default NoteModel;
