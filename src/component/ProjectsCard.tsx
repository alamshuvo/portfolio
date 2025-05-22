"use client";

import { Github, Server, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  projects,
}: {
  projects: {
    projectsName: string;
    liveLink: string;
    githubFrontendLink: string;
    githubBackendLink: string;
    projectPhoto: string;
    backendLiveLink: string;
    deployedIn: string;
    description: string;
  }[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {projects?.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition border border-gray-200 flex flex-col justify-between h-full"
        >
          {/* Top Content */}
          <div className="p-5">
            {/* Image */}
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.projectPhoto || "/placeholder.png"}
                alt={project.projectsName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Project Info */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {project.projectsName}
            </h2>

            <p
              className="text-sm text-gray-600 mb-4 overflow-hidden"
              style={{
                maxHeight: "72px",
                lineHeight: "1.5rem",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              {project.description}
            </p>

            <p className="text-xs text-gray-500">
              <span className="font-medium text-gray-700">Deployed In:</span>{" "}
              {project.deployedIn}
            </p>
          </div>

          {/* Bottom Links */}
          <div className="px-5 pb-5 mt-auto flex flex-wrap gap-2 border-t pt-4">
            <Link
              href={project.liveLink}
              target="_blank"
              className="flex items-center gap-1 text-blue-600 text-sm hover:underline"
            >
              <Globe className="w-4 h-4" /> Live
            </Link>

            <Link
              href={project.backendLiveLink}
              target="_blank"
              className="flex items-center gap-1 text-[#317a91] text-sm hover:underline"
            >
              <Server className="w-4 h-4" /> Backend Live
            </Link>

            <Link
              href={project.githubFrontendLink}
              target="_blank"
              className="flex items-center gap-1 text-gray-800 text-sm hover:underline"
            >
              <Github className="w-4 h-4" /> Frontend Code
            </Link>

            <Link
              href={project.githubBackendLink}
              target="_blank"
              className="flex items-center gap-1 text-gray-800 text-sm hover:underline"
            >
              <Github className="w-4 h-4" /> Backend Code
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
