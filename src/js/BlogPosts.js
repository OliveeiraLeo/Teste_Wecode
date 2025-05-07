import React from 'react';
import '../styles/BlogPosts.scss';
import Blog1 from '../assets/images/Blog/Blog1.png';
import Blog2 from '../assets/images/Blog/Blog2.png';
import Blog3 from '../assets/images/Blog/Blog3.png';

export default function BlogPosts() {
  const posts = [
    {
      img: Blog1,
      title: 'É AMANHÃ',
      desc: 'SIMPLE and TRUE: Lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️.',
    },
    {
      img: Blog2,
      title: 'NOVO LOGO, MESMA ESSÊNCIA.',
      desc: 'Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
    },
    {
      img: Blog3,
      title: 'DESCUBRA O GLAMOUR EM CADA PASSO.',
      desc: 'Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é a perfeita pra você.✨',
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2 className='title-blogs'>Conheça Mais</h2>
        <p className='desc-blogs'>Fique por dentro de tudo que acontece na Bebecê!</p>
      </div>

      <div className="blog-posts">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.img} alt={post.title} />
            <h3 className='title'>{post.title}</h3>
            <p className='descricao'>{post.desc}</p>
            <button className="read-more">Saiba mais!</button>
          </div>
        ))}
      </div>
    </section>
  );
}
