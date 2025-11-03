import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className='home-page flex h-screen'>
      <Navigation />
      <div className='body-part'>
        <Header />
        <section id="home" className='container'>
          <p>HOME</p>
          <h1>Hi, I'm NGASSA, a <span>JAVASCRIPT</span> fullstack developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Nihil quaerat repellendus cumque in reiciendis 
            iure aperiam. Quis, molestias impedit ea magnam, 
            quae, esse quibusdam veniam alias incidunt pariatur 
            odit hic?
          </p>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;