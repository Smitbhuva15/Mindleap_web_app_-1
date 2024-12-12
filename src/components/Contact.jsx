import { useRef } from "react";
import { useState } from "react";
import { FaEnvelope, FaGlobe, FaUser } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [showModel, setShowModel] = useState(false);
    const nameElement = useRef();
    const countryElement = useRef();
    const emailElement = useRef();
    const phoneElement = useRef();
    const messageElement = useRef();
  const [isSentData,setIsSentData]=useState(false);

   const handelClose=()=>{
    setIsSentData(false);

   }
   
    const handelSubmit = (e) => {
        e.preventDefault();
        
        let currName, currCountry,currEmail,currPhone,currMessage;
        
        let data = {
            currName: nameElement.current.value,
            currCountry: countryElement.current.value,
            currEmail: emailElement.current.value,
            currPhone: phoneElement.current.value,
            currMessage: messageElement.current.value,
        };
        if (!data.currName ||!data.currEmail||!data.currPhone||!data.currMessage||!data.currCountry) {
            alert("All Data Enter Correctly!!!! ");
        }
        setIsSentData(true);
      
    }

    return (
        <div className="bg-heroBg flex items-center justify-center py-28 px-8 " id="contact">
            <div className=" container mx-auto">
                <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 text-white">
                    {/* left side */}
                    <div
                    className="space-y-8">
                        <h2 className="text-4xl font-bold font-serifmb-4 text-white">Make an appointment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                            <div className="flex items-start gap-4 ">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaUser className="text-primary " />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-medium">
                                        24 Hours Services
                                    </h3>
                                    <p>Lorem ipsum dolor sit nesciunt amet consectetur, elit!</p>


                                </div>
                            </div>
                            <div className="flex items-start gap-4 ">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaEnvelope className="text-primary " />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-medium">
                                        Expert Therapist
                                    </h3>
                                    <p>Incidunt voluptatem nulla neque impedit explicabo perspiciatis quia.</p>


                                </div>
                            </div>
                            <div className="flex items-start gap-4 ">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <MdAddCall className="text-primary " />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-medium">
                                        High Quality
                                    </h3>
                                    <p> Deleniti nesciunt nisi non ullam. Vitae, eveniet dicta. Id..</p>


                                </div>
                            </div>
                            <div className="flex items-start gap-4 ">
                                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                                    <FaGlobe className="text-primary " />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-medium">
                                        Trusted Clinic
                                    </h3>
                                    <p> Quidem doloremque temporibus amet vel consequatur!  </p>


                                </div>
                            </div>

                        </div>
                    </div>

                    {/* right side */}
                    < div 
                    className="space-y-8 p-8 bg-white shadow-xl rounded-md">
                        <h3 className="text-2xl font-bold mb-4 text-black">Book Appointment</h3>
                        <form action="space-y-8" onSubmit={handelSubmit}>
                            <div className="flex flex-col gap-4 sm:flex-row mb-4">
                                <input type="text" placeholder="Name" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow text-black" ref={nameElement} />
                                <input type="email" placeholder="Email" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow text-black" ref={emailElement} />
                            </div>
                            <div className="flex flex-col gap-4 mb-4 sm:flex-row">
                                <input type="tel" placeholder="Contact No." className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow text-black" ref={phoneElement} />
                                <input type="text" placeholder="Country" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow text-black" ref={countryElement} />
                            </div>

                            <textarea placeholder="write your message "
                                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow resize-none mb-4 text-black" rows="5" ref={messageElement}></textarea>

                            <button type="submit"
                                className="w-full p-3 bg-primary text-white  rounded-md hover:bg-primary/90"
                            >Send Message</button>
                        </form>
                    </div>
                    {
                       isSentData && (
                        <>
                          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-black">
                            <div className="bg-white p-8 rounded-md shadow-lg">
                                <h2 className="text-2xl font-bold mb-4">Thank You!!</h2>
                                <p>Thank you,for submiting your query!</p>
                                <button
                                onClick={handelClose}
                                className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
                                Close
                                </button>
                            </div>
                          </div>
                       
                        </>
                      
                       )

                       
                    }

                </div>
            </div>
        </div>
    );

};

export default Contact;