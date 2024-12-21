import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>WANT TO LOOK LIKE YOUR FAVOURITE ANIME CHARACTER?</p>
        <h1
          className="uppercase font-semibold text-4xl
       sm:text-5xl md:text-6xl lg:text-7xl"
        >
          OLYMPIAN<span className="text-red-400">GYM</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        Create personalized workout routines tailored to your fitness goals{" "}
        <span className="text-red-400 font-medium">
          with ease—your ultimate gym companion{" "}
        </span>
        for better results,{" "}
        <span className="text-red-400 font-medium">faster progress.</span>.{" "}
      </p>

      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"START TRAINING"}
      >
        {" "}
      </Button>
    </div>
  );
}
