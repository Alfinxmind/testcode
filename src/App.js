import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./pages/index";
import QuizPage from './pages/quiz';
function App() {
  return (
    <Router>
        <Routes>
          <Route element={<Index />} path="/" exact></Route>
          <Route element={<QuizPage />} path="/quiz" exact></Route>
        </Routes>
    </Router>
  );
}

export default App;
