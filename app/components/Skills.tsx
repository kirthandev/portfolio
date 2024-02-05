import React from "react";
import Image from "next/image";

const skillsData = [
  { src: "/html.png", alt: "HTML", text: "HTML" },
  { src: "/css.png", alt: "CSS", text: "CSS" },
  { src: "/js.png", alt: "JavaScript", text: "JavaScript" },
  { src: "/react.png", alt: "ReactJS", text: "ReactJS" },
  { src: "/next.png", alt: "NextJS", text: "NextJS" },
  { src: "/node.png", alt: "NodeJS", text: "NodeJS" },
  { src: "/tailwind.png", alt: "Tailwind", text: "Tailwind" },
  { src: "/bootstrap.png", alt: "Bootstrap", text: "Bootstrap" },
  { src: "/mongo.png", alt: "MongoDB", text: "MongoDB" },
  { src: "/git.png", alt: "GitHub", text: "GitHub" },
  { src: "/figma.png", alt: "Figma", text: "Figma" },
  { src: "/wordpress.png", alt: "WordPress", text: "WordPress" },
];

const Skills = () => {
  return (
    <div className="w-full mb-auto my-12 pb-6">
      <div className="max-w-full mx-auto flex flex-col justify-center align-middle text-center h-full">
        <p className="text-base tracking-widest uppercase ">Skills</p>
        <h2 className="p-1 text-2xl text-sky-600 font-bold">What I Can Do</h2>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center pb-12 pt-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="mx-auto w-auto justify-center align-middle text-center rounded-xl shadow-lg p-2"
            >
              <Image src={skill.src} width={85} height={85} alt={skill.alt} />
              <h3 className="font-bold text-sm ">{skill.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
