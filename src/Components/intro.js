import React, {useState} from "react";
export function Overlay(){
    return (
        <div id="overlay"></div>
    );
}

export default function Awanish(){
  return (
  <div id="intro" className="bg-green-200 sm:rounded-3xl sm:my-8 sm:mr-12" >
      <h1 className="mt-8">
        <button className="select bg-green-300 rounded-md">
          Hi, 
        </button>
        this is Awanish's folio website
      </h1>
      <p className="text-md md:text-xl my-12">
        Hi, I am <strong>Awanish Yadav</strong>. You are welcome to check my
        CV <a href="">link </a> here.
        I am currently persuing Bachelor of
        Technology at University of Lucknow with Computer science as branch.
        Highly motivated Computer Science undergraduate with a strong
        foundation in programming languages Python, javascript and data
        structures. Eager to leverage my skills and academic knowledge to
        contribute to a fast-paced and innovative environment.
      </p>
  </div>
  );
}