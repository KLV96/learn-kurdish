import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/Quiz";
import HomePage from "./pages/Home";
import RevisePage from "./pages/RevisePage";
import LeaderBoardPage from "./pages/Leaderboard";
import QuizResult from "./pages/QuizResult";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/kurmanji-memory-card", element: <HomePage /> },
      { path: "/", element: <HomePage /> },
      { path: "/quiz", element: <QuizPage /> },
      { path: "/revise", element: <RevisePage /> },
      { path: "/leaderboard", element: <LeaderBoardPage /> },
      { path: "/quizResult", element: <QuizResult /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
