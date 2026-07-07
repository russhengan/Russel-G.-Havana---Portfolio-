import aboutImg from "../assets/russ-home.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-bold">
        About
        <span className="text-neutral-400"> Me </span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img 
              className="rounded-2xl w-full max-w-md object-cover shadow-lg hover:shadow-xl transition-shadow duration-300" 
              src={aboutImg} 
              alt="Russel Havana - Portfolio"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x:0}} 
        initial={{opacity:0, x:100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start lg:pl-8">
              <div className="max-w-xl">
                <p className="my-2 text-neutral-300 py-6 leading-relaxed text-justify">
                  {ABOUT_TEXT}
                </p>
                
                {/* Key Highlights */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-700 hover:border-purple-500/50 transition-colors"
                  >
                    <h4 className="text-purple-400 font-semibold mb-2">Education</h4>
                    <p className="text-sm text-neutral-400">
                      BS Information Technology<br/>
                      Pamantasan ng Lungsod ng Valenzuela
                    </p>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-700 hover:border-purple-500/50 transition-colors"
                  >
                    <h4 className="text-purple-400 font-semibold mb-2">Focus</h4>
                    <p className="text-sm text-neutral-400">
                      Software Development<br/>
                      Quality Assurance & Testing
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </div>
  );
};

export default About;
