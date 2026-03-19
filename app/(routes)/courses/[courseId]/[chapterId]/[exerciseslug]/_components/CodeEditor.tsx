"use client";

import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useSandpack,
} from "@codesandbox/sandpack-react";
import Split from "react-split";
import { CourseExercise } from "../page";
import { Button } from "@/components/ui/button";
import { nightOwl } from "@codesandbox/sandpack-themes";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

type Props = {
  courseExerciseData: CourseExercise | undefined;
  loading: boolean;
};

const CodeEditorChildren = ({ onCompleteExercise, IsCompleted }: any) => {
  const { sandpack } = useSandpack();

  return (
    <div className="font-game absolute bottom-40 flex gap-5 right-5">
      <Button
        variant={"pixel"}
        size={"lg"}
        className="text-xl cursor-pointer"
        onClick={() => sandpack.runSandpack()}
      >
        Run Code
      </Button>
      <Button
        variant={"pixel"}
        className="bg-[#a3e534] text-xl cursor-pointer"
        size={"lg"}
        onClick={() => onCompleteExercise()}
        disabled={IsCompleted}
      >
        {IsCompleted ? "Already Completed !" : "Mark as Completed"}
      </Button>
    </div>
  );
};

function CodeEditor({ courseExerciseData, loading }: Props) {
  const { exerciseslug } = useParams();
    const router = useRouter();

  // const exerciseIndex = courseExerciseData?.exercises?.findIndex(
  //   item => item.slug == exerciseslug
  // );
  const currentExercise = courseExerciseData?.exercises?.find(
  item => item.slug == exerciseslug
);
  // const IsCompleted = courseExerciseData?.completedExercises?.find(
  //   item => item?.exerciseId == Number(exerciseIndex) + 1
  // );
  const IsCompleted = courseExerciseData?.completedExercises?.find(
  item => item?.exerciseId == currentExercise?.id
);

  const onCompleteExercise = async () => {
    if (!currentExercise) return;

    await axios.post("/api/exercise/complete", {
      courseId: courseExerciseData?.courseId,
      chapterId: courseExerciseData?.chapterId,
      exerciseId: String(currentExercise.id),
      // xpEarned: courseExerciseData?.exercises[exerciseIndex].xp,
      xpEarned: currentExercise.xp,
    });

    toast.success("Exercise Completed");
    router.refresh();
  };

  return (
    <div className="h-full">
      <SandpackProvider
        //@ts-ignore
        template={courseExerciseData?.editorType ?? "static"}
        theme={nightOwl}
        style={{ height: "100vh" }}
        files={
          courseExerciseData?.exerciseData.exercisesContent.starterCode ?? {}
        }
        options={{
          autorun: false,
          autoReload: false,
        }}
      >
        <SandpackLayout style={{ height: "100%" }}>
          <Split
            className="flex h-full w-full flex-col md:flex-row"
            sizes={[50, 50]}
            minSize={200}
            gutterSize={8}
          >
            {/* LEFT - Editor */}
            <div className="relative h-full">
              <SandpackCodeEditor showTabs style={{ height: "100%" }} />
              <CodeEditorChildren
                onCompleteExercise={onCompleteExercise}
                IsCompleted={IsCompleted}
              />
            </div>

            {/* RIGHT - Preview */}
            <div className="h-full">
              <SandpackPreview
                showNavigator
                showOpenInCodeSandbox={false}
                showOpenNewtab
                style={{ height: "100%" }}
              />
            </div>
          </Split>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default CodeEditor;
