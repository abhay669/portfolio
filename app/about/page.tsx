import Navbar from "../navbar";
import Culture from "./culture";
import Team from "./team";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* hero section */}
      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="max-w-3xl flex-1">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              Not just a team,
              <br />
              but a family.
            </h1>
            <p className="text-xl text-[#7b7b7b]">
              We are a family of passionate creators who love to build amazing
              products
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video
                src="/videos/Team page.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/about-hero-poster.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <Culture />
      <div className="w-full max-w-6xl mx-auto mt-0 mb-0 aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-black">
        <video
          src="/videos/TRIAL .mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <Team />
    </div>
  );
};

export default About;
