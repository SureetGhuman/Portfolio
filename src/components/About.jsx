import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Welcome to my digital workspace, where code meets creativity. With a
            strong foundation in full-stack development and a passion for
            crafting efficient, scalable solutions, I thrive on solving complex
            problems one line of code at a time. Whether it's designing
            user-friendly interfaces or building powerful backend systems, I
            approach every project with precision and dedication. Grab a coffee,
            explore my portfolio, and let's create something remarkable
            together.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
