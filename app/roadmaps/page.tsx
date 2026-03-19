"use client";

import { useState } from "react";
import { Map, CheckCircle, Download } from "lucide-react";
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
    <div className="p-6 max-w-7xl mx-auto my-28">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl text-center font-bold font-game mb-6 text-gray-800">
        Developer Roadmaps
      </h1>
      <p className="text-center text-gray-600 font-game text-lg mb-10"> Step-by-step guides to help you master different domains.</p>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search roadmap (e.g. React, Python...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 border-3">
        {displayedRoadmaps.map((roadmaps) => (
          <div
            key={roadmaps.id}
            className="p-6 border-l-4 border-yellow-400 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-yellow-100 text-yellow-500 rounded-lg">
                <Map size={22} />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {roadmaps.title}
              </h2>
            </div>

            {/* Steps */}
            <ul className="space-y-2 mb-4">
              {roadmaps.steps.map((step, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle size={16} className="text-yellow-400" />
                  {step}
                </li>
              ))}
              {roadmaps.steps.length >= 4 && (
                <li className="text-gray-500 italic">+ more...</li>
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
            variant={"pixel"}
            onClick={() => setShowAll(!showAll)}
            className=" px-6 py-2 rounded-lg hover:bg-black transition"
          >
            {showAll ? "Show Less" : "Show All Roadmaps"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Roadmaps;