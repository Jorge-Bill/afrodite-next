import React from 'react';
import Divider from './Divider';

const Info = () => {
  return (
    <section className={`bg-background py-8`} id="info">
    <div className={`container max-w-5xl mx-auto m-8`}>
      <h1
        className={`w-full my-2 text-5xl font-bold leading-tight text-center text-border`}
      >
        Sobre o <span className='text-primary'>Tarot</span>
      </h1>
      <Divider />
        <div className={`flex flex-wrap border-4 border-indigo-600 border-opacity-50 rounded-lg p-8 shadow-xl`}>
            <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-6`}>O que é o tarot?</h3>
            <p className={`text-gray-600 subpixel-antialiased font-light tracking-light leading-7 align-baseline leading-relaxed`}>
                O tarot é um jogo composto por 78 cartas – do total, 22 delas são chamadas de arcanos maiores e as outras 56 são compostas pelas cartas de um baralho normal. Cada lâmina vem com a ilustração de um arquétipo, que traz um significado. A leitura, que combina diferentes cartas, é baseada na aleatoriedade (ou seja, são sorteadas ao acaso) e ajuda a interpretar situações e criar um panorama da vida de quem consulta esse oráculo.
            </p>
            <p className={`text-gray-600 subpixel-antialiased font-light tracking-light leading-7 align-baseline leading-relaxed`}>
                As imagens trazem mensagens positivas ou negativas, relacionadas ao passado, ao presente e ao futuro. Tudo depende de onde a carta aparecer no momento da abertura. Os arcanos maiores costumam falar sobre o eu interior e a individualidade, enquanto os arcanos menores falam do eu exterior, da personalidade. Através do tarot é possível fazer uma análise, tirar dúvidas e fazer previsões.
            </p>
            
            <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-6 mt-6`}>História</h3>
            <p className={`text-gray-600 subpixel-antialiased font-light tracking-light leading-7 align-baseline leading-relaxed`}>
                Um dos tarot mais tradicionais é o de Marselha, mas sua origem não é muito definida. Algumas teorias dizem que o tarot surgiu na China, outras na Índia, outras no Egito antigo. Há uma lenda segundo a qual o tarot surgiu depois que a biblioteca de Alexandria pegou fogo, na Idade Média: os sábios precisaram pensar em formas de registrar seus conhecimentos, sem correrem o risco de serem pegos ou terem seus trabalhos destruídos. Por isso, criaram um livro com figuras que ilustravam as verdades mais profundas, que permeariam a humanidade.  
            </p>
            <p className={`text-gray-600 subpixel-antialiased font-light tracking-light leading-7 align-baseline leading-relaxed`}>
                O fato é que, por volta do século 14, as cartas com essas imagens chegariam à Europa, principalmente como um jogo de entretenimento. Com o tempo, as pessoas foram desvendando suas mensagens e transformando-a em ferramenta essencial para tomar decisões e potencializar o autoconhecimento. O renomado psicólogo Carl Jung fez uso dos arquétipos em suas teorias, que evocavam imagens capazes de traduzir nosso inconsciente.  
            </p>

            <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-6 mt-6`}>Como funciona uma leitura das cartas?</h3>
            <p className={`text-gray-800 subpixel-antialiased font-light tracking-light leading-7 align-baseline leading-relaxed`}>
                O tarot é uma ferramenta de autoconhecimento. Ele não apenas indica um caminho exato a se seguir, mas oferece opções e reflexões. Ao chegar a uma consulta, você pode ter uma pergunta pronta na cabeça ou pedir um panorama geral da sua vida. Afrodite vai embaralhar as cartas e abrir o seu jogo. Conforme as cartas forem viradas sobre a mesa, forma-se a linha de raciocínio, Neste momento não é apenas Afrodite falando mas o baralho em si é conduzido por entidades Que a acompanham como <b>Maria Padilha</b>, <b>Seu Zé Pelintra</b>, ou a <b>Bruxa Morgana</b> assim te passando recados e informações extremamente importantes. Normalmente costa-se dizer: 
            </p>
            <p className={`text-gray-800 subpixel-antialiased font-light tracking-light leading-8 align-baseline leading-relaxed mb-2 mt-2`}><b>O baralho não te diz o que você deseja mas aquilo que você precisa de ouvir.</b></p>
            <p className={`text-gray-600 subpixel-antialiased font-light tracking-light leading-7 align-baseline leading-relaxed`}>
                O passado vem à tona, fatos que aconteceram lá atrás mas que continuam influenciando a sua vida, seu presente e a situação em que se encontra, e o futuro. Como vai estar a sua situação, que caminhos você vai encontrar e como tomar a decisão correta? São conselhos e observações sobre a sua vida que surgem da energia das entidades em cada carta virada. 
            </p>

            <h3 className={`text-3xl text-gray-800 font-bold leading-none mb-6 mt-6`}>Orientações para uma boa consulta</h3>
            <ul className={`list-decimal text-gray-800 subpixel-antialiased font-light tracking-light leading-7 align-baseline leading-relaxed md:ml-4`}>
                <li>Consulta perante agendamento prévio</li>
                <li>Procure um lugar calmo e relaxante</li>
                <li>Tenha tempo para a consulta pois afrodite irá te chamar um pouco antes do horário agendado</li>
                <li>Preste atenção atentamente ao recado das cartas</li>
                <li>Avise a Afrodite com antecedência caso ocorra um imprevisto para remarcar a consulta</li>
                <li>As consultas acontecem após o pagamento via Pix</li>
                <li>Esteja apta(o) a ouvir os recados que o baralho tem para você</li>
                <li>Pense em suas perguntas e o que deseja descobrir antecipadamente</li>
            </ul>
        </div>
    </div>
  </section>
  );
};
export default Info;
