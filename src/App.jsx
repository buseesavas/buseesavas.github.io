import React from 'react';
import './App.css';

const data = {
  name: "Buse Savaş",
  socialLinks: [
    { href: "https://github.com/buseesavas", imgSrc: "icon-github.svg", alt: "Github icon" },
    { href: "https://www.linkedin.com/in/busesava%C5%9F/", imgSrc: "icon-linkedin.svg", alt: "Linkedin icon" }
  ],
  aboutMe: {
    name: "Buse Savaş",
    imgSrc: "buse-foto.png",
    alt: "Buse Savaş Fotoğraf",
    text: "Kendini sürekli geliştirmeye ve öğrenmeye açık, tutkulu ve kararlı bir bilgisayar mühendisiyim. Yazılım geliştirme alanında, frontend teknolojileri üzerinde yoğunlaşıyorum. Şu anda, React ve Pure CSS kullanarak kullanıcı dostu ve duyarlı web uygulamaları geliştirme konusunda uzmanlık kazanıyorum. Aktif olarak Acunmedya Akademi Frontend Temel ve Uzmanlık Eğitimi, uzmanlık sınıfı öğrencisiyim. Amacım, yetenekli bir ekip içerisinde yer alarak hem kendimi geliştirmek hem de değerli katkılarda bulunmak."
  },
  projects: [
    { imgSrc: "blog-page.png", title: "Blog Page", stack: "HTML CSS", liveLink: "https://blog-page-lemon.vercel.app/", codeLink: "https://github.com/buseesavas/blog-page" },
    { imgSrc: "faq-accordion.png", title: "Faq Accordion", stack: "HTML CSS", liveLink: "https://faq-accordion-beta-five.vercel.app/", codeLink: "https://github.com/buseesavas/faq-accordion" },
    { imgSrc: "food-page.png", title: "Food Page", stack: "HTML CSS", liveLink: "https://food-page-jade.vercel.app/", codeLink: "https://github.com/buseesavas/food-page" },
    { imgSrc: "portfolio.png", title: "Portfolio", stack: "HTML CSS", liveLink: "https://example-portfolio-eight.vercel.app/", codeLink: "https://github.com/buseesavas/example-portfolio" },
    { imgSrc: "recipe-page.png", title: "Recipe Page", stack: "HTML CSS", liveLink: "https://recipe-page-ahlg.vercel.app/", codeLink: "https://github.com/buseesavas/recipe-page" },
    { imgSrc: "revenue-page.png", title: "Revenue Page", stack: "HTML CSS", liveLink: "https://saas-1-zeta.vercel.app/", codeLink: "https://github.com/buseesavas/saas-1" },
    { imgSrc: "yazi-tura-oyunu.png", title: "Yazı Tura Oyunu", stack: "HTML CSS JAVASCRIPT", liveLink: "https://yazi-tura-oyunu.vercel.app/", codeLink: "https://github.com/buseesavas/yazi-tura-oyunu" },
    { imgSrc: "frontend-quiz.png", title: "Frontend Quiz", stack: "HTML CSS REACT.JS", liveLink: "https://frontend-quiz-with-react.vercel.app/", codeLink: "https://github.com/buseesavas/frontend-quiz-with-react.git" },
    { imgSrc: "markdown-editor.png", title: "Markdown Editor", stack: "HTML CSS REACT.JS", liveLink: "https://markdown-app-react.vercel.app/", codeLink: "https://github.com/buseesavas/markdown-app-react.git" },
    { imgSrc: "memory-game.png", title: "Memory Game", stack: "HTML CSS REACT.JS", liveLink: "https://react-memory-game-rouge.vercel.app/", codeLink: "https://github.com/buseesavas/memory-game-react.git" }
  ]
};

function App() {
  return (
    <div className="container">
      <Header name={data.name} socialLinks={data.socialLinks} />
      <AboutMe aboutMe={data.aboutMe} />
      <Projects projects={data.projects} />
      <Footer name={data.name} socialLinks={data.socialLinks} />
    </div>
  );
}

const Header = ({ name, socialLinks }) => (
  <div className="header">
    <h3>{name}</h3>
    <ul className="social-media-links">
      {socialLinks.map((link, index) => (
        <li key={index}><a href={link.href} target="_blank" rel="noopener noreferrer"><img src={link.imgSrc} alt={link.alt} /></a></li>
      ))}
    </ul>
  </div>
);

const AboutMe = ({ aboutMe }) => (
  <div className="about-me">
    <img src={aboutMe.imgSrc} alt={aboutMe.alt} className="avatar" />
    <div className="about-me-text">
      <h1>Merhaba!<br />Ben <span>{aboutMe.name}</span></h1>
      <h5>{aboutMe.text}</h5>
    </div>
  </div>
);

const Projects = ({ projects }) => (
  <div className="projects">
    <h2>Projects</h2>
    <div className="cards">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <img src={project.imgSrc} alt={project.title} />
          <h3>{project.title}<br /><span>{project.stack}</span></h3>
          <div className="card-btns">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">PROJEYİ GÖRÜNTÜLE</a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">KODLARA BAK</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Footer = ({ name, socialLinks }) => (
  <div className="footer">
    <h3>{name}</h3>
    <ul className="social-media-links">
      {socialLinks.map((link, index) => (
        <li key={index}><a href={link.href} target="_blank" rel="noopener noreferrer"><img src={link.imgSrc} alt={link.alt} /></a></li>
      ))}
    </ul>
  </div>
);

export default App;

