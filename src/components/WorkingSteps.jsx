import { TbCircleDashedNumber1 } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

 const WorkingSteps=()=>{
    return(
 <div className="relative bg-cover bg-center py-12 bg-working-img">
  <div className="bg-heroBg  absolute inset-0 bg-opacity-85">

  </div>
  <div 
 
  className="relative container mx-auto px-4 py-20">
    <div className="text-white  text-center mb-20">
   <h2 className="text-4xl font-bold font-secondary mb-4">How It Works</h2>
   <p className="text-lg md:w-1/2 w-full mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti illum ut perferendis, facilis odit sequi dolorum recusandae, Nihil ipsa animi.</p>
    </div>
    
    <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
        <div className=" relative bg-white text-center rounded-lg p-6 flex-1">
   <h3 className="text-lg font-medium mt-2 ">Fill a From</h3>
   <p className="my-2">step 1 is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum voluptatem quo.</p>
        </div>

        <div className="relative bg-white text-center rounded-lg p-6 flex-1">
   
   <h3 className="text-lg font-medium mt-2">Get Matched</h3>
   <p className="my-2">step 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem adipisci assumenda molestias.</p>
        </div>
        <div className="relative bg-white text-center rounded-lg p-6 flex-1">
 
   <h3 className="text-lg font-medium mt-2">Scheduale</h3>
   <p className="my-2">step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita debitis non.</p>
        </div>
    </div>

  </div>
 </div>
    );
 };
 export default WorkingSteps;