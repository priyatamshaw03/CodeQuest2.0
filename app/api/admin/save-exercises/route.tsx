import { db } from "@/config/db";
import { ExerciseTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const DATA = [
  {
    "courseId": 4,
    "exerciseId": "setup-react-app",
    "exerciseName": "Setup React App",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Welcome to your first mission 🚀 in the React journey! In this exercise, you will learn how to set up a React application. Think of this like preparing your development environment before starting a game. React apps are commonly created using tools like Vite. You can run <code>npm create vite@latest</code> to generate a new React project. This command sets up everything automatically including dependencies and configuration. After that, move into your project folder using <code>cd project-name</code>. Then install dependencies using <code>npm install</code>. Finally, start the development server using <code>npm run dev</code>. Once it runs, your app will open in the browser. This is your working playground where you build UI. Understanding setup helps you debug issues later. Now you're ready to begin your React adventure!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Create a React app using Vite. Run <code>npm create vite@latest my-app</code>, then <code>cd my-app</code> and <code>npm install</code>. Confirm your project is created successfully.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Make sure Node.js is installed. Use <code>node -v</code> to check your version.</body>",
      "starterCode": {
        "/README.md": "# React Setup\n\nnpm create vite@latest my-app\ncd my-app\nnpm install\nnpm run dev\n"
      },
      "regex": "vite",
      "output": "React app created successfully",
      "hintXp": 30
    }
  },
  {
    "courseId": 4,
    "exerciseId": "react-structure",
    "exerciseName": "Project Structure Overview",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Now that your React app is ready, let’s explore its structure 🧭. The <code>src</code> folder contains your main code. Inside it, you’ll find <code>App.jsx</code>, which is your main component. The <code>main.jsx</code> file connects React to the DOM. The <code>public</code> folder contains static assets. The <code>node_modules</code> folder contains installed packages. Understanding this structure helps you navigate your project easily. It also makes development faster and more organized. Think of this like learning the map before starting a mission. Each folder has a specific role. Knowing where things are saves time and reduces confusion. Explore your project and get familiar with it!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Identify the purpose of <code>src</code>, <code>public</code>, and <code>node_modules</code> folders in your React project.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Open each folder and observe what files are inside.</body>",
      "starterCode": {
        "/notes.txt": "src -> \npublic -> \nnode_modules -> "
      },
      "regex": "src",
      "output": "React structure understood",
      "hintXp": 35
    }
  },
  {
    "courseId": 4,
    "exerciseId": "run-react-server",
    "exerciseName": "Run Development Server",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Great! Now let’s run your React app ⚡. Use the command <code>npm run dev</code> to start the development server. This launches your app in the browser, usually at localhost. The development server allows you to preview your UI. It also supports hot reload, which updates the browser automatically when you change code. This saves time and improves productivity. Always make sure your server is running while coding. If it stops, restart it. Running the server is like pressing the play button in a game. Without it, you cannot see your progress. Now your app is live and ready!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Run <code>npm run dev</code> and open your app in the browser. Confirm that it loads successfully.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Make sure you are inside your project folder before running the command.</body>",
      "starterCode": {
        "/terminal.txt": "npm run dev"
      },
      "regex": "localhost",
      "output": "React app running",
      "hintXp": 30
    }
  },
  {
    "courseId": 4,
    "exerciseId": "first-component",
    "exerciseName": "First Component",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Now it’s time to build your first component 🧱. Components are reusable UI blocks in React. Each component is a function that returns JSX. JSX looks like HTML but works inside JavaScript. You can create components to break your UI into smaller parts. This makes your code clean and reusable. For example, a header, footer, or button can be separate components. Think of components like building blocks in a game. You can reuse them again and again. This is one of the most powerful features of React. Now let’s create your first one!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Create a component that displays <code>Hello React</code> inside a heading.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Use a function and return JSX like <code>&lt;h1&gt;Hello React&lt;/h1&gt;</code></body>",
      "starterCode": {
        "/App.jsx": "function App() {\n  return (\n    <div>\n      {/* Add your component here */}\n    </div>\n  );\n}\n\nexport default App;"
      },
      "regex": "Hello React",
      "output": "Hello React",
      "hintXp": 40
    }
  },
  {
    "courseId": 4,
    "exerciseId": "jsx-basics",
    "exerciseName": "JSX Basics",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">JSX is a core concept in React 🧠. It allows you to write HTML-like code inside JavaScript. JSX must return a single parent element. You can use expressions inside curly braces. This makes your UI dynamic. JSX is easy to read and write. It combines logic and UI together. This is different from traditional HTML. JSX is compiled into JavaScript behind the scenes. Think of it like a special language for building UI. Mastering JSX is important for React development. Now try writing your own JSX!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Display a heading with text <code>JSX is powerful</code> using JSX.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">Use <code>&lt;h1&gt;</code> tag inside return.</body>",
      "starterCode": {
        "/App.jsx": "function App() {\n  return (\n    <div>\n      {/* Write JSX here */}\n    </div>\n  );\n}\n\nexport default App;"
      },
      "regex": "JSX is powerful",
      "output": "JSX is powerful",
      "hintXp": 35
    }
  },
  {
    "courseId": 4,
    "exerciseId": "fix-react-errors",
    "exerciseName": "Fix Setup Errors",
    "chapterId": 1,
    "exercisesContent": {
      "content": "<body style=\"font-family:sans-serif;line-height:1.6;\">Errors are part of development ⚠️. In React, common errors include missing tags, syntax mistakes, or incorrect structure. JSX requires proper closing tags. If something is wrong, the browser or terminal will show an error. These messages help you fix problems. Think of debugging like solving a puzzle. Read the error carefully and fix step by step. For example, if a tag is not closed, fix it properly. Debugging improves your skills and confidence. Don’t fear errors — learn from them!</body>",
      "task": "<body style=\"font-family:sans-serif;line-height:1.6;\">Fix the JSX error where the heading tag is not closed properly.</body>",
      "hint": "<body style=\"font-family:sans-serif;line-height:1.6;\">JSX requires proper closing tags like <code>&lt;h1&gt;Text&lt;/h1&gt;</code></body>",
      "starterCode": {
        "/App.jsx": "function App() {\n  return (\n    <div>\n      <h1>Fix Me\n    </div>\n  );\n}\n\nexport default App;"
      },
      "regex": "<h1>.*</h1>",
      "output": "Fix Me",
      "hintXp": 50
    }
  }
];

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