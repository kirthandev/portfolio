import { ModeToggle } from "@/components/Mode-Toggle";
import Image from "next/image";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { Github, Linkedin, Mail } from "lucide-react";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main>
      <section className="md:px-20 lg:px-40">
        <section className="min-h-screen ">
          <nav className="py-4 pl-8 pr-8 mb-8 flex justify-between z-50">
            <h1 className="text-xs font-bold text-center">KH</h1>

            {/* <ul className='hidden md:flex items-center gap-10 text-sm font-semibold'>

          {links.map(({id, link}) => (
                <li key={id} className='cursor-pointer capitalize hover:scale-125 duration-300'>
                   {link}
                </li>
          ))}
        </ul> */}
            <div className="flex justify-between items-center gap-4 cursor-pointer">
              <ModeToggle />
            </div>
          </nav>

          <div className="flex justify-center align-middle pt-2">
            <Image
              src="/avatar-5.png"
              alt="Kirthan Hegde"
              width={200}
              height={200}
            />
          </div>

          <div className="text-center p-5 ">
            <h2 className="text-4xl py-2 text-sky-600 font-bold">
              Kirthan Hegde
            </h2>
            {/* <h3 className="text-2xl py-2 font-semibold">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Web Designer",
                    "Personal Trainer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3> */}
            <p className="text-md py-4 leading-7 max-w-lg mx-auto">
              Experienced freelance web developer and designer. Crafting
              visually stunning websites that leave a lasting impression. Let's
              bring your digital vision to life with creativity and technical
              finesse. Join me below and let's begin our journey towards an
              exceptional online presence.
            </p>
          </div>
          <div className="text-2xl flex justify-center gap-16 py-3 text-sky-800 dark:text-sky-200">
            <a
              href="https://www.linkedin.com/in/kirthan-hegde/"
              target="_blank"
            >
              <Linkedin className=" cursor-pointer hover:text-orange-400 dark:hover:text-sky-600" />
            </a>
            <a href="https://github.com/kirthandev/" target="_blank">
              <Github className="cursor-pointer hover:text-orange-400 dark:hover:text-sky-600" />
            </a>
            <a href="mailto:kirthanhegde.dev@gmail.com" target="_blank">
              <Mail className="cursor-pointer hover:text-orange-400 dark:hover:text-sky-600" />
            </a>
          </div>

          <div className=" flex w-full justify-center align-middle mt-3 text-3xl text-sky-400">
            {/* <AiOutlineArrowDown />  */}
            <Image
              src="/scroll.gif"
              width={45}
              height={45}
              className="pt-2"
              alt="Scroll img"
            />
          </div>
          <Skills />
          <Projects />
          <Contact />
        </section>
      </section>
      <Footer />
    </main>
  );
}
