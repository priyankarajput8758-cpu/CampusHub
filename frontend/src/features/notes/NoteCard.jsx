import { FileText, Download } from "lucide-react";

const NoteCard = ({
  title,
  subject,
  semester,
  uploadedBy,
  uploadDate,
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-blue-100 p-3">
          <FileText className="text-blue-600" size={24} />
        </div>

        <div>
          <h3 className="font-semibold text-slate-800">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {subject}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Semester {semester} • {uploadedBy} • {uploadDate}
          </p>
        </div>
      </div>

      {/* Download Button */}
      <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
        <Download size={18} />
        Download
      </button>
    </div>
  );
};

export default NoteCard;