import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import { CourseChaptersTable } from '@/config/schema';

export async function GET(req: NextRequest) {
 const DATA =
[
  {
    "id": 1,
    "name": "Introduction to React",
    "desc": "Learn what React is, its core concepts, and why it is used for building user interfaces.",
    "exercises": [
      {"name": "Setup React App", "slug": "setup-react-app", "xp": 20, "difficulty": "easy"},
      {"name": "Project Structure Overview", "slug": "react-structure", "xp": 20, "difficulty": "easy"},
      {"name": "Run Development Server", "slug": "run-react-server", "xp": 15, "difficulty": "easy"},
      {"name": "First Component", "slug": "first-component", "xp": 20, "difficulty": "easy"},
      {"name": "JSX Basics", "slug": "jsx-basics", "xp": 20, "difficulty": "easy"},
      {"name": "Fix Setup Errors", "slug": "fix-react-errors", "xp": 25, "difficulty": "easy"}
    ]
  },
  {
    "id": 2,
    "name": "JSX & Rendering",
    "desc": "Understand JSX syntax and how rendering works in React.",
    "exercises": [
      {"name": "JSX Syntax Practice", "slug": "jsx-syntax", "xp": 20, "difficulty": "easy"},
      {"name": "Embedding Expressions", "slug": "jsx-expressions", "xp": 20, "difficulty": "easy"},
      {"name": "Conditional Rendering", "slug": "conditional-rendering", "xp": 25, "difficulty": "medium"},
      {"name": "Lists & Keys", "slug": "lists-keys", "xp": 25, "difficulty": "medium"},
      {"name": "Fragments Usage", "slug": "fragments", "xp": 20, "difficulty": "easy"},
      {"name": "Rendering Debugger", "slug": "render-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 3,
    "name": "Components",
    "desc": "Learn how to create and reuse components in React.",
    "exercises": [
      {"name": "Create Functional Component", "slug": "functional-component", "xp": 20, "difficulty": "easy"},
      {"name": "Props Passing", "slug": "props-passing", "xp": 25, "difficulty": "easy"},
      {"name": "Component Reuse", "slug": "component-reuse", "xp": 25, "difficulty": "easy"},
      {"name": "Nested Components", "slug": "nested-components", "xp": 25, "difficulty": "easy"},
      {"name": "Default Props", "slug": "default-props", "xp": 20, "difficulty": "easy"},
      {"name": "Component Debugger", "slug": "component-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 4,
    "name": "State & Events",
    "desc": "Manage component state and handle user events.",
    "exercises": [
      {"name": "useState Hook", "slug": "use-state", "xp": 20, "difficulty": "easy"},
      {"name": "Event Handling", "slug": "event-handling", "xp": 20, "difficulty": "easy"},
      {"name": "Form Handling", "slug": "form-handling", "xp": 25, "difficulty": "medium"},
      {"name": "Two-way Binding", "slug": "two-way-binding", "xp": 25, "difficulty": "medium"},
      {"name": "State Update Patterns", "slug": "state-update", "xp": 25, "difficulty": "medium"},
      {"name": "State Debugger", "slug": "state-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 5,
    "name": "Hooks",
    "desc": "Learn built-in hooks and how to manage lifecycle logic.",
    "exercises": [
      {"name": "useEffect Basics", "slug": "use-effect", "xp": 25, "difficulty": "medium"},
      {"name": "Dependency Array", "slug": "dependency-array", "xp": 25, "difficulty": "medium"},
      {"name": "Cleanup Functions", "slug": "cleanup-functions", "xp": 25, "difficulty": "medium"},
      {"name": "useRef Hook", "slug": "use-ref", "xp": 20, "difficulty": "easy"},
      {"name": "Custom Hooks", "slug": "custom-hooks", "xp": 30, "difficulty": "medium"},
      {"name": "Hooks Debugger", "slug": "hooks-debugger", "xp": 35, "difficulty": "medium"}
    ]
  },
  {
    "id": 6,
    "name": "Routing",
    "desc": "Implement routing in React using React Router.",
    "exercises": [
      {"name": "Install React Router", "slug": "install-router", "xp": 20, "difficulty": "easy"},
      {"name": "Basic Routes", "slug": "basic-routes", "xp": 20, "difficulty": "easy"},
      {"name": "Dynamic Routes", "slug": "dynamic-routes", "xp": 25, "difficulty": "medium"},
      {"name": "Nested Routes", "slug": "nested-routes", "xp": 25, "difficulty": "medium"},
      {"name": "Navigation Links", "slug": "nav-links", "xp": 20, "difficulty": "easy"},
      {"name": "Routing Debugger", "slug": "routing-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 7,
    "name": "Styling",
    "desc": "Style React applications using different approaches.",
    "exercises": [
      {"name": "CSS Basics", "slug": "css-basics", "xp": 20, "difficulty": "easy"},
      {"name": "Inline Styling", "slug": "inline-styling", "xp": 20, "difficulty": "easy"},
      {"name": "CSS Modules", "slug": "css-modules", "xp": 25, "difficulty": "easy"},
      {"name": "Tailwind Setup", "slug": "tailwind-react", "xp": 25, "difficulty": "easy"},
      {"name": "Styled Components", "slug": "styled-components", "xp": 25, "difficulty": "medium"},
      {"name": "Styling Debugger", "slug": "styling-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 8,
    "name": "API & Data Fetching",
    "desc": "Fetch and manage data in React applications.",
    "exercises": [
      {"name": "Fetch API Data", "slug": "fetch-data", "xp": 25, "difficulty": "easy"},
      {"name": "Axios Setup", "slug": "axios-setup", "xp": 25, "difficulty": "easy"},
      {"name": "Loading State", "slug": "loading-state", "xp": 20, "difficulty": "easy"},
      {"name": "Error Handling", "slug": "error-handling", "xp": 25, "difficulty": "medium"},
      {"name": "useEffect Data Fetch", "slug": "useeffect-fetch", "xp": 25, "difficulty": "medium"},
      {"name": "Data Debugger", "slug": "data-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 9,
    "name": "State Management",
    "desc": "Manage global state in React apps.",
    "exercises": [
      {"name": "Context API", "slug": "context-api", "xp": 25, "difficulty": "medium"},
      {"name": "useContext Hook", "slug": "use-context", "xp": 25, "difficulty": "medium"},
      {"name": "Prop Drilling Fix", "slug": "prop-drilling", "xp": 25, "difficulty": "medium"},
      {"name": "Redux Basics", "slug": "redux-basics", "xp": 30, "difficulty": "medium"},
      {"name": "Redux Toolkit", "slug": "redux-toolkit", "xp": 30, "difficulty": "medium"},
      {"name": "State Debugger", "slug": "global-state-debugger", "xp": 35, "difficulty": "medium"}
    ]
  },
  {
    "id": 10,
    "name": "Deployment",
    "desc": "Build and deploy React applications.",
    "exercises": [
      {"name": "Build Project", "slug": "build-react", "xp": 20, "difficulty": "easy"},
      {"name": "Environment Variables", "slug": "env-react", "xp": 25, "difficulty": "medium"},
      {"name": "Deploy to Netlify", "slug": "deploy-netlify", "xp": 25, "difficulty": "easy"},
      {"name": "Deploy to Vercel", "slug": "deploy-vercel", "xp": 25, "difficulty": "easy"},
      {"name": "Fix Deployment Errors", "slug": "fix-deploy", "xp": 30, "difficulty": "medium"},
      {"name": "Deployment Challenge", "slug": "deployment-challenge", "xp": 40, "difficulty": "medium"}
    ]
  }
]


const promises = DATA.map(item =>
  db.insert(CourseChaptersTable).values({
    courseId: 4,
    desc: item?.desc,
    exercises: JSON.stringify(item.exercises),
    name: item.name,
    chapterId: item.id,
  })
);
try {
  await Promise.all(promises);
  return NextResponse.json("Success");
} catch (err) {
  console.error(err);
  return NextResponse.json({ error: String(err) }, { status: 500 });
}}
