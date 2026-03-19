import {db} from "@/config/db";
import { ExerciseTable , CourseChaptersTable} from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const DATA =
[
  {
    "courseId": 4,
    "exerciseId": "setup-nextjs-app",
    "exerciseName": "Setup Next.js App",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Welcome to your first mission 🚀 in the Next.js journey! In this exercise, you will learn how to set up a Next.js application from scratch. Think of this like preparing your game environment before starting a level. First, you need Node.js installed on your system because it powers your project. Then, you use the command <code>npx create-next-app@latest</code> to generate a ready-to-use Next.js project. This command sets up everything including dependencies, folder structure, and configuration. After installation, navigate into your project folder using <code>cd your-app-name</code>. This is like entering your game world. Next.js comes pre-configured with modern tools like React, routing, and optimization features. You don’t need to manually install many packages. This saves time and effort. Once inside the folder, your environment is ready to run. The setup phase ensures everything is working smoothly before development. Understanding this step is important because it helps you debug issues later. Now you're ready to build something amazing!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Your task is to set up a new Next.js application. Open your terminal and run <code>npx create-next-app@latest my-app</code>. After installation, navigate into the folder using <code>cd my-app</code>. Confirm that the project folder is created successfully and contains files like <code>package.json</code> and <code>app</code> or <code>pages</code>.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Make sure Node.js is installed before running the command. Use <code>node -v</code> to check. If the command fails, try reinstalling Node or using <code>npx</code> properly.</body>",
      "starterCode": {
        "/README.md": "# Next.js Setup\n\nRun the following commands:\n\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n"
      },
      "regex": "create-next-app",
      "output": "Next.js app created successfully",
      "hintXp": 30
    }
  },
  {
    "courseId": 4,
    "exerciseId": "project-structure",
    "exerciseName": "Project Structure Overview",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Now that your Next.js app is ready, it's time to explore its structure 🧭. Think of this like learning the map of a game world. The root folder contains important files like <code>package.json</code>, which manages dependencies. The <code>app</code> or <code>pages</code> folder is where your routes live. Each file represents a page. The <code>public</code> folder stores static assets like images. You will also see configuration files like <code>next.config.js</code>. These help customize your app behavior. The <code>node_modules</code> folder contains installed packages. Avoid editing it manually. Understanding structure helps you navigate quickly and build efficiently. It also prevents confusion when your project grows bigger. Every folder has a purpose, just like different zones in a game. Mastering this will make development much smoother. Take your time exploring!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Open your Next.js project and identify the following folders: <code>app/pages</code>, <code>public</code>, and <code>node_modules</code>. Write down what each folder is used for.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Look inside each folder and observe the files. Focus especially on <code>app</code> or <code>pages</code> as they control routing.</body>",
      "starterCode": {
        "/notes.txt": "app/ or pages/ -> \npublic/ -> \nnode_modules/ -> "
      },
      "regex": "app|pages",
      "output": "Project structure understood",
      "hintXp": 35
    }
  },
  {
    "courseId": 4,
    "exerciseId": "run-dev-server",
    "exerciseName": "Run Development Server",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Great progress! Now it's time to bring your app to life ⚡. Running the development server allows you to see your app in the browser. Use the command <code>npm run dev</code> inside your project folder. This starts a local server, usually at <code>http://localhost:3000</code>. When you open this in your browser, you will see your Next.js app running. This is like pressing the 'Play' button in a game. The development server also supports hot reloading, meaning changes appear instantly. If there are errors, they will show in the terminal or browser. This helps in debugging quickly. Always ensure your server is running while developing. Without it, you cannot preview your work. This step is essential in every development workflow. Now you're officially running your app!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Run the command <code>npm run dev</code> in your project directory and open <code>http://localhost:3000</code> in your browser. Confirm that the app loads successfully.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Make sure you are inside the correct folder before running the command. Use <code>cd my-app</code>.</body>",
      "starterCode": {
        "/terminal.txt": "npm run dev"
      },
      "regex": "localhost:3000",
      "output": "App running on localhost",
      "hintXp": 30
    }
  },
  {
    "courseId": 4,
    "exerciseId": "first-page",
    "exerciseName": "First Page Creation",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Awesome! Now it's time to create your very first page 🎯. In Next.js, pages are created using files inside the <code>app</code> or <code>pages</code> directory. Each file automatically becomes a route. For example, creating a file named <code>page.js</code> inside the <code>app</code> folder will render the homepage. Think of this like unlocking your first level in a game. You don’t need to configure routing manually because Next.js does it for you. Inside the file, you write a React component that returns JSX. JSX looks like HTML but works inside JavaScript. For example, you can return <code>&lt;h1&gt;Hello World&lt;/h1&gt;</code>. This will display on your page. This is your first visible output! You can customize it with more elements later. Understanding this step is important because every feature you build will live inside pages. Keep it simple and focus on learning the basics. You're now building real UI!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Create a file named <code>page.js</code> inside the <code>app</code> folder. Inside it, return a heading that says <code>Hello Next.js</code>. Run your app and confirm it appears in the browser.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Make sure you export a default function and return JSX. Example: <code>export default function Home() { return &lt;h1&gt;Hello Next.js&lt;/h1&gt;; }</code></body>",
      "starterCode": {
        "/app/page.js": "export default function Home() {\n  return (\n    <div>\n      <h1></h1>\n    </div>\n  );\n}"
      },
      "regex": "Hello Next.js",
      "output": "Hello Next.js",
      "hintXp": 40
    }
  },
  {
    "courseId": 4,
    "exerciseId": "hot-reload",
    "exerciseName": "Hot Reload Test",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Now let’s test one of the coolest features of Next.js 🔥 — hot reloading! This means whenever you make changes to your code, the browser updates automatically without refreshing. It feels like magic but it's actually built into the development server. Think of it like real-time feedback in a game. When you edit your page file, the UI updates instantly. This saves a lot of time and makes development faster. For example, if you change text inside your <code>&lt;h1&gt;</code>, the browser reflects it immediately. No need to restart the server. This helps you experiment and learn quickly. Hot reload also preserves your state in many cases. It’s an essential feature for modern development. Make sure your dev server is running while testing this. Try changing multiple things and observe the results. You’ll love how smooth it feels!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Open your <code>page.js</code> file and change the heading text from <code>Hello Next.js</code> to <code>Hot Reload Working</code>. Save the file and observe the browser update automatically.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Make sure your development server is still running using <code>npm run dev</code>. Save the file after editing.</body>",
      "starterCode": {
        "/app/page.js": "export default function Home() {\n  return (\n    <div>\n      <h1>Hello Next.js</h1>\n    </div>\n  );\n}"
      },
      "regex": "Hot Reload Working",
      "output": "Hot Reload Working",
      "hintXp": 35
    }
  },
  {
    "courseId": 4,
    "exerciseId": "fix-setup-errors",
    "exerciseName": "Fix Setup Errors",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Every developer faces errors ⚠️ — and learning to fix them is a superpower! In this step, you’ll understand common setup issues in Next.js. Sometimes the server doesn’t start due to missing dependencies. You might see errors if Node.js version is outdated. Another common issue is running commands in the wrong folder. Syntax errors in your code can also break the app. The terminal and browser will show error messages to help you. Think of these like clues in a puzzle game. Carefully read the error and fix it step by step. For example, if a tag is not closed properly, fix the JSX. If a package is missing, reinstall using <code>npm install</code>. Debugging improves your problem-solving skills. Don’t fear errors — embrace them! The more you fix, the better you become. This is how real developers grow every day.</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Fix the error in the given code where the <code>&lt;h1&gt;</code> tag is not properly closed. Update it so the app runs without errors and displays correct text.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">JSX requires all tags to be properly closed. For example: <code>&lt;h1&gt;Text&lt;/h1&gt;</code></body>",
      "starterCode": {
        "/app/page.js": "export default function Home() {\n  return (\n    <div>\n      <h1>Fix Me\n    </div>\n  );\n}"
      },
      "regex": "<h1>.*</h1>",
      "output": "Fix Me",
      "hintXp": 50
    }
  }
]


export async function GET(req: NextRequest) {
    for (const item of DATA) {
        await db.insert(ExerciseTable).values({
            courseId: item.courseId,
            chapterId: item.chapterId,
            exerciseId: item.exerciseId, 
            exercisesContent: item.exercisesContent,
            exerciseName: item.exerciseName,
            
        });
    }

    return NextResponse.json({ message: "Success" });
}
