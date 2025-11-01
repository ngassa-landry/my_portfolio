import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <>
      <Navigation />
      <div className='body-part'>
        <Header />
        <section id="home">
          <p>HOME</p>
          <h1>Hi, I'm NGASSA, a JAVASCRIPT developer</h1>
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
    </>
  );
};

export default Home;