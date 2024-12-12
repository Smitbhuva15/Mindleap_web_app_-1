import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
import { Link } from 'react-scroll'


const packages = [
    {
        id: 1,
        name: 'Bronze Package',
        price: '$99',
        description: 'Ideal for individuals or small businesses looking to get started with mental wellness.',
        features: [
            'Access to basic wellness resources',
            'Weekly mental wellness tips',
            'Community support group access',
        ],
    },
    {
        id: 2,
        name: 'Silver Package',
        price: '$199',
        description: 'A great choice for growing businesses with additional features and support for mental wellness.',
        features: [
            'All Bronze Package features',
            'Monthly guided meditation sessions',
            'Personalized wellness plan',
            'Access to expert webinars',
        ],
    },
    {
        id: 3,
        name: 'Gold Package',
        price: '$299',
        description: 'Perfect for larger businesses needing advanced mental wellness features and premium support.',
        features: [
            'All Silver Package features',
            'Weekly one-on-one coaching sessions',
            'Advanced mental wellness tracking tools',
            '24/7 access to mental wellness experts',
        ],
    },
]

const Pricing = () => {
    const handelScrollToContact=()=>{
        const targetElement =document.getElementById('contact');
        if(targetElement){
            window.scrollTo(
                {
                    top: targetElement.offsetTop,
                    behavior:'smooth',
                }
            )
        }
    }
    return (
        <div className="bg-[#f7f8fc] pt-32" id="pricing">
            <div
            
             className="container mx-auto px-8 ">
                <motion.div
                 variants={fadeIn('up', 0.2)} 
                 initial="hidden" 
                 whileInView="show"
                 viewport={{ once: false, amount: 0.7 }}
                  className="text-center mb-12 ">
                    <h2 className="text-4xl font-bold font-secondary mb-3">
                        Perfect for small & large Brands
                    </h2>
                    <p className="text-lg mb-12 md:w-2/3 mx-auto ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate deserunt id molestiae vel at asperiores quod reprehenderit minima, officia, hic cupiditate, quis ut tenetur!</p>
                </motion.div>

                {/* packeges */}
                <div className="flex flex-col md:flex-row md:5/6 gap-8 pb-12">

                    {
                        packages.map((item) => (
                            <div key={item.id} className="bg-white p-6 flex-1 shadow-lg rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
                                <hr className=" bg-primary border w-24 border-primary "/>
                                <p className="text-3xl font-bold mb-4">{item.price} <span className="text-lg font-normal">/mo</span></p>
                                <p className="text-lg mb-4">{item.description}</p>
                                <ul className="list-disc list-inside space-y-2 mb-6">
                                    {
                                       item.features.map((feature,inx)=>(
                                        <li key={inx}>{feature}</li>
                                       )) 
                                    }
                                </ul>
                                <button className='bg-primary rounded-md hover:bg-primary/90 py-3.5 px-8 font-medium'
                                onClick={handelScrollToContact}>
                        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className='flex gap-1 items-center'>
                            <span>Get Started </span>
                            <IoArrowForwardCircleSharp />
                        </Link>
                    </button>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};
export default Pricing;