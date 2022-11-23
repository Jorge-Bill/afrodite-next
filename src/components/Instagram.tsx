import React from 'react';

const Instagram = () => {
  return (

<div className={`py-12 bg-background`} id="instagram">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="lg:text-center">
    <h2 className={`text-base text-primary font-semibold tracking-wide uppercase`}>
        Conheça meu
    </h2>
    <p className="mt-2 mb-4 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
       Instagram
    </p>
    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
       Acompanhe a carta do dia, que é uma orientação para você no viver melhor seu dia nos stories, recados das entidades e conteúdo exclusivo.
    </p>
  </div>
  <div className="mt-10 flex items-center justify-center">   
    <iframe 
      className='border-4 border-indigo-600 border-opacity-50 rounded-lg p-1 shadow-xl' 
      id="frame" width="auto" height="600" src="https://www.instagram.com/p/CaAB6B5gFy0/embed" />
  </div>
</div>
</div>
  );
};
export default Instagram;
