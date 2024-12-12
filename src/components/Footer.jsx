
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarked, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-12 bg-gary-100 px-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
                <div className="space-y-6 mr-14">
                    <div className="flex items-center space-x-2">
                        <img src="footer-logo.svg" alt="w-23 h-auto" />
                    </div>
                    <p className="text-para mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta placeat quibusdam ex aperiam quasi aliquam accusantium voluptate dignissimos!</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary/90 hover:text-white ">
                        <FaFacebook /></a>
                        <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary/90 hover:text-white ">
                        <FaInstagram /></a>
                        <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary/90 hover:text-white ">
                        <FaTwitter /></a>
                        <a href="#" className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary/90 hover:text-white ">
                        <FaLinkedin /></a>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold mb-4">Quick Links </h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="hover:underline text-gray-700">Home</a></li>
                        
                        
                            <li><a href="#services" className="hover:underline text-gray-700">Services</a></li>
                        
                        
                            <li><a href="#about" className="hover:underline text-gray-700">About</a></li>
                        
                        
                            <li><a href="#contact" className="hover:underline text-gray-700">Contact us</a></li>
                        </ul>
                   
                </div>

                <div className="space-y-2 ">
                    <h3 className="text-xl font-semibold mb-4">Support </h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:underline text-gray-700">FAQ</a></li>
                        
                        
                            <li><a href="#" className="hover:underline text-gray-700">Terms of services</a></li>
                        
                        
                            <li><a href="#" className="hover:underline text-gray-700">Privacy policy</a></li>
                        
                        
                            <li><a href="#" className="hover:underline text-gray-700">Support center</a></li>
                        </ul>
                   
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-semibold mb-4">Contact infp </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <FaMapMarkedAlt  className="text-primary"/>
                                <p className="text-gray-700">12,Mount cont,Banglore,India</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt  className="text-primary"/>
                                <p className="text-gray-700">+123 536 8732</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope  className="text-primary"/>
                                <p className="text-gray-700">info@mindleap.com</p>
                            </li>
                        </ul>
                       
                   
                </div>

            </div>
        </div>
    );
};
export default Footer;