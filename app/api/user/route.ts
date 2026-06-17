import { db } from "@/config/db";
import {
  usersTable,
  EnrolledCourseTable,
  CompletedExerciseTable,
} from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }

    const email = user.primaryEmailAddress.emailAddress;

    let users = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (users.length === 0) {
      const newUser = {
        name: user.fullName ?? "",
        email,
        points: 0,
      };

      const result = await db
        .insert(usersTable)
        .values(newUser)
        .onConflictDoNothing()
        .returning();

      users = result;
    }

    const dbUser = users[0];

    // Count enrolled courses
    const enrolledCourses = await db
      .select()
      .from(EnrolledCourseTable)
      .where(eq(EnrolledCourseTable.userId, email));

    // Count completed exercises
    const completedExercises = await db
      .select()
      .from(CompletedExerciseTable)
      .where(eq(CompletedExerciseTable.userId, email));

    return NextResponse.json({
      ...dbUser,
      coursesEnrolled: enrolledCourses.length,
      completedExercises: completedExercises.length,
    });
  } catch (error) {
    console.error("User API Error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}