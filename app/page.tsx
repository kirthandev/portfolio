import { ModeToggle } from "@/components/Mode-Toggle";
import Image from "next/image";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

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
          {/* <div className="text-2xl flex justify-center gap-16 py-3 text-sky-800 dark:text-sky-200">
            <a
              href="https://www.linkedin.com/in/kirthan-hegde/"
              target="_blank"
            >
              <BsLinkedin className=" cursor-pointer hover:text-orange-400 dark:hover:text-sky-600" />
            </a>
            <a href="https://github.com/kirthandev/" target="_blank">
              <BsGithub className="cursor-pointer hover:text-orange-400 dark:hover:text-sky-600" />
            </a>
            <a href="mailto:kirthanhegde.dev@gmail.com" target="_blank">
              <AiOutlineMail className="cursor-pointer hover:text-orange-400 dark:hover:text-sky-600" />
            </a>
          </div> */}

          <div className=" flex w-full justify-center align-middle mt-3 text-3xl text-sky-400">
            {/* <AiOutlineArrowDown />  */}
            <Image
              src={"/scroll.gif"}
              width={35}
              height={35}
              className="pt-2 "
            />
          </div>

          {/* <div className="w-full mb-auto my-12 pb-6">
            <div className="max-w-full mx-auto flex flex-col justify-center align-middle text-center h-full">
              <p className="text-base tracking-widest uppercase ">Skills</p>
              <h2 className="p-1 text-2xl text-sky-600 font-bold">
                What I Can Do
              </h2>
              <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center pb-12 pt-4">
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/html.png"} width={85} height={85} alt="html" />
                  <h3 className="font-bold text-sm ">HTML</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/css.png"} width={85} height={85} alt="html" />
                  <h3 className="font-bold text-sm ">CSS</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/js.png"} width={85} height={85} alt="html" />
                  <h3 className="font-bold text-sm ">JavaScript</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/react.png"} width={85} height={85} alt="html" />
                  <h3 className="font-bold text-sm ">ReactJS</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/node.png"} width={85} height={85} alt="html" />
                  <h3 className="font-bold text-sm ">NodeJS</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/next.png"} width={85} height={85} alt="html" />
                  <h3 className="font-bold text-sm ">NextJS</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image
                    src={"/tailwind.png"}
                    width={85}
                    height={85}
                    alt="html"
                  />
                  <h3 className="font-bold text-sm ">Tailwind</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image
                    src={"/bootstrap.png"}
                    width={85}
                    height={85}
                    alt="html"
                  />
                  <h3 className="font-bold text-sm ">Bootstrap</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/mongo.png"} width={85} height={85} alt="html" />
                  <h3 className="font-bold text-sm ">MongoDB</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/git.png"} width={85} height={85} alt="Github" />
                  <h3 className="font-bold text-sm ">GitHub</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image src={"/figma.png"} width={85} height={85} alt="html" />
                  <h3 className="font-bold text-sm ">Figma</h3>
                </div>
                <div className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2 ">
                  <Image
                    src={"/wordpress.png"}
                    width={85}
                    height={85}
                    alt="wordpress"
                  />
                  <h3 className="font-bold text-sm ">Wordpress</h3>
                </div>
              </div>
            </div>
          </div> */}
          <Skills />
        </section>
      </section>
      <Footer />
    </main>
  );
}
