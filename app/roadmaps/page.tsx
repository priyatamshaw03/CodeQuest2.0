"use client";

import { useState } from "react";
import { Map, CheckCircle, Download, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Roadmaps = () => {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");

  const roadmaps = [
    {
      id: 1,
      title: "HTML Roadmap",
      tags: ["Frontend", "Beginner"],
      steps: ["HTML Basics", "Semantic Tags", "Forms & Inputs", "Accessibility"],
      url: "https://roadmap.sh/pdfs/roadmaps/html.pdf",
    },
    {
      id: 2,
      title: "CSS Roadmap",
      tags: ["Frontend", "Design"],
      steps: ["CSS Basics", "Flexbox", "Grid", "Responsive Design"],
      url: "https://roadmap.sh/pdfs/roadmaps/css.pdf",
    },
    {
      id: 3,
      title: "JavaScript Roadmap",
      tags: ["Frontend", "Core"],
      steps: ["Variables", "Functions", "DOM", "Async JS"],
      url: "https://roadmap.sh/pdfs/roadmaps/javascript.pdf",
    },
    {
      id: 4,
      title: "React Roadmap",
      tags: ["Frontend", "Library"],
      steps: ["Components", "Props & State", "Hooks", "Routing"],
      url: "https://roadmap.sh/pdfs/roadmaps/react.pdf",
    },
    {
      id: 5,
      title: "Next.js Roadmap",
      tags: ["Frontend", "Fullstack"],
      steps: ["Routing", "SSR/SSG", "API Routes", "Deployment"],
      url: "https://roadmap.sh/pdfs/roadmaps/nextjs.pdf",
    },
    {
      id: 6,
      title: "Node.js Roadmap",
      tags: ["Backend", "API"],
      steps: ["Node Basics", "Modules & NPM", "Express.js", "REST APIs"],
      url: "https://roadmap.sh/pdfs/roadmaps/nodejs.pdf",
    },
    {
      id: 7,
      title: "Python Roadmap",
      tags: ["Backend", "AI"],
      steps: ["Python Basics", "Control Flow", "OOP", "Libraries"],
      url: "https://roadmap.sh/pdfs/roadmaps/python.pdf",
    },
    {
      id: 8,
      title: "Java Roadmap",
      tags: ["Backend", "Enterprise"],
      steps: ["Java Basics", "OOP", "Collections", "Spring"],
      url: "https://roadmap.sh/pdfs/roadmaps/java.pdf",
    },
    {
      id: 9,
      title: "C++ Roadmap",
      tags: ["DSA", "Core"],
      steps: ["Basics", "Pointers", "STL", "OOP"],
      url: "https://roadmap.sh/pdfs/roadmaps/cpp.pdf",
    },
    {
      id: 10,
      title: "SQL Roadmap",
      tags: ["Database", "Backend"],
      steps: ["CRUD", "Joins", "Indexes", "Normalization"],
      url: "https://roadmap.sh/pdfs/roadmaps/sql.pdf",
    },
  ];

  const filteredRoadmaps = roadmaps.filter((r) => {
    const searchText = search.toLowerCase();
    return (
      r.title.toLowerCase().includes(searchText) ||
      r.tags.some((tag) => tag.toLowerCase().includes(searchText))
    );
  });

  const displayedRoadmaps = showAll
    ? filteredRoadmaps
    : filteredRoadmaps.slice(0, 6);

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full">
        <Image
          src="/banner.gif"
          alt="banner"
          width={1200}
          height={300}
          className="w-full h-[200px] sm:h-[260px] md:h-[300px] object-cover"
          unoptimized
        />

        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 to-black/20">
          <div className="px-6 sm:px-10 md:px-20 lg:px-32">
            <h2 className="font-game text-3xl sm:text-4xl md:text-6xl">
              Developer Roadmaps
            </h2>
            <p className="font-game text-md sm:text-lg md:text-2xl mt-2 max-w-2xl">
              Step-by-step guides to help you master different domains.
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-center my-10 px-6 sm:px-10 md:px-20 lg:px-32">
        <div className="relative w-full max-w-md">
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search roadmap (e.g. React, Python, frontend...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-yellow-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="px-6 sm:px-10 md:px-20 lg:px-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedRoadmaps.map((roadmaps) => (
            <div
              key={roadmaps.id}
              className="p-6 border-l-4 border-yellow-500 rounded-2xl shadow-md hover:shadow-xl transition bg-black"
            >
              {/* Title + Tags SAME ROW */}
              <div className="flex justify-between items-start gap-4 mb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-yellow-400 text-black rounded-lg">
                    <Map size={22} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-game">
                    {roadmaps.title}
                  </h2>
                </div>

                {/* Tags RIGHT SIDE */}
                <div className="flex gap-2 flex-wrap justify-end">
                  {roadmaps.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs sm:text-sm font-game bg-yellow-400/20 text-yellow-300 rounded-full border border-yellow-400/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <ul className="space-y-2 mb-4">
                {roadmaps.steps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300 font-game text-sm sm:text-base gap-2"
                  >
                    <CheckCircle size={16} className="text-yellow-400" />
                    {step}
                  </li>
                ))}
                <li className="text-gray-400 italic">+ more...</li>
              </ul>

              {/* Button */}
              <Link href={roadmaps.url} target="_blank">
                <Button
                  variant="pixel"
                  className="w-full flex items-center justify-center gap-2 font-game text-lg px-6 py-4"
                >
                  Download <Download size={18} />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Show More */}
      {filteredRoadmaps.length > 6 && (
        <div className="flex justify-center my-10">
          <Button
            variant="pixel"
            onClick={() => setShowAll(!showAll)}
            className="font-game px-6 py-2 text-lg"
          >
            {showAll ? "Show Less" : "Show All Roadmaps"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Roadmaps;