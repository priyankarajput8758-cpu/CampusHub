import DashboardLayout from "../layouts/DashboardLayout";
import { Mail, GraduationCap, BookOpen, User } from "lucide-react";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">

        <div className="flex flex-col items-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white">
            P
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            Priyanka Rajput
          </h1>

          <p className="text-slate-500">
            Computer Science Student
          </p>

        </div>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" />
            <span>priyanka@email.com</span>
          </div>

          <div className="flex items-center gap-4">
            <GraduationCap className="text-blue-600" />
            <span>BMS College of Engineering</span>
          </div>

          <div className="flex items-center gap-4">
            <BookOpen className="text-blue-600" />
            <span>Semester 4</span>
          </div>

          <div className="flex items-center gap-4">
            <User className="text-blue-600" />
            <span>USN: 1BM23CS001</span>
          </div>

        </div>

        <button className="mt-10 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
          Edit Profile
        </button>

      </div>
    </DashboardLayout>
  );
};

export default Profile;