import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className='page'>
      <div className='absolute bottom-[-5px] left-[-5px] size-[300px] z-[-1] rounded-[50%] bg-radial from-[#91ff87] to-[#0a0a0a]'></div>
      <div className='absolute top-[-5px] right-[-5px] size-[300px] z-[-1] rounded-[50%] bg-radial from-[#91ff87] to-[#0a0a0a]'></div>
      <Navigation />
      <div className='body-part'>
        <Header name='text-[#91ff87]'/>
        <section id="home" className='container h-full'>
          <p className="text-[min(2vw,10px)]">HOME</p>
          <h1 className='text-[min(15vw,45px)] leading-12'>Hi, I'm NGASSA, a <span className='text-[#91ff87]'>JAVASCRIPT</span> fullstack developer</h1>
          <p className="text-[min(3vw,11px)] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Nihil quaerat repellendus cumque in reiciendis 
            iure aperiam. Quis, molestias impedit ea magnam, 
            quae, esse quibusdam veniam alias incidunt pariatur 
            odit hic?
          </p>
        </section>
        <Footer bgdot='bg-[#91ff87]'/>
      </div>
    </div>
  );
};

export default Home;