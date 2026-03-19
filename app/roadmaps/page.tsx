"use client";

import { useState } from "react";
import { Map, CheckCircle, Download, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Roadmaps = () => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  const roadmaps = [
    {
      id: 1,
      title: "HTML Roadmap",
      steps: ["HTML Basics", "Semantic Tags", "Forms & Inputs", "Accessibility"],
      url: "https://roadmap.sh/pdfs/roadmaps/html.pdf",
    },
    {
      id: 2,
      title: "CSS Roadmap",
      steps: ["CSS Basics", "Flexbox", "Grid", "Responsive Design"],
      url: "https://roadmap.sh/pdfs/roadmaps/css.pdf",
    },
    {
      id: 3,
      title: "JavaScript Roadmap",
      steps: ["Variables", "Functions", "DOM", "Async JS"],
      url: "https://roadmap.sh/pdfs/roadmaps/javascript.pdf",
    },
    {
      id: 4,
      title: "React Roadmap",
      steps: ["Components", "Props & State", "Hooks", "Routing"],
      url: "https://roadmap.sh/pdfs/roadmaps/react.pdf",
    },
    {
      id: 5,
      title: "Next.js Roadmap",
      steps: ["Routing", "SSR/SSG", "API Routes", "Deployment"],
      url: "https://roadmap.sh/pdfs/roadmaps/nextjs.pdf",
    },
    {
      id: 6,
      title: "Node.js Roadmap",
      steps: ["Node Basics", "Modules & NPM", "Express.js", "REST APIs"],
      url: "https://roadmap.sh/pdfs/roadmaps/nodejs.pdf",
    },
    {
      id: 7,
      title: "Python Roadmap",
      steps: ["Python Basics", "Control Flow", "OOP", "Libraries"],
      url: "https://roadmap.sh/pdfs/roadmaps/python.pdf",
    },
    {
      id: 8,
      title: "Java Roadmap",
      steps: ["Java Basics", "OOP", "Collections", "Spring"],
      url: "https://roadmap.sh/pdfs/roadmaps/java.pdf",
    },
    {
      id: 9,
      title: "C++ Roadmap",
      steps: ["Basics", "Pointers", "STL", "OOP"],
      url: "https://roadmap.sh/pdfs/roadmaps/cpp.pdf",
    },
    {
      id: 10,
      title: "SQL Roadmap",
      steps: ["CRUD", "Joins", "Indexes", "Normalization"],
      url: "https://roadmap.sh/pdfs/roadmaps/sql.pdf",
    },
  ];

  //  Filter by search
  const filteredRoadmaps = roadmaps.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  //  Show only 6 initially
  const displayedRoadmaps = showAll
    ? filteredRoadmaps
    : filteredRoadmaps.slice(0, 6);

  return (
    <div className="p-6 max-w-7xl mx-auto my-24">
      {/* Heading */}
      <h1 className="text-3xl md:text-6xl text-center font-bold font-game mb-6 text-yellow-500">
        Developer Roadmaps
      </h1>
      <p className="text-center text-gray-400 font-game text-xl mb-10"> Step-by-step guides to help you master different domains.</p>

      /* Search Bar */
<div className="flex justify-center mb-8">
  <div className="relative w-full max-w-md">
    {/* Icon */}
    <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />

    {/* Input */}
    <input
      type="text"
      placeholder="Search roadmap (e.g. React, Python...)"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full pl-10 pr-4 py-2 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>
</div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedRoadmaps.map((roadmaps) => (
          <div
            key={roadmaps.id}
            className="p-6 border-l-4 border-yellow-500 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-yellow-400 text-black rounded-lg">
                <Map size={22} />
              </div>
              <h2 className="text-2xl font-game">
                {roadmaps.title}
              </h2>
            </div>

            {/* Steps */}
            <ul className="space-y-2 mb-4">
              {roadmaps.steps.map((step, index) => (
                <li key={index} className="flex items-center text-gray-300 font-game text-xl gap-2">
                  <CheckCircle size={16} className="text-yellow-400" />
                  {step}
                </li>
              ))}
              {roadmaps.steps.length >= 4 && (
                <li className="text-gray-300 italic">+ more...</li>
              )}
            </ul>

            {/* Button */}
            <Link href={roadmaps.url}>
            <Button
              variant="pixel"
              className="w-full flex items-center justify-center gap-2 font-game text-lg sm:text-xl px-6 py-4 cursor-pointer"
            >
              Download <Download size={18}/>
            </Button>
          </Link>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      {filteredRoadmaps.length > 6 && (
        <div className="flex justify-center mt-10">
          <Button
            variant="pixel"
            onClick={() => setShowAll(!showAll)}
            className="font-game px-6 py-2 text-lg sm:text-xl cursor-pointer"
          >
            {showAll ? "Show Less" : "Show All Roadmaps"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Roadmaps;