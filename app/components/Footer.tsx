import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="text-center  text-sky-600  mb-4 mt-4">
        <h4 className="text-xs font-medium pb-2">
          {" "}
          ❤️ Build With <span className="font-bold">NextJs, TailwindCSS</span>
        </h4>
        <p className="text-xs">
          © {new Date().getFullYear()} Kirthan Hegde. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
