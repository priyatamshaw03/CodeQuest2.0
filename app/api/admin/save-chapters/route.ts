import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import { CourseChaptersTable } from '@/config/schema';

export async function GET(req: NextRequest) {
 const DATA =
[
  {
    "id": 1,
    "name": "Introduction to Next.js",
    "desc": "Learn what Next.js is, its features, and why it is used for modern web development.",
    "exercises": [
      {"name": "Setup Next.js App", "slug": "setup-nextjs-app", "xp": 20, "difficulty": "easy"},
      {"name": "Project Structure Overview", "slug": "project-structure", "xp": 20, "difficulty": "easy"},
      {"name": "Run Development Server", "slug": "run-dev-server", "xp": 15, "difficulty": "easy"},
      {"name": "First Page Creation", "slug": "first-page", "xp": 20, "difficulty": "easy"},
      {"name": "Hot Reload Test", "slug": "hot-reload", "xp": 15, "difficulty": "easy"},
      {"name": "Fix Setup Errors", "slug": "fix-setup-errors", "xp": 25, "difficulty": "easy"}
    ]
  },
  {
    "id": 2,
    "name": "Routing",
    "desc": "Understand file-based routing and navigation in Next.js.",
    "exercises": [
      {"name": "Create Routes", "slug": "create-routes", "xp": 20, "difficulty": "easy"},
      {"name": "Dynamic Route Setup", "slug": "dynamic-route", "xp": 25, "difficulty": "medium"},
      {"name": "Nested Routes", "slug": "nested-routes", "xp": 25, "difficulty": "medium"},
      {"name": "Link Navigation", "slug": "link-navigation", "xp": 20, "difficulty": "easy"},
      {"name": "Route Params Usage", "slug": "route-params", "xp": 25, "difficulty": "medium"},
      {"name": "Routing Debugger", "slug": "routing-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 3,
    "name": "Components",
    "desc": "Learn how to create reusable components in Next.js.",
    "exercises": [
      {"name": "Create Component", "slug": "create-component", "xp": 20, "difficulty": "easy"},
      {"name": "Props Passing", "slug": "props-passing", "xp": 25, "difficulty": "easy"},
      {"name": "Component Reuse", "slug": "component-reuse", "xp": 25, "difficulty": "easy"},
      {"name": "Nested Components", "slug": "nested-components", "xp": 25, "difficulty": "easy"},
      {"name": "Component Styling", "slug": "component-styling", "xp": 25, "difficulty": "medium"},
      {"name": "Component Debugger", "slug": "component-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 4,
    "name": "Server vs Client Components",
    "desc": "Understand the difference between server and client components in Next.js.",
    "exercises": [
      {"name": "Server Component Example", "slug": "server-component", "xp": 20, "difficulty": "easy"},
      {"name": "Client Component Setup", "slug": "client-component", "xp": 20, "difficulty": "easy"},
      {"name": "Use Client Directive", "slug": "use-client", "xp": 20, "difficulty": "easy"},
      {"name": "Mix Components", "slug": "mix-components", "xp": 25, "difficulty": "medium"},
      {"name": "State in Client Component", "slug": "state-client", "xp": 25, "difficulty": "medium"},
      {"name": "Component Type Fix", "slug": "component-type-fix", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 5,
    "name": "Data Fetching",
    "desc": "Fetch and manage data using server-side and client-side methods.",
    "exercises": [
      {"name": "Fetch API Data", "slug": "fetch-api-data", "xp": 25, "difficulty": "easy"},
      {"name": "Server Side Fetch", "slug": "server-fetch", "xp": 25, "difficulty": "medium"},
      {"name": "Client Side Fetch", "slug": "client-fetch", "xp": 25, "difficulty": "easy"},
      {"name": "Loading State", "slug": "loading-state", "xp": 20, "difficulty": "easy"},
      {"name": "Error Handling", "slug": "error-handling", "xp": 25, "difficulty": "medium"},
      {"name": "Data Fetch Debugger", "slug": "data-fetch-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 6,
    "name": "API Routes",
    "desc": "Build backend APIs inside Next.js using route handlers.",
    "exercises": [
      {"name": "Create API Route", "slug": "create-api-route", "xp": 20, "difficulty": "easy"},
      {"name": "GET Request Handler", "slug": "get-handler", "xp": 20, "difficulty": "easy"},
      {"name": "POST Request Handler", "slug": "post-handler", "xp": 25, "difficulty": "medium"},
      {"name": "Send JSON Response", "slug": "json-response", "xp": 20, "difficulty": "easy"},
      {"name": "API Error Handling", "slug": "api-error", "xp": 25, "difficulty": "medium"},
      {"name": "API Debugger", "slug": "api-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 7,
    "name": "Styling",
    "desc": "Style your Next.js apps using CSS, Tailwind, and modules.",
    "exercises": [
      {"name": "Global CSS Setup", "slug": "global-css", "xp": 20, "difficulty": "easy"},
      {"name": "CSS Modules", "slug": "css-modules", "xp": 25, "difficulty": "easy"},
      {"name": "Tailwind Setup", "slug": "tailwind-setup", "xp": 25, "difficulty": "easy"},
      {"name": "Responsive Design", "slug": "responsive-design", "xp": 25, "difficulty": "medium"},
      {"name": "Component Styling", "slug": "component-style", "xp": 25, "difficulty": "easy"},
      {"name": "Styling Debugger", "slug": "styling-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 8,
    "name": "Image & Optimization",
    "desc": "Optimize performance using built-in Next.js features.",
    "exercises": [
      {"name": "Next Image Usage", "slug": "next-image", "xp": 20, "difficulty": "easy"},
      {"name": "Image Optimization", "slug": "image-optimization", "xp": 25, "difficulty": "easy"},
      {"name": "Lazy Loading", "slug": "lazy-loading", "xp": 25, "difficulty": "medium"},
      {"name": "Font Optimization", "slug": "font-optimization", "xp": 20, "difficulty": "easy"},
      {"name": "Performance Fix", "slug": "performance-fix", "xp": 30, "difficulty": "medium"},
      {"name": "Optimization Debugger", "slug": "optimization-debugger", "xp": 30, "difficulty": "medium"}
    ]
  },
  {
    "id": 9,
    "name": "Authentication",
    "desc": "Implement authentication in Next.js applications.",
    "exercises": [
      {"name": "Auth Setup", "slug": "auth-setup", "xp": 25, "difficulty": "easy"},
      {"name": "Login Page", "slug": "login-page", "xp": 25, "difficulty": "easy"},
      {"name": "Protected Route", "slug": "protected-route", "xp": 30, "difficulty": "medium"},
      {"name": "Session Handling", "slug": "session-handling", "xp": 30, "difficulty": "medium"},
      {"name": "Logout Feature", "slug": "logout-feature", "xp": 20, "difficulty": "easy"},
      {"name": "Auth Debugger", "slug": "auth-debugger", "xp": 35, "difficulty": "medium"}
    ]
  },
  {
    "id": 10,
    "name": "Deployment",
    "desc": "Deploy your Next.js application to production.",
    "exercises": [
      {"name": "Build Project", "slug": "build-project", "xp": 20, "difficulty": "easy"},
      {"name": "Environment Variables", "slug": "env-variables", "xp": 25, "difficulty": "medium"},
      {"name": "Deploy to Vercel", "slug": "deploy-vercel", "xp": 25, "difficulty": "easy"},
      {"name": "Fix Deployment Errors", "slug": "fix-deploy-errors", "xp": 30, "difficulty": "medium"},
      {"name": "Production Debugging", "slug": "prod-debugging", "xp": 30, "difficulty": "medium"},
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
