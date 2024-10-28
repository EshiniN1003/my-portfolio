import Contributions from "/my-portfoliocomponents/contributions";
import HeroSection from "/my-portfoliocomponents/hero-section";
import GitLanguage from "/my-portfoliocomponents/language";
import Projects from "/my-portfoliocomponents/projects";
import Rank from "/my-portfoliocomponents/rank";
import GitStats from "/my-portfoliocomponents/stats";


const profile = {
  name: "Eshini Nethmini",
  bio: "Passionate IT undergraduate at the University of Sri Jayawardenepura.Professional & Ambitious. I love creating websites and developing engaging front-end experiences",
  avatar_url: "https://avatars.githubusercontent.com/u/161203306?v=4", 
  location: "Homagama, Sri Lanka",
  email: "eshini.nethmini@gmail.com",
  public_repos: 3,
};


const projects = {
  items: [
    {
      name: "Personal Portfolio",
      description: "A personal portfolio showcasing my skills, projects, and journey as a software developer.",
      html_url: "https://github.com/FHSS-USJ/assignment-01-EshiniN1003.git",
    },
    {
      name: "Movie Web",
      description: "A web application that allows users to explore movie information, reviews, and ratings.",
      html_url: "https://github.com/FHSS-USJ/assignment-02-EshiniN1003.git",
    },
  ],
};

export default function Home() {
  return (
    <>
      <HeroSection profile={profile} />
      <GitStats profile={profile} />
      <Projects projects={projects.items} profile={profile} />
      <GitLanguage />
      <Rank />
      <Contributions />
    </>
  );
}


export function generateMetadata() {
  return {
    title: `GitHub Profile of ${profile.name}`,
    description: profile.bio,
  };
}
