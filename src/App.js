import { useState } from "react";
import "./App.scss";
import { CV } from "./CV/CV";
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import More from './components/More/More';
import Education from './components/Education/Education';
import Form from "./components/Form/Form";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {

  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Form />
{/*       <Hero hero={hero} />
      <About about={hero.aboutMe} />
      <div class='c-btnbox'>
        <button className='c-btn' onClick={() => setShowEducation(true)}>Educación</button>
        <button className='c-btn' onClick={() => setShowEducation(false)}>Experiencia</button>
      </div>
      {showEducation ? (<Education education={education} />) : (<Experience experience={experience} />)}
      <More languages={languages} habilities={habilities} volunteer={volunteer}/> */}
    </div>
  );
}

export default App;
