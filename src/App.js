import { Routes, Route } from "react-router-dom";

import News from "./pages/news";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
