import { Metadata } from "next";
import ProjectCard from "@/component/ProjectsCard";

export const metadata: Metadata = {
  title: "Projects",
};
const Projects = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`); //ssg // incremental static site regenration
  const projects = await res.json();

  return (
    <div>
      <p className="text-4xl font-bold text-center my-5 text-[#334155] relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-[#3c91b2] after:transition-all after:duration-500 hover:after:w-full">
        Projects
      </p>

      <div className="grid ">
        <ProjectCard projects={projects.data}></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
