import React from "react";
import { randomColor } from "../utils";
import { projects, socials } from "../data";
import Socials from "../components/Socials";
import { useSelector, useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ProjectPage() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className=" animate-blur-slide-down-10 pt-[7rem] md:pt-[5rem] h-screen p-3 sm:p-6  ">
      <div className=" flex flex-col justify-center items-start ">
        <style></style>
        <div
          style={{
            color: theme.lightText,
          }}
          className=" lg:w-56 pl-2 scroll text-[24px] leading-snug  mb-3 py-2 font-[800] uppercase rounded-full "
        >
          projects
        </div>
        <title>Projects</title>
        <div
          className={
            ` lg:h-[78vh] h-[73vh] flex w-full flex-col border animate-blur-in justify-start items-start gap-4 sm:gap-4 max-md:flex-col
             overflow-auto p-3 sm:p-4 rounded-[24px] scrollbar-none ` +
            `${
              theme.mode === "light"
                ? "border-[#00000056]"
                : "border-[#ffffff24]"
            } `
          }
        >
          {projects.map((project) => (
            <div
              // style={{ backgroundColor: randomColor().color }}
              className={
                "  sm:h-[400px] w-full sm:max-w-[1500px] rounded-[20px]  p-4 border sm:py-6 " +
                `${
                  theme.mode === "light"
                    ? "border-[#00000056]"
                    : "border-[#ffffff24]"
                } `
              }
              key={project.id}
            >
              <h1
                style={{ color: theme.lightText }}
                className=" text-6xl max-md:text-2xl font-[700] "
              >
                {project.title}
              </h1>

              <div className=" mt-3 sm:mt-6  ">
                <div
                  // style={{ color: theme.opText }}
                  className=" text-base max-md:text-[14px] opacity-80  "
                >
                  {/* {project.description} */}
                  <ReactMarkdown
                    children={project.description}
                    remarkPlugins={[remarkGfm]}
                  />
                </div>
                <div
                  style={{ color: theme.lightText }}
                  className=" mt-3 text-sm font-[300] "
                >
                  {project.tags.map((tag) => (
                    <span
                      className="mr-2 px-2 py-1 rounded-[10px] text-[10px] font-[300] "
                      style={{
                        backgroundColor:
                          theme.mode === "light" ? "#0000001a" : "#ffffff1a",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 flex flex-row gap-2 items-center  sm:mt-6  ">
                <Socials
                  key={socials[0].id}
                  data={socials[0]}
                  link={project.link}
                  // invert={true}
                  borderOff={true}
                />
                <a
                  href={project.link}
                  target="_blank"
                  // style={{ color: theme.opText }}
                  className=" hover:text-[#86868683] translate-y-[1px] opacity-70 duration-200 text-sm max-md:text-[12px] font-[400] "
                >
                  {project.link.split("/")[2].split('.')[0]}\
                  {project.link.split("/")[4]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex-row hidden mt-6 max-sm:flex justify-end gap-3  ">
        {socials.map((link) => (
          <Socials key={link.id} data={link} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
