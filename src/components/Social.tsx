import React from 'react';

import config from '../config/index.json';
import { 
  FaInstagram, 
  FaTiktok,
  FaWhatsapp
} from 'react-icons/fa';

const Social = () => {
  const { mainHero } = config;
  return (
    <div className={`py-8 bg-background`} id="social">
      <div className={`container text-center max-w-5xl mx-auto m-8`}>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
          Minhas redes sociais
        </p>
        <p className="mt-4 max-w-2xl text-center text-base text-gray-500 lg:mx-auto">
          Acompanhe a carta do dia, uma orientação para você no viver melhor seu dia, recados das entidades e conteúdos exclusivos.
        </p>

        <div className='mt-5 mb-2 sm:mt-8 flex justify-center'>
          <div className="rounded-md shadow">
            <a
              target="_blank"
              rel="noreferrer"
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:text-offwhite md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text} <FaWhatsapp className='ml-1' />
            </a>
          </div>
        </div>

        <div className={`flex flex-wrap flex-col sm:flex-row`}>
        <div className={`w-full sm:w-1/2 p-4`}>
            <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
              <iframe 
                className='h-6/6' 
                id="instagramProfile" 
                style={{maxWidth: 'auto', minWidth: '100%', minHeight: '425px', maxHeight: 'auto'}} 
                src="https://www.instagram.com/p/Cm9LrCGq-yg/embed"
              />
            </div>
            <div className="rounded-md mt-2">
              <a
                target="_blank"
                rel="noreferrer"
                href={mainHero.secondaryAction.href}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:text-primary md:py-4 md:text-lg md:px-10`}
              >
                {mainHero.secondaryAction.text} <FaInstagram className='ml-1' />
              </a>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-4`}>
            <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
              <blockquote
                className="tiktok-embed h-6/6"
                cite="https://www.tiktok.com/@magiastarotafrodite"
                data-unique-id="magiastarotafrodite"
                data-embed-type="creator"
                style={{maxWidth: 'auto', minWidth: 'auto', minHeight: 'auto'}}
              >
                <section>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@magiastarotafrodite?refer=creator_embed">
                      @magiastarotafrodite
                    </a>
                </section>
              </blockquote>
            </div>
            <div className="rounded-md mt-2">
            <a
              target="_blank"
              rel="noreferrer"
              href={mainHero.tertiaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.tertiaryAction.text} <FaTiktok className='ml-1' />
            </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Social;
