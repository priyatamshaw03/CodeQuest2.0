"use client";

import React from "react";
import type { Course } from "../../_components/CourseList";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

type Props = {
  loading: boolean;
  courseDetail?: Course;
  isEnrolled: boolean;
};

function CourseChapters({ loading, courseDetail }: Props) {
  const { has } = useAuth();
  const hasPremiumAccess = has && has({ plan: "premium" });

  // ✅ CHECK COMPLETED
  const isExerciseCompleted = (chapterId: number, exerciseId: number) => {
    return !!courseDetail?.completedExercises?.find(
      (item) =>
        item.chapterId === chapterId &&
        item.exerciseId === exerciseId
    );
  };

  // ✅ UNLOCK LOGIC (CORRECT ORDER)
  const isExerciseUnlocked = (chapterId: number, exerciseIndex: number) => {
    const completed = courseDetail?.completedExercises || [];

    // 👉 First exercise unlocked by default
    if (completed.length === 0) {
      return (
        chapterId === courseDetail?.chapters?.[0]?.chapterId &&
        exerciseIndex === 0
      );
    }

    // 👉 Flatten all exercises
    const allExercises: { chapterId: number; exerciseIndex: number }[] = [];

    courseDetail?.chapters?.forEach((ch) => {
      ch.exercises.forEach((_, idx) => {
        allExercises.push({
          chapterId: ch.chapterId,
          exerciseIndex: idx,
        });
      });
    });

    // 👉 Last completed
    const last = completed[completed.length - 1];

    const lastIndex = allExercises.findIndex(
      (item) =>
        item.chapterId === last.chapterId &&
        item.exerciseIndex === last.exerciseId - 1
    );

    const currentIndex = allExercises.findIndex(
      (item) =>
        item.chapterId === chapterId &&
        item.exerciseIndex === exerciseIndex
    );

    // ✅ Unlock only next
    return currentIndex === lastIndex + 1;
  };

  return (
    <section>
      {loading ? (
        <div className="p-4 sm:p-5 border-4 rounded-2xl mt-4 space-y-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-6">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-8 w-64" />
              </div>

              <div className="space-y-4 pl-16">
                {[1, 2, 3].map((_, j) => (
                  <div key={j} className="flex items-center justify-between">
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-5 w-48" />
                    </div>
                    <Skeleton className="h-10 w-24 rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Accordion
          type="single"
          collapsible
          className="p-5 border-4 rounded-2xl"
        >
          {courseDetail?.chapters?.map((chapter, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="mt-3">
              <AccordionTrigger className="p-3 hover:bg-zinc-800 font-game text-4xl">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-10">
                    <h2 className="h-12 w-12 bg-zinc-800 rounded-full flex items-center justify-center">
                      {index + 1}
                    </h2>
                    <h2 className="truncate">{chapter?.name}</h2>
                  </div>

                  {!hasPremiumAccess && index >= 2 && (
                    <h2 className="font-game text-xl rounded-full px-4 py-1 bg-yellow-400 text-black">
                      Premium
                    </h2>
                  )}
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="p-7 bg-zinc-900 rounded-xl">
                  {chapter?.exercises.map((exc, indexExc) => {
                    const completed = isExerciseCompleted(
                      chapter.chapterId,
                      indexExc + 1
                    );

                    const unlocked = isExerciseUnlocked(
                      chapter.chapterId,
                      indexExc
                    );

                    const canAccess =
                      courseDetail?.userEnrolled &&
                      unlocked &&
                      (hasPremiumAccess || index < 2);

                    return (
                      <div
                        key={indexExc}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-10 mb-5 font-game">
                          <h2 className="text-3xl">
                            Exercise{" "}
                            {index * chapter.exercises.length +
                              indexExc +
                              1}
                          </h2>
                          <h2 className="text-3xl">{exc?.name}</h2>
                        </div>

                        {/* ✅ COMPLETED */}
                        {completed ? (
                          <Button
                            variant="pixel"
                            className="bg-green-600 text-black opacity-60 cursor-not-allowed"
                            disabled
                          >
                            Completed
                          </Button>
                        ) : canAccess ? (
                          /* ✅ UNLOCKED */
                          <Link
                            href={`/courses/${courseDetail?.id}/${chapter.chapterId}/${exc.slug}`}
                          >
                            <Button variant="pixel">
                              {exc?.xp} XP
                            </Button>
                          </Link>
                        ) : (
                          /* ❌ LOCKED */
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="cursor-not-allowed">
                                <Button variant="pixelDisabled">
                                  Locked
                                </Button>
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="font-game text-sm sm:text-lg">
                                {!courseDetail?.userEnrolled
                                  ? "Enroll to unlock Exercises"
                                  : !hasPremiumAccess && index >= 2
                                  ? "Upgrade to Premium"
                                  : "Complete previous exercise"}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </section>
  );
}

export default CourseChapters;