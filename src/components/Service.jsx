
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
const Content1 = (
    < div 
   
    className="flex flex-col md:flex-row gap-8 mt-8">
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>

            <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Conselling</h3>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur impedit praesentium rerum facilis? Et perspiciatis optio eos labore voluptas molestiae ipsa accusantium perferendis amet, deserunt ipsum voluptatibus, suscipit porro!</p>
            <h4 className='text-xl font-medium text-black mb-3'>Benifites</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dyanamics</li>
                <li>Understanding Relationship Dyanamics</li>
                <li>Understanding Relationship Dyanamics</li>
            </ul>
        </div>
        <div className='md:w-1/2'>
            <img src="service1.webp" className='w-full h-auto rounded-2xl object-cover' alt="" />
        </div>

    </div>
)

const Content2 = (
    <div 
    
    className="flex flex-col md:flex-row gap-8 mt-8">
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>

            <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur impedit praesentium rerum facilis? Et perspiciatis optio eos labore voluptas molestiae ipsa accusantium perferendis amet, deserunt ipsum voluptatibus, suscipit porro!</p>
            <h4 className='text-xl font-medium text-black mb-3'>Benifites</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dyanamics</li>
                <li>Understanding Relationship Dyanamics</li>
                <li>Understanding Relationship Dyanamics</li>
            </ul>
        </div>
        <div className='md:w-1/2'>
            <img src="service2.webp" className='w-full h-auto rounded-2xl object-cover' alt="" />
        </div>

    </div>

)

const Content3 = (
    < div 
    className="flex flex-col md:flex-row gap-8 mt-8">
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>

            <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur impedit praesentium rerum facilis? Et perspiciatis optio eos labore voluptas molestiae ipsa accusantium perferendis amet, deserunt ipsum voluptatibus, suscipit porro!</p>
            <h4 className='text-xl font-medium text-black mb-3'>Benifites</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dyanamics</li>
                <li>Understanding Relationship Dyanamics</li>
                <li>Understanding Relationship Dyanamics</li>
            </ul>
        </div>
        <div className='md:w-1/2'>
            <img src="service3.webp" className='w-full h-auto rounded-2xl object-cover' alt="" />
        </div>

    </div>

)

const Content4 = (
    < div
    className="flex flex-col md:flex-row gap-8 mt-8">
        <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>

            <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consequatur impedit praesentium rerum facilis? Et perspiciatis optio eos labore voluptas molestiae ipsa accusantium perferendis amet, deserunt ipsum voluptatibus, suscipit porro!</p>
            <h4 className='text-xl font-medium text-black mb-3'>Benifites</h4>
            <ul className='list-disc list-inside space-y-3'>
                <li>Understanding Relationship Dyanamics</li>
                <li>Understanding Relationship Dyanamics</li>
                <li>Understanding Relationship Dyanamics</li>
            </ul>
        </div>
        <div className='md:w-1/2'>
            <img src="service4.webp" className='w-full h-auto rounded-2xl object-cover' alt="" />
        </div>

    </div>

)

const Services = () => {
    return (
        <div className="bg-[#f7f8fc]" id='services'>
            <div className="pt-28 px-4 container mx-auto">
                <motion.div 
                 variants={fadeIn('up', 0.3)} 
                 initial="hidden" 
                 whileInView="show"
                 viewport={{ once: false, amount: 0.7 }}
                 className="text-center space-y-5">
                    <h2 className="text-4xl font-bold font-secondary text-heroBg">What Can We Do Together </h2>
                    <p className="md:w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis inventore unde repellendus molestias harum ratione officia corrupti ipsam libero.</p>
                </motion.div>
                {/* services category */}

                <div className='py-12 md:w-4/5 mx-auto '>
                    <Tabs>
                        <TabList 
                        className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
                            <Tab>Couple Conselling</Tab>
                            <Tab>Parenting Skills</Tab>
                            <Tab>Feeling Stuck</Tab>
                            <Tab>Self-Confidence</Tab>
                        </ TabList>

                        <TabPanel >
                            {Content1}
                        </TabPanel>
                        <TabPanel >
                            {Content2}
                        </TabPanel>
                        <TabPanel>
                            {Content3}
                        </TabPanel>
                        <TabPanel >
                            {Content4}
                        </TabPanel>

                        </Tabs>
                    
                </div>


            </div>
        </div>
    );
};

export default Services;