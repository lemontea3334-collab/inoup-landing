import { HashRouter, Routes, Route } from 'react-router-dom'
import InnoUpLandingV3 from './InnoUpLandingV3'
import AboutPage from './AboutPage'
import QuizPage from './QuizPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InnoUpLandingV3 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
