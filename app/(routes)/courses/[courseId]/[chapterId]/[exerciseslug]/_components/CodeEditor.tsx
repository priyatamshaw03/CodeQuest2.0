"use client";

import React, { useEffect, useState } from "react";
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

const CodeEditorChildren = ({
  onCompleteExercise,
  localCompleted,
  regexPattern,
}: any) => {
  const { sandpack } = useSandpack();
  const [isCorrect, setIsCorrect] = useState(false);

  const validateSolution = () => {
    try {
      sandpack.runSandpack();

      const htmlCode = sandpack.files["/index.html"]?.code || "";

      if (!regexPattern) {
        toast.error("Validation rule missing");
        return;
      }

      const regex = new RegExp(regexPattern, "i");

      if (regex.test(htmlCode)) {
        setIsCorrect(true);
        toast.success("Correct Solution!");
      } else {
        setIsCorrect(false);
        toast.error("Solution not correct!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Validation failed");
    }
  };

  return (
    <div className="font-game absolute bottom-40 flex gap-5 right-5">
      <Button
        variant={"pixel"}
        size={"lg"}
        className="text-xl cursor-pointer"
        onClick={validateSolution}
      >
        Run Code
      </Button>

      <Button
        variant={"pixel"}
        className={`bg-[#a3e534] text-xl ${
          !isCorrect || localCompleted
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        size={"lg"}
        onClick={onCompleteExercise}
        disabled={!isCorrect || localCompleted}
      >
        {localCompleted
          ? "Completed !"
          : "Mark as Completed"
          }
      </Button>
    </div>
  );
};

function CodeEditor({ courseExerciseData }: Props) {
  const { exerciseslug } = useParams();
  // const router = useRouter();

  const exerciseIndex = courseExerciseData?.exercises?.findIndex(
    (item) => item.slug == exerciseslug
  );

  // ✅ FIX: Proper boolean
  const IsCompleted = !!courseExerciseData?.completedExercises?.find(
    (item) => item?.exerciseId === exerciseIndex! + 1
  );

  // ✅ NEW: local state
  const [localCompleted, setLocalCompleted] = useState(IsCompleted);

  // ✅ sync with backend updates
  useEffect(() => {
    setLocalCompleted(IsCompleted);
  }, [IsCompleted]);

  const onCompleteExercise = async () => {
    if (
      exerciseIndex === -1 ||
      exerciseIndex === undefined ||
      localCompleted
    )
      return;

    // ✅ instant UI update
    setLocalCompleted(true);

    await axios.post("/api/exercise/complete", {
      courseId: courseExerciseData?.courseId,
      chapterId: courseExerciseData?.chapterId,
      exerciseId: exerciseIndex + 1,
      xpEarned: courseExerciseData?.exercises[exerciseIndex].xp,
    });

    toast.success("Exercise Completed!");
    // router.refresh();
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
            {/* LEFT */}
            <div className="relative h-full">
              <SandpackCodeEditor showTabs style={{ height: "100%" }} />

              <CodeEditorChildren
                onCompleteExercise={onCompleteExercise}
                localCompleted={localCompleted}
                regexPattern={courseExerciseData?.exerciseData?.exercisesContent?.regex}
              />
            </div>

            {/* RIGHT */}
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