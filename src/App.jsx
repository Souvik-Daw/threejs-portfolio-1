import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, Contact, StarsCanvas, About, Experience, Tech, Works, Feedbacks } from "./components";


function App() {


  return (
    <>
      <BrowserRouter>
        <div className='relative z-0'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>

          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <About />
            <Experience />
          </div>

          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Works />
            <Feedbacks />
          </div>



          <div className='relative z-0'>
            <Tech />
            <Contact />
            <StarsCanvas />
          </div>


        </div>
      </BrowserRouter>

    </>
  )
}

export default App
