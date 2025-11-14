import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className='page'>
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className='absolute bottom-[0px] left-[0px] size-[300px] z-[-1] rounded-[50%] bg-[radial-gradient(circle,_var(--color-home)_0%_1%,_#304d2c_50%,_#0f0f0f_70%_100%)] opacity-65'></div>
        <div className='absolute top-[0px] right-[0px] size-[300px] z-[-1] rounded-[50%] bg-[radial-gradient(circle,_var(--color-home)_0%_1%,_#304d2c_50%,_#0f0f0f_70%_100%)] opacity-65'></div>
      </div>
      <Navigation />
      <div className='body-part'>
        <Header name='text-(--color-home)'/>
        <section id="home" className='container h-[calc(100vh-40px)]'>
          <p className="text-[min(2vw,10px)]">HOME</p>
          <h1 className='text-[min(15vw,45px)] leading-12'>Hi, I'm NGASSA LANDRY, a <span className='text-[#91ff87]'>JAVASCRIPT</span> fullstack developer</h1>
          <p className="text-[min(3vw,11px)] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Nihil quaerat repellendus cumque in reiciendis 
            iure aperiam. Quis, molestias impedit ea magnam, 
            quae, esse quibusdam veniam alias incidunt pariatur 
            odit hic?
          </p>
        </section>
        <Footer bgdot='bg-(--color-home)'/>
      </div>
    </div>
  );
};

export default Home;