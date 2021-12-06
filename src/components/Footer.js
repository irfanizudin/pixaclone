import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiPixabay } from "react-icons/si";

const Footer = () => {
    return (
        <div className="w-full bg-gray-500 h-28 flex items-center justify-center text-gray-50">
            <div>
                <div className="flex justify-center ">
                    <a
                        href="http://github.com/irfanizudin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-4"
                    >
                        <BsGithub size={22} />
                    </a>
                    |
                    <a
                        href="https://pixabay.com/api/docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4"
                    >
                        <SiPixabay size={22} />
                    </a>
                </div>
                <p className="text-sm">&copy; 2021 irfanizudin. All Rights Reseved</p>
            </div>
        </div>
    );
};

export default Footer;
