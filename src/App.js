import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import WhyChooseUs from './pages/WhyChooseUs'
import PracticeArea from './pages/PracticeArea'
import Counselling from './pages/Counselling'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import "./App.css"
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="whyChooseUs" element={<WhyChooseUs />} />
          <Route path="practiceArea" element={<PracticeArea />} />
          <Route path="counselling" element={<Counselling />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
