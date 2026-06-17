"use client";

import React from "react";

import {
  Code2,
  Trophy,
  Route,
  PlayCircle,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Interactive Coding",
    description:
      "Practice coding directly in the browser with instant feedback and real-world exercises.",
  },
  {
    icon: Route,
    title: "Learning Roadmaps",
    description:
      "Follow curated learning paths from beginner to advanced and never feel lost again.",
  },
  {
    icon: PlayCircle,
    title: "Video Courses",
    description:
      "Master concepts with structured video lessons and guided walkthroughs.",
  },
  {
    icon: Trophy,
    title: "Earn XP & Achievements",
    description:
      "Stay motivated with XP points, streaks, milestones, and rewards as you learn.",
  },
  {
    icon: BarChart3,
    title: "Track Your Progress",
    description:
      "Monitor completed lessons, coding challenges, streaks, and skill growth with detailed progress tracking.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Get help from fellow learners, share knowledge, discuss challenges, and grow together as a community.",
  },
];

function Featured() {
  return (
    <section className="w-full py-20 px-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-game mb-4">
            Why Learn With CodeQuest ?
          </h2>

          <p className="text-gray-400 font-game max-w-2xl mx-auto text-xl">
            Learn through interactive coding, structured roadmaps, video courses, community support, and gamified progress tracking—all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group border rounded-3xl bg-zinc-900 p-6 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7 text-yellow-400" />
                </div>

                <h3 className="text-3xl font-game text-yellow-400 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 font-game">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Featured;