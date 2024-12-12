
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
import { Link } from 'react-scroll'


const Hero = () => {
    return (

        <section className="bg-heroBg text-white flex items-center pt-28 md:h-screen " id="home">
            <div className="container mx-auto flex flex-row md:flex-row items-center  p-8 overflow-y-hidden gap-12 h-full">
                <motion.div
        variants={fadeIn('down', 0.2)} // Applying the fadeIn variant with params
        initial="hidden" 
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-1/2"
      >
                    <h1 className='text-sm font-secondary font-bold mb-4 md:w-3/5 leading-snug sm:text-xl md:text-4xl '>Start Your Journey to Mental Wellness</h1>
                    <p className='text-xxs mb-12 md:pr-8 md:text-lg'>We lower our stress levels, We got to know our pain, We connect better ,We improve our focus , and we,re kinder to ourselves. Let us Walk you through thr basics in our new mindful guide on how to meditate.</p>
                    <button className='bg-primary rounded-md hover:bg-primary/90 py-2 px-4 text-xxs sm:text-lg    font-medium sm:py-2 sm:px-4 md:py-3.5 md:px-8'>
                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}  className='flex gap-1 items-center'>
                            <span>Get Started </span>
                            <IoArrowForwardCircleSharp />
                        </Link>
                    </button>
                </motion.div>

                <motion.div 
                 variants={fadeIn('left', 0.2)}
                 initial="hidden" 
                 whileInView="show"
                 viewport={{ once: false, amount: 0.7 }}
                className="md:w-1/2 h-full">
                    <img src="hero.webp" alt="hero image" className='w-full object-cover' />
                    </motion.div>
            </div>
        </section>
    );

};

export default Hero;