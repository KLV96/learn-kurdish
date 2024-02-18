import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/Quiz";
import StudyOptions from "./pages/studyOptions";
import RevisePage from "./pages/RevisePage";
import LeaderBoardPage from "./pages/Leaderboard";
import QuizResult from "./pages/QuizResult";
import DialectSelectionPage from "./pages/DialectSelectionPage";

const router = createBrowserRouter([
  {
    path: "/learn-kurdish",
    children: [
      { index: true, element: <DialectSelectionPage /> },
      {
        path: "kurmanji",
        children: [
          { index: true, element: <StudyOptions /> },
          { path: "revise", element: <RevisePage /> },
          { path: "quiz", element: <QuizPage /> },
          { path: "leaderboard", element: <LeaderBoardPage /> },
          { path: "quiz/quizResult", element: <QuizResult /> },
        ],
      },
      {
        path: "sorani",
        children: [
          { index: true, element: <StudyOptions /> },
          { path: "quiz", element: <QuizPage /> },
          { path: "revise", element: <RevisePage /> },
          { path: "leaderboard", element: <LeaderBoardPage /> },
          { path: "quiz/quizResult", element: <QuizResult /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
