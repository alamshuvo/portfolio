import Image from "next/image";
import RotatingText from "./RotatingText";

import SocialButton from "./SocialButton";
import Link from "next/link";
import Skills from "./Skils/Skills";
import Articales from "./Articales/Articales";
import Course from "./Course/Course";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div className="  flex justify-center items-center flex-col md:p-1 lg:p-1 p-4">
      <Image
        src={
          "https://res.cloudinary.com/dqugrb0la/image/upload/v1742115966/idbh8kkd80pd3k49mkgr.jpg"
        }
        className="border-5 rounded-full border-[#3c91b2] "
        width={250}
        height={250}
        alt="fff"
      ></Image>
      <div className="mt-3 flex justify-center items-center flex-col">
        <h1 className="font-black text-4xl text-[#334155] ">Iftakhar Alam</h1>
        <RotatingText></RotatingText>
      </div>
      <div className="flex gap-5 mt-5">
        <Link
          href={"https://github.com/alamshuvo"}
          target="_blank"
          className="z-30"
        >
          <svg
            stroke="#3c91b2"
            fill="#3c91b2"
            strokeWidth="0"
            viewBox="0 0 496 512"
            className={`text-4xl lg:text-5xl text-primary border-2 border-[#3c91b2] p-1 rounded-full `}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </Link>
        <Link
          href={
            "https://discord.com/channels/985483595873402910/1218079541243678772"
          }
          target="_blank"
          className="z-30"
        >
          <svg
            stroke="#3c91b2"
            fill="#3c91b2"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-4xl lg:text-5xl text-primary border-2 border-[#3c91b2] p-1 rounded-full"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.317 4.369A19.432 19.432 0 0 0 15.469 3c-.221.375-.418.762-.593 1.158a18.879 18.879 0 0 0-5.752 0 13.483 13.483 0 0 0-.594-1.157A19.432 19.432 0 0 0 3.683 4.37C1.757 7.757.873 11.091 1.14 14.351a19.569 19.569 0 0 0 5.92 3.04c.48-.644.91-1.323 1.285-2.036a12.905 12.905 0 0 1-2.036-.973c.172-.125.34-.256.504-.393a12.936 12.936 0 0 0 11.364 0c.164.137.332.268.504.393a12.905 12.905 0 0 1-2.036.973c.375.713.805 1.392 1.285 2.036a19.569 19.569 0 0 0 5.92-3.04c.3-3.517-.572-6.85-2.498-9.982zM8.29 14.85c-1.245 0-2.268-1.144-2.268-2.547 0-1.404 1.005-2.548 2.268-2.548 1.262 0 2.285 1.144 2.268 2.548 0 1.403-1.006 2.547-2.268 2.547zm7.42 0c-1.245 0-2.268-1.144-2.268-2.547 0-1.404 1.005-2.548 2.268-2.548s2.268 1.144 2.268 2.548c0 1.403-1.006 2.547-2.268 2.547z"></path>
          </svg>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/iftakhar-alam-shuvo/"}
          target="_blank"
          className="z-30"
        >
          <svg
            stroke="#3c91b2"
            fill="#3c91b2"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-4xl lg:text-5xl text-primary border-2 border-[#3c91b2] p-1 rounded-full"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.93 19h-2.82v-10h2.82v10zm-1.41-11.28c-.91 0-1.65-.74-1.65-1.65s.74-1.65 1.65-1.65 1.65.74 1.65 1.65-.74 1.65-1.65 1.65zm13.34 11.28h-2.82v-5.43c0-1.3-.02-2.98-1.81-2.98-1.81 0-2.08 1.42-2.08 2.89v5.52h-2.82v-10h2.71v1.37h.04c.38-.72 1.31-1.48 2.7-1.48 2.89 0 3.42 1.9 3.42 4.37v5.73z"></path>
          </svg>
        </Link>

        <Link
          href={"https://wa.me/+8801980640702"}
          target="_blank"
          className="z-30"
        >
          <svg
            stroke="#3c91b2"
            fill="#3c91b2"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="text-4xl lg:text-5xl text-primary border-2 border-[#3c91b2] p-1 rounded-full"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.003 1.999c-5.524 0-10.002 4.478-10.002 9.997 0 1.759.467 3.46 1.356 4.943l-1.439 5.256 5.387-1.41c1.432.781 3.048 1.192 4.699 1.192h.002c5.524 0 10.002-4.478 10.002-9.997 0-2.667-1.061-5.169-2.986-7.048-1.925-1.88-4.479-2.919-7.019-2.919zm.002 1.998c4.446 0 8.004 3.558 8.004 7.999 0 4.442-3.558 8.001-8.002 8.001h-.002c-1.485 0-2.932-.384-4.201-1.116l-.301-.173-3.199.835.855-3.124-.198-.316c-.803-1.282-1.226-2.77-1.226-4.107 0-4.441 3.558-7.999 8.002-7.999zm-2.002 3.998c-.263 0-.531.003-.796.01-.358.01-.766.126-1.046.397-.251.243-.427.636-.487.973-.108.584-.221 1.165-.308 1.749-.092.629-.175 1.259-.239 1.89-.027.27-.051.541-.065.813-.008.16.005.327.059.48.122.342.487.537.834.652.399.129.811.211 1.221.298.187.04.369.097.54.188.06.032.114.078.155.135.192.265.373.537.561.803.083.116.188.228.323.275.273.095.564.073.846.073.431.001.86.018 1.288-.021.288-.026.591-.1.797-.323.27-.28.537-.566.799-.854.14-.153.283-.305.394-.482.104-.167.126-.362.126-.555-.002-.152-.02-.308-.053-.457-.082-.348-.267-.646-.44-.948-.072-.127-.165-.243-.247-.364-.077-.116-.168-.218-.26-.322-.221-.248-.461-.472-.691-.707-.229-.234-.458-.468-.686-.702-.229-.235-.445-.475-.708-.671-.067-.05-.148-.091-.233-.084-.207.017-.406.081-.6.157-.413.163-.821.348-1.233.52-.087.035-.165.093-.236.153-.188.163-.279.403-.348.636-.072.247-.137.496-.199.746-.058.229-.103.46-.14.693-.038.245-.065.49-.077.736-.014.303.028.607.06.909.02.196.04.392.06.589.007.066.01.134-.01.198-.086.288-.336.493-.576.655-.272.183-.579.303-.88.407-.153.051-.319.058-.468-.019-.214-.108-.438-.193-.657-.296-.208-.097-.423-.183-.624-.293-.177-.095-.343-.223-.493-.368-.226-.214-.451-.429-.676-.644-.084-.08-.159-.166-.247-.237-.07-.058-.16-.104-.252-.105-.177-.001-.345.06-.505.124-.323.126-.647.253-.971.379z"></path>
          </svg>
        </Link>
      </div>
      {/* details text */}
      <div className="lg:mt-16 mt-10">
        <p className="text-xl text-[#535353] text-justify">
          Im Iftakhar, a Full Stack Developer with experience in front-end
          development using React and Next.js and back-end development with
          Node.js and Express. I enjoy working in a team, solving problems, and
          constantly learning new technologies to stay up to date. My goal is to
          build a strong foundation in full-stack development and contribute to
          meaningful projects.
        </p>

        <div className="flex justify-center items-center z-30 lg:mt-16 mt-10">
          <SocialButton></SocialButton>
        </div>
        <div className="lg:mt-16 mt-10">
          <p className="text-4xl font-bold text-center my-5 text-[#334155] relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-[#3c91b2] after:transition-all after:duration-500 hover:after:w-full">
            Skills
          </p>

          <Skills></Skills>
        </div>
      </div>

      {/* projects */}
      <div className="lg:mt-16 mt-10">
        <Projects></Projects>
      </div>
      {/* article */}
      <div className="lg:mt-16 mt-10">
        <Articales></Articales>
      </div>
      {/* Course */}
      <div className="lg:mt-16 mt-10">
        <Course></Course>
      </div>
      {/* Experience */}
      <div className="lg:mt-16 mt-10">
        <Experience></Experience>
      </div>
      {/* git hub contribution */}
      <div className="lg:mt-16 mt-10">
        <p className="text-4xl font-bold text-center my-5 text-[#334155] relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-[#3c91b2] after:transition-all after:duration-500 hover:after:w-full">
          Github Contribution
        </p>
        <div className="border-2 p-4 border-[#3c91b2] rounded-lg">
          <img
            src="https://ghchart.rshah.org/alamshuvo"
            alt="GitHub Contributions"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
