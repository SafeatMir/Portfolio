import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="px-4 sm:px-8  md:px-24 lg:px-48 xl:px-64">
      <Head>
        <title> Safeat Mir | Front-End Developer</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
