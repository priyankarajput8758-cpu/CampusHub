import { Search, Upload } from "lucide-react";

import NoteCard from "../features/notes/NoteCard";
import DashboardLayout from "../layouts/DashboardLayout";
import { notes } from "../data/notesData";

const Notes = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Notes
          </h1>

          <p className="mt-1 text-slate-500">
            Browse and download notes shared by students.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
          <Upload size={18} />
          Upload Notes
        </button>
      </div>

      {/* Search */}
      <div className="relative mt-8">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search notes..."
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none focus:border-blue-600"
        />
      </div>

      {/* Notes List */}
      <div className="mt-8 space-y-5">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            subject={note.subject}
            semester={note.semester}
            uploadedBy={note.uploadedBy}
            uploadDate={note.uploadDate}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Notes;