
import { BsChatQuote } from "react-icons/bs";
import review1 from '/review1.webp';
import review2 from '/review2.webp';
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";


const testimonials = [
    {
        name: 'Jane Doe',
        location: 'New York, NY',
        review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
        image: review1,
        id: 1,
    },
    {
        name: 'John Smith',
        location: 'Los Angeles, CA',
        review: 'I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.',
        image: review2,
        id: 2,

    },
]

const Testimonial = () => {
    return (
        <div className="bg-[#f7f8fc] py-12">
            <div
             className="container mx-auto px-8 " id="testimonial">
                <motion.div 
                 variants={fadeIn('down', 0.2)} 
                 initial="hidden" 
                 whileInView="show"
                 viewport={{ once: false, amount: 0.7 }}
                 className="text-center mb-12 ">
                    <h2 className="text-4xl font-bold font-secondary mb-3">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg mb-12 md:w-1/2 mx-auto ">Here from some of our satisfied clients about how our services have positively impacted their lives and well-begin.</p>
                </motion.div>
                <div className="flex flex-col md:flex-row md:gap-12 gap-8 md:w-4/5 mx-auto">
                    {
                        testimonials.map((item) => (
                            <div className="relative bg-white rounded-lg p-6 flex-1" key={item.id}>
                                <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                                    <BsChatQuote className="text-primary size-12" />

                                </div>
                                <div className="flex flex-col space-y-3 mb-4">
                                <p className="text-lg mb-2">{item.review}</p>
                                <div className="flex gap-1">
                                    <img src={item.image} alt="reviewe image" className="size-16 rounded-full object-cover mr-4" />
                                   <div>
                                   <p className="font-semibold" >{item.name}</p>
                                   <p className="text-gray-600">{item.location}</p>
                                   </div>
                                    </div>
                                    </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );

};

export default Testimonial;