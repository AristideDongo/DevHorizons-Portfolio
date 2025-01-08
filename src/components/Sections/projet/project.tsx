import ProjectCard from "./projectCard";

export default function Project() {
  return (
    <div id='project' className="min-h-screen overflow-auto bg-[#001F3F] p-4">
      <header className="text-center mb-8 mt-52">
        <h1 className="text-7xl font-bold text-[#F8F0E5] mb-2">
          An Application He Built
        </h1>
        <p className="text-xl text-[#FFF2D8]">
          Built with dedication, knowledge, and a dash of enchantment
        </p>
      </header>

      <div className="flex items-center justify-center">
        <ProjectCard />
      </div>
    </div>
  );
}
