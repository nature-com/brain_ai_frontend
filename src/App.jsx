import "./App.css";
import { Routes, Route } from "react-router-dom";
import OutsideLayout from "./ui/layout/outside-layout";
import Home from "./pages/Home/home.content";
import Registration from "./pages/Registration/registration.index";
import About from "./pages/About/about";
import Product from "./pages/Product/product";
import Faqarea from "./pages/Faq/faq";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/Contact/contact";
import Dashboard from "./pages/Dashboard/dashboard";
import Tooldetails from "./pages/ToolDetails/tooldetails";
// import ParagraphGenerator from "./pages/ToolDetails/ParagraphGenerator";
// import EssayWriter from "./pages/ToolDetails/EssayWriter";
// import EmailWriter from "./pages/ToolDetails/EmailWriter";
// import TextSummarizer from "./pages/ToolDetails/TextSummarizer";
// import PythonWriter from "./pages/ToolDetails/PythonWriter";
// import CsharpWriter from "./pages/ToolDetails/CsharpWriter";
// import GoWriter from "./pages/ToolDetails/GoWriter";
// import ClassAbsentExcuse from "./pages/ToolDetails/ClassAbsentExcuse";
// import LoveLetter from "./pages/ToolDetails/LoveLetter";
// import PoetrySummarizer from "./pages/ToolDetails/PoetrySummarizer";
// import GrammerFixer from "./pages/ToolDetails/GrammerFixer";
// import JavaWriter from "./pages/ToolDetails/JavaWriter";
// import JavaScriptWriter from "./pages/ToolDetails/JavaScriptWriter";
// import MathsAndScience from "./pages/ToolDetails/MathsAndScience";
// import BlogPostIdea from "./pages/ToolDetails/BlogPostIdea";
// import FrenchTutor from "./pages/ToolDetails/FrenchTutor";
// import ArabicTutor from "./pages/ToolDetails/ArabicTutor";
// import MandarinTutor from "./pages/ToolDetails/MandarinTutor";
// import RussianTutor from "./pages/ToolDetails/RussianTutor";
// import JapaneseTutor from "./pages/ToolDetails/JapaneseTutor";
// import JsToPython from "./pages/ToolDetails/JsToPython";
// import SpanishTutor from "./pages/ToolDetails/SpanishTutor";
// import EmailResponder from "./pages/ToolDetails/EmailResponder";
// import CaptionWriter from "./pages/ToolDetails/CaptionWriter";
// import QuestionSolver from "./pages/ToolDetails/QuestionSolver";
// import TextToNote from "./pages/ToolDetails/TextToNote";
// import ConclusionWriter from "./pages/ToolDetails/ConclusionWriter";
// import SentenceExpander from "./pages/ToolDetails/SentenceExpander";
// import PersonalBio from "./pages/ToolDetails/PersonalBio";
// import SongWriter from "./pages/ToolDetails/SongWriter";
// import ScriptWriter from "./pages/ToolDetails/ScriptWriter";
// import BookSummarizer from "./pages/ToolDetails/BookSummarizer";
// import HookGenerator from "./pages/ToolDetails/HookGenerator";
// import CreativeStory from "./pages/ToolDetails/CreativeStory";
// import PersonalStatementWriter from "./pages/ToolDetails/PersonalStatementWriter";
// import MovieSceneAnalysis from "./pages/ToolDetails/MovieSceneAnalysis";
// import ContentImprover from "./pages/ToolDetails/ContentImprover";
// import ResumeBulletPoints from "./pages/ToolDetails/ResumeBulletPoints";
// import Humanize from "./pages/ToolDetails/Humanize";
// import Citation from "./pages/ToolDetails/Citation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OutsideLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/registration" element={<OutsideLayout />}>
        <Route index element={<Registration />} />
      </Route>
      <Route path="/about" element={<OutsideLayout />}>
        <Route index element={<About />} />
      </Route>
      <Route path="/product" element={<OutsideLayout />}>
        <Route index element={<Product />} />
      </Route>
      <Route path="/faq" element={<OutsideLayout />}>
        <Route index element={<Faqarea />} />
      </Route>
      <Route path="/blog" element={<OutsideLayout />}>
        <Route index element={<Blog />} />
      </Route>
      <Route path="/contact" element={<OutsideLayout />}>
        <Route index element={<Contact />} />
      </Route>
      <Route path="/dashboard" element={<OutsideLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/tooldetails/:id" element={<OutsideLayout />}>
        <Route index element={<Tooldetails />} />
      </Route>
      {/* <Route path="/paragraph-generator" element={<OutsideLayout />}>
        <Route index element={<ParagraphGenerator />} />
      </Route>
      <Route path="/essay-writer" element={<OutsideLayout />}>
        <Route index element={<EssayWriter />} />
      </Route>
      <Route path="/email-writer" element={<OutsideLayout />}>
        <Route index element={<EmailWriter />} />
      </Route>
      <Route path="/text-summarizer" element={<OutsideLayout />}>
        <Route index element={<TextSummarizer />} />
      </Route>
      <Route path="/python-writer" element={<OutsideLayout />}>
        <Route index element={<PythonWriter />} />
      </Route>
      <Route path="/love-letter" element={<OutsideLayout />}>
        <Route index element={<LoveLetter />} />
      </Route>
      <Route path="/csharp-writer" element={<OutsideLayout />}>
        <Route index element={<CsharpWriter />} />
      </Route>
      <Route path="/go-writer" element={<OutsideLayout />}>
        <Route index element={<GoWriter />} />
      </Route>
      <Route path="/class-absent" element={<OutsideLayout />}>
        <Route index element={<ClassAbsentExcuse />} />
      </Route>
      <Route path="/grammer-fixer" element={<OutsideLayout />}>
        <Route index element={<GrammerFixer />} />
      </Route>
      <Route path="/poetry-summarizer" element={<OutsideLayout />}>
        <Route index element={<PoetrySummarizer />} />
      </Route>
      <Route path="/maths-science" element={<OutsideLayout />}>
        <Route index element={<MathsAndScience />} />
      </Route>
      <Route path="/java-writer" element={<OutsideLayout />}>
        <Route index element={<JavaWriter />} />
      </Route>
      <Route path="/js-writer" element={<OutsideLayout />}>
        <Route index element={<JavaScriptWriter />} />
      </Route>
      <Route path="/bpi-writer" element={<OutsideLayout />}>
        <Route index element={<BlogPostIdea />} />
      </Route>
      <Route path="/french-tutor" element={<OutsideLayout />}>
        <Route index element={<FrenchTutor />} />
      </Route>
      <Route path="/arabic-tutor" element={<OutsideLayout />}>
        <Route index element={<ArabicTutor />} />
      </Route>
      <Route path="/jstopython-writer" element={<OutsideLayout />}>
        <Route index element={<JsToPython />} />
      </Route>
      <Route path="/mandarin-tutor" element={<OutsideLayout />}>
        <Route index element={<MandarinTutor />} />
      </Route>
      <Route path="/russian-tutor" element={<OutsideLayout />}>
        <Route index element={<RussianTutor />} />
      </Route>
      <Route path="/japanese-tutor" element={<OutsideLayout />}>
        <Route index element={<JapaneseTutor />} />
      </Route>
      <Route path="/spanish-tutor" element={<OutsideLayout />}>
        <Route index element={<SpanishTutor />} />
      </Route>
      <Route path="/email-responder" element={<OutsideLayout />}>
        <Route index element={<EmailResponder />} />
      </Route>
      <Route path="/caption-writer" element={<OutsideLayout />}>
        <Route index element={<CaptionWriter />} />
      </Route>
      <Route path="/question-solver" element={<OutsideLayout />}>
        <Route index element={<QuestionSolver />} />
      </Route>
      <Route path="/text-note" element={<OutsideLayout />}>
        <Route index element={<TextToNote />} />
      </Route>
      <Route path="/conclusion-writer" element={<OutsideLayout />}>
        <Route index element={<ConclusionWriter />} />
      </Route>
      <Route path="/sentence-expander" element={<OutsideLayout />}>
        <Route index element={<SentenceExpander />} />
      </Route>
      <Route path="/personal-bio" element={<OutsideLayout />}>
        <Route index element={<PersonalBio />} />
      </Route>
      <Route path="/song-writer" element={<OutsideLayout />}>
        <Route index element={<SongWriter />} />
      </Route>
      <Route path="/script-writer" element={<OutsideLayout />}>
        <Route index element={<ScriptWriter />} />
      </Route>
      <Route path="/book-summarizer" element={<OutsideLayout />}>
        <Route index element={<BookSummarizer />} />
      </Route>
      <Route path="/hook-generator" element={<OutsideLayout />}>
        <Route index element={<HookGenerator />} />
      </Route>
      <Route path="/story-writer" element={<OutsideLayout />}>
        <Route index element={<CreativeStory />} />
      </Route>
      <Route path="/personalstatement-writer" element={<OutsideLayout />}>
        <Route index element={<PersonalStatementWriter />} />
      </Route>
      <Route path="/moviescene-analysis" element={<OutsideLayout />}>
        <Route index element={<MovieSceneAnalysis />} />
      </Route>
      <Route path="/content-improver" element={<OutsideLayout />}>
        <Route index element={<ContentImprover />} />
      </Route>
      <Route path="/resume-bullet" element={<OutsideLayout />}>
        <Route index element={<ResumeBulletPoints />} />
      </Route>
      <Route path="/humanize-writer" element={<OutsideLayout />}>
        <Route index element={<Humanize />} />
      </Route>
      <Route path="/citation-writer" element={<OutsideLayout />}>
        <Route index element={<Citation />} />
      </Route> */}
    </Routes>
  );
}

export default App;
