import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Landing from "./components/Layouts/Landing.jsx"
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import MyWork from './components/MyWork/MyWork.jsx';
import ProjectCard from './components/MyWork/Project.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/mywork' element={<MyWork />} />
          <Route path='/project/:id' element={<ProjectCard />} />

        </Route>

      </Routes>
    </>

  );
}

export default App;
