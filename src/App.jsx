import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InnoUpLandingV3 from './InnoUpLandingV3'
import AboutPage from './AboutPage'
import QuizPage from './QuizPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InnoUpLandingV3 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
