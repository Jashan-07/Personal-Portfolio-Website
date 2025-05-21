import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer()
{
    return <>
        {/* Footer  */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 text-white border-x-2 border-x-purple-600 mt-20 border-t-2 border-t-purple-600 md:flex md:flex-row md:justify-between">
            <div className="text-center py-5 px-3">
                <h1 className="mb-5 text-xl font-bold md:text-start lg:text-2xl">Jashan Tandon</h1>
                <p className="text-base lg:text-lg">Building the future of web development</p>
            </div>

            <div className="text-center py-5 px-3">
                <h1 className="mb-5 text-xl font-bold lg:text-2xl">Quick Links</h1>
                <a href="#about" className="text-base lg:text-lg hover:cursor-pointer hover:font-bold inline-block">About</a><br/>
                <a href="#project" className="text-base lg:text-lg mt-2 hover:cursor-pointer hover:font-bold inline-block">Projects</a><br/>
                <a href="#contact" className="text-base lg:text-lg mt-2 hover:cursor-pointer hover:font-bold inline-block">Contact</a>
            </div>

            <div className="text-center py-5 px-3">
                <h1 className="mb-5 text-xl font-bold lg:text-2xl">Connect</h1>
                <span className="flex justify-center gap-3">
                    <a href="https://github.com/Jashan-07" target="_blank">
                        <Github className="cursor-pointer hover:stroke-1 hover:fill-white"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jashan-tandon-287a67205/" target="_blank">
                        <Linkedin className="cursor-pointer hover:stroke-1 hover:fill-white"/>
                    </a>
                    <a href="https://x.com/jashan_tandon" target="_blank">
                        <Twitter className="cursor-pointer hover:stroke-1 hover:fill-white"/>
                    </a>
                </span>
            </div>
        </div>
        {/* Copyright Line */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 border-b-2 border-b-purple-600 border-x-2 border-x-purple-600 px-2">
            {/* <p className="text-center lg:text-lg py-5 text-white">© {new Date().getFullYear()} Jashan Tandon. All rights reserved.</p> */}
            {/* <p className="text-center lg:text-lg py-5 text-white">© {new Date().getFullYear()} Jashan Tandon. All rights reserved.<br/> <span className="block mt-2">Designed and developed with care to deliver modern, user-centric web experiences.</span> */}
            <p className="text-center lg:text-lg py-5 text-white">© {new Date().getFullYear()} Jashan Tandon. All rights reserved.<br/> <span className="block mt-2">Designed and developed with passion and precision to craft modern, meaningful, and user-focused web experiences.</span></p>
        </div>
    </>
}