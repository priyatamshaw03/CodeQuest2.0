"use client";

import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  FileCode,
  Palette,
  Braces,
  Atom,
  Database,
  Server,
  Code2,
} from "lucide-react";

const Video = () => {
  const [search, setSearch] = useState("");

  const videos = [
    {
      id: 1,
      title: "HTML",
      icon: FileCode,
      description: "Learn HTML from scratch.",
      embedUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
    },
    {
      id: 2,
      title: "CSS",
      icon: Palette,
      description: "Master CSS and responsive design.",
      embedUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
    },
    {
      id: 3,
      title: "JavaScript",
      icon: Braces,
      description: "Complete JavaScript tutorial.",
      embedUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
    },
    {
      id: 4,
      title: "React",
      icon: Atom,
      description: "React JS crash course.",
      embedUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
    },
    {
      id: 5,
      title: "Node.js",
      icon: Server,
      description: "Node.js backend development.",
      embedUrl: "https://www.youtube.com/embed/Oe421EPjeBE",
    },
    {
      id: 6,
      title: "Python",
      icon: Code2,
      description: "Python full course for beginners.",
      embedUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
    },
    {
      id: 7,
      title: "SQL",
      icon: Database,
      description: "SQL tutorial for beginners.",
      embedUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
    },
  ];

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full">
        <Image
          src="/video.gif"
          alt="Video Banner"
          width={1200}
          height={300}
          className="w-full h-[200px] sm:h-[260px] md:h-[320px] object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 flex items-center">
          <div className="px-6 sm:px-10 md:px-20 lg:px-32">
            <h1 className="font-game text-3xl sm:text-5xl md:text-7xl">
              Video Tutorials
            </h1>

            <p className="font-game mt-3 text-base sm:text-xl md:text-2xl max-w-2xl">
              Learn programming with curated video tutorials.
            </p>
          </div>
        </div>
      </div>

      {/* Video Cards */}
      <div className="my-12 px-6 sm:px-10 md:px-20 lg:px-32 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => {
            const Icon = video.icon;

            return (
              <div
                key={video.id}
                className="
                  group
                  relative
                  overflow-hidden
                  p-6
                  border-2
                  border-zinc-700
                  rounded-2xl
                  bg-zinc-900
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:border-yellow-500
                  hover:shadow-xl
                  hover:shadow-yellow-500/30
                "
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-yellow-400 text-black rounded-lg">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h2 className="font-game text-2xl">
                        {video.title}
                      </h2>
                      <p className="text-gray-400 text-sm">
                        Tutorial Video
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-5">
                    {video.description}
                  </p>

                  {/* Embedded Video */}
                  <div className="overflow-hidden rounded-xl border border-zinc-700">
                    <iframe
                      className="w-full aspect-video"
                      src={video.embedUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <h2 className="font-game text-3xl text-gray-400">
              No tutorials found
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;