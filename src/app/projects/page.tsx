import { FolderGit2 } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 rounded-lg">
          <FolderGit2 className="text-blue-600" size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">My Projects</h2>
      </div>

      <p className="text-slate-500">Daftar project akan muncul di sini...</p>
      {/* Nanti kita panggil komponen <ProjectCard /> di sini */}
    </section>
  );
}