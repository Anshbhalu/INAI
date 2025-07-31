import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/HomePage/Home";
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import WebScrapping from './pages/Web-scraping';
import Data_manipulation from './pages/Data_manipulation';
import Model_training from './pages/Model_training';
import INAIWorldsBestAICompany1 from './pages/INAIWorldsBestAICompany1';
import INAIWorldsBestAICompany2 from './pages/INAIWorldsBestAICompany2';
import INAIWorldsBestAICompany3 from './pages/INAIWorldsBestAICompany3';
import What_is_AI from './pages/What_is_AI';
import What_is_ML from './pages/What_is_ML';
import What_is_web_scraping from './pages/What_is_web_scraping';
import Real_life_AI_ML_use from './pages/Real_life_AI_ML_use';
import Blog5 from './pages/Blog5';
import Inai_life from './pages/portfolio/Inai_life';
import Influwket from './pages/portfolio/Influwket';
import Veedket from './pages/portfolio/Veedket';
import Offiket from './pages/portfolio/Offiket';
import './App.css';
import Terms_and_conditions from './pages/Policy/Terms_and_conditions';
import Privacy_policy from './pages/Policy/Privacy_policy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-scraping" element={<WebScrapping />} />
            <Route path="/services/data-manipulation" element={<Data_manipulation />} />
            <Route path="/services/model-training" element={<Model_training />} />
            <Route path="/inai_life" element={<Inai_life />} />
            <Route path="/influwket" element={<Influwket />} />
            <Route path="/veedket" element={<Veedket />} />
            <Route path="/offiket" element={<Offiket />} />
            <Route path="/blog/what-is-artificial-intelligence" element={<What_is_AI />} />
            <Route path="/blog/what-is-machine-learning" element={<What_is_ML />} />
            <Route path="/blog/what-is-web-scraping" element={<What_is_web_scraping />} />
            <Route path="/blog/ai-ml-real-life" element={<Real_life_AI_ML_use />} />
            <Route path="/blog/how-ai-ml-internship-change-career" element={<Blog5 />} />
            <Route path="/Terms_and_conditions" element={<Terms_and_conditions />} />
            <Route path="/Privacy_policy" element={<Privacy_policy />} />
            {/* New, cleaner region-specific paths */}
            <Route path="/best-ai-company-in-india" element={<INAIWorldsBestAICompany1 />} />
            <Route path="/best-ai-company-in-gujarat" element={<INAIWorldsBestAICompany2 />} />
            <Route path="/best-ai-company-in-surat" element={<INAIWorldsBestAICompany3 />} />
          </Routes>
        </main>
        <Footer />
      <ScrollToTopButton />
    </div>
  </Router>
  );
}

export default App;
