"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[40px] border bg-gradient-to-r from-zinc-900 to-zinc-800 p-12 text-center">
          <h2 className="text-5xl font-game mb-5">
            Start Your Coding Journey Today
          </h2>

          <p className="text-gray-300 text-lg font-game max-w-2xl mx-auto mb-8">
            Learn through roadmaps, coding exercises, video courses,
            community projects, and gamified progress tracking.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button
                variant="pixel"
                size="lg"
                className="font-game text-lg cursor-pointer"
              >
                Explore Courses
              </Button>
            </Link>

            <Link href="/sign-in">
              <Button
                variant="outline"
                size="lg"
                className="font-game text-lg cursor-pointer"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div>
              <h3 className="text-3xl font-game">100+</h3>
              <p className="text-gray-400 font-game">Exercises</p>
            </div>

            <div>
              <h3 className="text-3xl font-game">10+</h3>
              <p className="text-gray-400 font-game">Courses</p>
            </div>

            <div>
              <h3 className="text-3xl font-game">100%</h3>
              <p className="text-gray-400 font-game">Practical Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;