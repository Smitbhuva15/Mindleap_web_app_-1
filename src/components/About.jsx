import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { CgCloseR } from "react-icons/cg";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Link } from 'react-scroll'


function About() {
   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

   const handelVideoPlay = () => {
      setIsVideoPlaying(true);
   }
   const handelCloseVideo = () => {
      setIsVideoPlaying(false);
   }
   return (

      <div 
      className="bg-[#f7f8fc] pb-16 pt-20" id="about">
         <div className="container mx-auto">
            <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">

               <div className=" md:w-1/2 w-full mb-8 md:mb-0">
                  {
                     !isVideoPlaying ? (
                        <div className="relative">
                           <img src="video-thumbnail.webp" alt="video thumbnell" className="w-full md:h-[446px] h-auto rounded-lg object-cover" />
                           <button
                              onClick={handelVideoPlay}
                              className="absolute top-1/2 left-1/2 transfrom-translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer "><FaPlay /></button>
                        </div>
                     ) :
                        (
                           <div>

                           </div>
                        )
                  }
                 
               </div>
               <div className="md:w-1/2 w-full">
               <h2 className='text-4xl font-secondary font-bold mb-4  leading-snug capitalize'>individual consult and therapy</h2>
                    <p className='text-lg mb-12 md:pr-8'>Disto sunt expicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernature aut fugit sed quia,Lorem inpsum is Simple.</p>
                    <button className='bg-primary rounded-md hover:bg-primary/90 py-3.5 px-8 font-medium'>
                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className='flex gap-1 items-center'>
                            <span>Get Started </span>
                            <IoArrowForwardCircleSharp />
                        </Link>
                    </button>
               </div>
            </div>
            
            {
               isVideoPlaying && (
                   <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                   <div className=" relative w-full h-full flex items-center justify-center ">
                    <iframe 
                    width="560"
                     height="315" 
                     src="https://www.youtube.com/embed/EwzWg-Joxq0?si=h7DjXWKRm9FEbQjb?autoplay=1" 
                     title="YouTube video player"  
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                     className="rounded-lg"
                     > </iframe>

                    <button onClick={handelCloseVideo} className="absolute top-4 right-4 text-white text-2xl cursor-pointer ">
                    <CgCloseR />
                  </button>
                    
                  </div>
                  
                     
                  
                   </div>
                  



               )
            }


         </div>
      </div>
   );
}
export default About;