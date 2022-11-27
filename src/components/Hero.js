import React from 'react';
// import images
import WomanImg from '../img/woman_hero.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id='herosection' >
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>Yeni Trend
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            SONBAHARIN MODASI <br />
            <span className='font-semibold'>KADIN ÜRÜNLERİ</span>
          </h1>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Ürünleri Keşfet
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block m-auto w-auto h-auto'>
          <img id='womanhaha' src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
