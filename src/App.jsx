import RandomBubbles from './components/RandomBubbles';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-300 text-white">
      <RandomBubbles count={15} />
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
