"use client";

import { Building2, MapPin, Briefcase } from "lucide-react"; // Icons
import React from "react";

const ExperienceCard = ({
  experiences,
}: {
  experiences: {
    companyName: string;
    companyLocation: string;
    role: string;
  }[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300"
        >
          {/* Company */}
          <div className="flex items-center mb-2">
            <Building2 className="text-blue-600 w-5 h-5 mr-2" />
            <h3 className="text-lg font-bold text-gray-800">{exp.companyName}</h3>
          </div>

          {/* Role */}
          <div className="flex items-center mb-2">
            <Briefcase className="text-green-600 w-5 h-5 mr-2" />
            <p className="text-sm text-gray-700 font-medium">{exp.role}</p>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <MapPin className="text-red-500 w-5 h-5 mr-2" />
            <p className="text-sm text-gray-600">{exp.companyLocation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
