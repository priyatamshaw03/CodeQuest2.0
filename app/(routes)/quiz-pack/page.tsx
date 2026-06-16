"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  FileCode,
  Palette,
  Braces,
  Atom,
  Database,
  Server,
  FileJson,
  Code2,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const QuizPage = () => {
  const [search, setSearch] = useState("");

  const quizzes = [
  {
    id: 1,
    title: "HTML",
    icon: FileCode,
    questions: 25,
    difficulty: "Beginner",
    description: "Test your HTML fundamentals and semantic markup skills.",
    link: "https://www.sanfoundry.com/1000-html-questions-answers",
  },
  {
    id: 2,
    title: "CSS",
    icon: Palette,
    questions: 25,
    difficulty: "Beginner",
    description: "Master styling, layouts, flexbox, grid and responsiveness.",
    link: "https://www.sanfoundry.com/1000-css-questions-answers",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: Braces,
    questions: 30,
    difficulty: "Intermediate",
    description: "Challenge yourself with core JavaScript concepts.",
    link: "https://www.sanfoundry.com/1000-javascript-questions-answers",
  },
  {
    id: 4,
    title: "Python",
    icon: Code2,
    questions: 30,
    difficulty: "Intermediate",
    description: "Practice Python programming and problem-solving skills.",
    link: "https://www.sanfoundry.com/1000-python-questions-answers",
  },
];

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full">
        <Image
          src="/quiz.gif"
          alt="Quiz Banner"
          width={1200}
          height={300}
          className="w-full h-[200px] sm:h-[260px] md:h-[320px] object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 flex items-center">
          <div className="px-6 sm:px-10 md:px-20 lg:px-32">
            <h1 className="font-game text-3xl sm:text-5xl md:text-7xl">
              Quizz Pack
            </h1>

            <p className="font-game mt-3 text-base sm:text-xl md:text-2xl max-w-2xl">
              Test your programming skills and track your learning journey.
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
            placeholder="Search quiz (e.g. React, Python, HTML...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-yellow-300 rounded-lg bg-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>

      {/* Quiz Cards */}
      <div className="px-6 sm:px-10 md:px-20 lg:px-32 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQuizzes.map((quiz) => {
            const Icon = quiz.icon;

            return (
              <div
                key={quiz.id}
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
                  hover:scale-105
                  hover:border-yellow-500
                  hover:shadow-xl
                  hover:shadow-yellow-500/30
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-yellow-400 text-black rounded-lg">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h2 className="font-game text-2xl">
                          {quiz.title}
                        </h2>

                        <p className="text-gray-400 text-sm">
                          {quiz.questions} Questions
                        </p>
                      </div>
                    </div>

                    <span className="px-3 py-1 text-xs sm:text-sm font-game text-yellow-500 bg-yellow-400/10 rounded-full border border-yellow-400/40">
                      {quiz.difficulty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 font-game mb-6">
                    {quiz.description}
                  </p>

                  {/* Button */}
                  <Link href={quiz.link}>
                    <Button
                      variant="pixel"
                      className="w-full flex items-center justify-center gap-2 font-game text-lg cursor-pointer"
                    >
                      Start Quiz
                      <PlayCircle size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredQuizzes.length === 0 && (
          <div className="text-center py-20">
            <h2 className="font-game text-3xl text-gray-400">
              No quizzes found
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;