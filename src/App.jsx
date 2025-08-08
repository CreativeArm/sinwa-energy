import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import TrainingPage from "./Pages/Trainingpage";
import Training from "./Pages/Training";
import TrainingOverviewPage from "./Pages/TrainingOverviewPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/training" element={<Training />} />
        <Route path="/trainings" element={<TrainingPage />} />
        <Route path="/trainings/:id" element={<TrainingOverviewPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
