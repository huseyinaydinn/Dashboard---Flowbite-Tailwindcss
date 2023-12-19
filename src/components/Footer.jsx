import { FaFacebookF, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="w-full bg-white text-gray-900 rounded-2xl mt-5 py-12 px-8 flex flex-row items-center justify-between max-md:justify-center max-md:flex-col gap-6">
            <p>© 2021 Themesberg, LLC. All rights reserved.</p>
            {/* footer logos */}
            <div className="flex flex-row flex-nowrap gap-8">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaDribbble /></a>
            </div>
        </div>
    )
}

export default Footer