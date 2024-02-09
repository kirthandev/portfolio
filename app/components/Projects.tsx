import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";

const projects = [
  {
    title: "HreemTech Agency",
    description:
      "A digital partner for success, specializing in tailored web development and design services to meet client needs.",
    image: "/Hreemtech.png",
    Lang: "NextJS, TailwindCSS, NodeJS",
    link: "https://hreemtech.vercel.app",
  },
  {
    title: "QTrip Dynamic",
    description:
      "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. ",
    image: "/Qtrip.png",
    Lang: "HTML, CSS, JS, Bootstrap",
    link: "https://kirthan-qtripdynamic.netlify.app/",
  },
  {
    title: "XBoard",
    description:
      "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.",
    image: "/NewsFeed.png",
    Lang: "HTML, CSS, JS, RestfulAPI",
    link: "https://kirthan-xboard.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="flex  flex-col justify-center align-middle ">
      <div className="justify-center align-middle text-center">
        <p className="text-base tracking-widest uppercase ">Projects</p>
        <h2 className="p-1 text-3xl text-sky-600 font-bold">
          What I Have Done
        </h2>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="flex justify-center align-middle m-4 ">
          <div className="flex max-w-2xl flex-col items-center justify-center rounded-md border md:flex-row shadow-md dark:shadow-cyan-700">
            <div className="h-full w-full md:h-[200px] md:w-[300px]">
              <Image
                src={project.image}
                alt={`Project ${index + 1} Image`}
                width={1000}
                height={600}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <div className="p-4 text-center md:text-left">
                <h1 className="inline-flex items-center text-xl font-bold">
                  {project.title}
                </h1>
                <p className="mt-3 text-sm max-w-64">{project.description}</p>
                <div className=" mt-4 max-w-50 font-mono text-[12px]">
                  <p>{project.Lang}</p>
                </div>
                <Button
                  variant={"secondary"}
                  className="w-full mt-2 bg-gradient-to-r from-sky-900 to-cyan-600"
                >
                  <Eye className="mr-2 " />
                  <Link href={project.link}> View Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
