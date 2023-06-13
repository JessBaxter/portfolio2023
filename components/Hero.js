import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Jess Baxter</h1>
          <p className="py-6">
            Recent full-stack web development graduate, with 18 years'
            experience in education. I'm a committed professional looking to
            bring excellent organisational skills, coupled with the capacity to
            thrive in constantly changing situations, to forward-thinking
            businesses.
          </p>
          <button className="btn btn-primary mr-6">
            <Link href="/#projects" alt="Projects I'm involved with">
              My Projects
            </Link>
          </button>
          <button className="btn btn-secondary">
            <Link href="/#skills" alt="Skills I'm continuing to develop">
              Skills
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
