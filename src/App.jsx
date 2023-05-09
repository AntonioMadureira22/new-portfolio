import '../src/App.css'
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/aboutme/Aboutme'
import Projects from './components/projects/Project';

function App() {
  return (
    <div className="App">
     <Navbar />
     <AboutMe />
     <Projects />
    </div>
  );
}

export default App;
