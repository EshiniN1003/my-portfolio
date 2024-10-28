// @flow strict
import { userData } from "@/data/user-data";
import Image from "next/image";
import GlowCard from "./my-portfoliohelper/glow-card";
import SectionTitle from "./my-portfoliohelper/section-title";

function GitLanguage() {
  return (
    <div id="stats" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="GitHub Languages" />

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <>
          <GlowCard identifier="repos-per-language">
            <Image
              src={`http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${userData.githubUser}&theme=algolia`}
              width={1080}
              height={560}
              alt="github repos-per-language"
              className="rounded-lg lg:h-64 w-full bg-primary-bg"
            />
          </GlowCard>

          <GlowCard identifier="most-commit-language">
            <Image
              src={`http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${userData.githubUser}&theme=algolia`}
              width={1080}
              height={560}
              alt="github most-commit-language"
              className="rounded-lg lg:h-64 w-full bg-primary-bg"
            />
          </GlowCard>
        </>

        
      </div>
    </div>
  );
};

export default GitLanguage;