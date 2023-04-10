import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { randomColor } from '../utils';
import { RandomReveal } from 'react-random-reveal';
import { aboutMe } from '../data';

const Project = () => {
  const state = aboutMe;
  const navigation = useNavigate();

  // const theme = useSelector((state) => state.theme)
  return (
    <div className=' zoom-in bg-[#101214] sticky h-screen z-[99999] pt-[7rem] p-3 sm:p-24 sm:px-44 flex-grow '>
      <div className=" text-[#ddd] relative h-full"
      >
        <div
          onClick={() => navigation('/')}
          className="absolute hover:rotate-[calc(360*2deg)] back-button cursor-pointer duration-150 translate-x-[-10%] bottom-0 left-0 w-10 h-10 flex items-center justify-center text-2xl font-bold text-[#101214] bg-[#ddd] rounded-full"
        >{'<'}</div>
        <h1
          className="text-7xl max-md:text-5xl font-[700] cursor-pointer "
        >
          <RandomReveal
            characters={state.title}
            isPlaying
            duration={0.4}
          />
          {/* {state.title} */}
        </h1>

        <p
          className="text-[#959595] text-2xl max-md:text-sm font-[400] mt-20 "
        >
          <ReactMarkdown

          >{state.description}</ReactMarkdown>
        </p>

        <div className="flex overflow-clip flex-wrap mt-10 flex-row gap-3">
          {state.skills.map((tag) => (
            <div
              key={tag}
              style={{
                color: `#cccccc${Math.random().toFixed(2) * 50 + 50}`,
                // color: 'transparent',
                // stroke: `${randomColor().text}`,
              }}
              className=" text-2xl max-md:text-sm font-[900] "
            >

              {tag}

            </div>
          ))}
        </div>

        <a
        href={state.contact}
        target="_blank"
        className="flex w-fit hover:bg-black hover:invert duration-150 font-light hover:pr-56 mt-10 gap-4 items-center flex-row">
          <h1 className="text-2xl max-md:text-sm">
            gmail/{state.contact}
          </h1>
        </a>

      </div>
    </div>
  )
}

export default Project