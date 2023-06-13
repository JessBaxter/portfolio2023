// TODO: PROJECTS github repos
// TODO: PROJECTS headings mouseover adds a # for linking (click = copy url to clipboard)

import { useTheme } from "next-themes";
// import Image from "next/image";

// Imported images for next.js auto-optimisation
import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

// Reusable Project component
function Project({ imageSrc, title, description, techLinks, repoLink }) {
  return (
    <div className="flex flex-col bg-neutral mx-3 mb-10 sm:max-w-screen-sm md:max-w-xs rounded-md drop-shadow-md">
      <div className="flex flex-col">
        <img
          src={imageSrc}
          alt={`${title} screenshot`}
          width={1072}
          height={598}
          className="mb-4 drop-shadow-lg rounded-md"
        />
        <h3 className="text-2xl font-semibold p-4">{title}</h3>
      </div>
      <p className="p-4">{description}</p>
      {techLinks ? (
        <div className="p-4">
          <ul className="flex flex-wrap flex-row">
            {techLinks.map(({ name, url }) => (
              <li
                key={name}
                className="text-white border-2 border-primary-focus bg-primary rounded px-1 mb-2 mr-2 hover:bg-primary-focus hover:underline">
                <a href={url} alt={`${name} website`}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
      {/* Conditionally render the link if a repo is available */}
      {repoLink ? (
        <a href={repoLink} alt={`Github repo for ${title}`}>
          <span className="flex flex-row p-4">
            View the repo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="ml-2 mt-1">
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
              />
            </svg>
          </span>
        </a>
      ) : (
        <span className="italic flex flex-row p-4">Coming soon...</span>
      )}
    </div>
  );
}

export default function Projects() {
  const { theme, setTheme } = useTheme();

  // Defer rendering of theme-dependent components until after mount
  // Fix for: "Warning: Prop `className` did not match. Server: ... Client: ..."
  const [hasMounted, setHasMounted] = useState(false);

  // After mount
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section id="projects" className="container m-auto py-20">
      {/* COMPLETED PROJECTS */}
      <SectionHeader title='"Completed" Projects'>
        There are always improvements to be made, but these are the projects
        that are up and running.
      </SectionHeader>

      {/* CONTENT */}
      <section className="flex flex-wrap justify-center sm:flex-row">
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/jess-baxter-portfolio.png"
          title="My Portfolio"
          description="This is where I learn new frameworks for other projects. The current version is built using Next.js because I quite like how it handles some of the more finicky aspects of React."
          techLinks={[
            { name: "Next.JS", url: "https://nextjs.org/" },
            { name: "TailwindCSS", url: "https://tailwindcss.com/" },
            { name: "DaisyUI", url: "https://daisyui.com/" }
            // add more as needed
          ]}
          repoLink="https://github.com/JessBaxter/portfolio/"
        />
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/climate-api-using-swagger.png"
          title="Climate API"
          description="Built for a student project. The focus was on meeting specific
          business requirements, providing adequate API documentation,
          securing endpoints, and handling a reasonably-sized dataset with a
          NoSQL solution."
          techLinks={[
            { name: "Node.JS", url: "https://nodejs.org/en" },
            { name: "MongoDB", url: "https://www.mongodb.com/" },
            { name: "Swagger", url: "https://www.mongodb.com/" }
          ]}
        />
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/gym-website-student-project.jpg"
          title="Gym Website"
          description="Built for a student project. This was my very first foray into
          React. The focus was on using a CSS framework, handling XML
          documents, securely handling logins and access roles, and meeting
          numerous business requirements."
          techLinks={[
            { name: "node.js", url: "https://nodejs.org/en" },
            { name: "React", url: "https://react.dev/" },
            { name: "SQLite", url: "https://www.sqlite.org/index.html" }
          ]}
        />
      </section>

      {/* CURRENT PROJECTS */}
      <div id="projects-current" className="pt-10"></div>
      <SectionHeader title="What I'm working on now">
        Client projects always take priority, but in my downtime, I'm constantly
        tinkering away and learning something new.
      </SectionHeader>

      {/* CONTENT */}
      <section className="flex flex-wrap justify-center sm:flex-row">
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/website-redesign-for-client.jpg"
          title="Client Website Redesign"
          description="This project involves turning a single-page website into a fullstack
          application with database integration. The site is being entirely
          redesigned in order remedy the accessibility issues present in the
          old design. It will also be optimised for SEO."
          techLinks={[
            { name: "Node.js", url: "https://nodejs.org/en" },
            { name: "MySQL", url: "https://www.mysql.com/" },
            { name: "Next.JS", url: "https://nextjs.org/" }
          ]}
        />
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/twitch-chatbot.png"
          title="Twitch chatbot"
          description="The goal is to increase the level of interactivity for Twitch stream
          viewers, by allowing them to use chat commands, as well as Twitch's
          'channel points' loyalty system, to have meaningful affects on the
          broadcast they're watching."
          techLinks={[
            { name: "node.js", url: "https://nodejs.org/en" },
            { name: "tmi.js", url: "https://tmijs.com/" },
            {
              name: "OBSWebSocket",
              url: "https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md"
            },
            { name: "Twitch API", url: "https://dev.twitch.tv/docs/api/" }
          ]}
          repoLink="https://github.com/JessBaxter/bsquared"
        />
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/tech-for-seniors.jpg"
          title="'Tech for Seniors' Project"
          description="With how fast technology changes, it can be hard to keep up with it
          all, especially when you're busy getting older. The goal of this
          project is to use my skills as a qualified teacher to produce
          educational materials, based on the principles of teaching and
          learning, to make it easier for the elderly to keep in touch with
          their loved ones."
        />
      </section>

      {/* FUTURE PROJECTS */}
      <div id="projects-future" className="pt-10"></div>
      <SectionHeader title="What I'd love to work on next">
        It might be the chance to use a new tech, or it's just something I think
        is nifty. These projects are definitely on my to do list.
      </SectionHeader>

      {/* CONTENT */}
      <section className="flex flex-wrap justify-center sm:flex-row">
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/twitch-chatbot.png"
          title="Twitch chatbot AI integration"
          description="Presently, all of the chatbot's text-based interactions need to be
          manually provided by the bot owner. I plan to learn more about
          training the bot with a personality-based learning set that will
          allow the bot owner to customise their own chatbot to suit their
          brand."
          techLinks={[
            { name: "python", url: "https://www.python.org/" },
            { name: "openai", url: "https://pypi.org/project/openai/" },
            { name: "gradio", url: "https://pypi.org/project/gradio/" },
            {
              name: "Hugging Face",
              url: "https://huggingface.co/docs/transformers/index"
            }
          ]}
        />
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/chromium-browser-extension.png"
          title="Browser Extension"
          description="Sometimes I find the time to play an ARPG or MMORPG. Such games tend
          to require collecting various items, such as pieces of armour and
          weapons. I'd like to create a chromium extension that will allow me
          to keep track of which items I've collected."
          techLinks={[
            { name: "JavaScript", url: "https://www.javascript.com/" }
          ]}
        />
        {/* PROJECT */}
        <Project
          imageSrc="/images/projects/photography-catalogue.jpg"
          title="Photographer's Catalogue"
          description="My family is really into photography, but (more importantly) they're
          also into keeping nearly every photo they take. This has resulted in
          tens of thousands of photos, many of which are almost identical
          copies of others. I'd like to build a solution for identifying
          duplicate and near-duplicate images so they can be properly
          organised."
          techLinks={[
            { name: "python", url: "https://www.python.org/" },
            { name: "ImageHash", url: "https://pypi.org/project/ImageHash/" }
          ]}
        />
      </section>
    </section>
  );
}
