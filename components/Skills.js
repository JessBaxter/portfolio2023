import SectionHeader from "./SectionHeader";

function SkillCard({ title, children, skills }) {
  return (
    <section className="flex flex-col md:flex-row md:px-4 m-auto justify-center max-w-screen-md">
      <article className="w-full p-10 bg-neutral md:rounded-l-md">
        <h2 className="font-bold text-2xl pb-10">{title}</h2>
        <p>{children}</p>
      </article>
      {/* TABLE OF SKILLS */}
      <article className="flex flex-wrap justify-center pt-10 sm:flex-row md:flex-row md:pt-0">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {skills.map(({ skill, skillAssessment }) => {
                // return the JSX from the callback function provided to map
                return (
                  <tr className="hover" key={skill}>
                    <td>{skill}</td>
                    <td>
                      <progress
                        className="progress progress-primary w-20 border-2 border-primary"
                        value={skillAssessment}
                        max="100"></progress>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="container m-auto py-20">
      {/* SKILLS */}
      <SectionHeader title="Skills" />

      {/* FRONTEND */}
      <SkillCard
        title="Frontend Knowledge"
        skills={[
          { skill: "HTML", skillAssessment: "90" },
          { skill: "CSS", skillAssessment: "80" },
          { skill: "JavaScript", skillAssessment: "80" },
          { skill: "Accessibility", skillAssessment: "90" },
          { skill: "Next.js", skillAssessment: "40" },
          { skill: "React", skillAssessment: "40" },
        ]}>
        These are the skills I've either taught myself, or learnt as part of my{" "}
        <span className="font-bold">
          Diploma of Information Technology (Front End/Back End Web Development)
        </span>{" "}
        qualification. The progress bars illustrate a self-assessment of my
        journey towards proficiency in that field.
      </SkillCard>

      <div id="skills-backend" className="pt-20"></div>
      {/* BACKEND */}
      <SkillCard
        title="Backend Knowledge"
        skills={[
          { skill: "Node.js", skillAssessment: "60" },
          { skill: "Express", skillAssessment: "60" },
          { skill: "MySQL", skillAssessment: "70" },
          { skill: "MongoDB", skillAssessment: "70" },
          { skill: "SQLite", skillAssessment: "70" },
          { skill: "Swagger", skillAssessment: "70" },
          { skill: "APIs", skillAssessment: "60" },
        ]}>
        These are the skills I've either taught myself, or learnt as part of my{" "}
        <span className="font-bold">
          Diploma of Information Technology (Front End/Back End Web Development)
        </span>{" "}
        qualification. The progress bars illustrate a self-assessment of my
        journey towards proficiency in that field.
      </SkillCard>

      <div id="skills-desktop" className="pt-20"></div>
      {/* BACKEND */}
      <SkillCard
        title="Desktop Application Knowledge"
        skills={[
          { skill: "Electron", skillAssessment: "50" },
          { skill: "Flutter", skillAssessment: "20" },
        ]}>
        These are the skills I've taught myself, in order to satisfy client
        requirements.
      </SkillCard>

      <div id="skills-education" className="pt-20"></div>
      {/* OTHER/EDUCATION */}
      <SkillCard
        title="Education/Other"
        skills={[
          { skill: "SEO", skillAssessment: "90" },
          { skill: "AWS", skillAssessment: "50" },
          { skill: "CloudFormation", skillAssessment: "30" },
          { skill: "WordPress", skillAssessment: "70" },
          { skill: "IaC", skillAssessment: "70" },
          { skill: "Fedora", skillAssessment: "40" },
          { skill: "Ubuntu", skillAssessment: "40" },
          { skill: "MacOS", skillAssessment: "60" },
        ]}>
        These are the Cloud, DevOps and CMS skills that I've learnt as part of
        my web development studies. My{" "}
        <span className="font-bold">Bachelor of Education</span> qualification
        and subsequent employment as a teacher have also exposed me to other
        applications and environments.
      </SkillCard>
    </section>
  );
}
