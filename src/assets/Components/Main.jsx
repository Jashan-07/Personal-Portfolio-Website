import About from "./About";
import Skill from "./Skill";
import Tracer from "./Tracer";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Main()
{
    return <>
        {/* About Section  */}
        <section id="about" className="scroll-mt-27">
            <About/>
        </section>

        {/* Skills Section  */}
        <section id="skill" className="scroll-mt-27">
            <Skill/>
        </section>

        {/* Tracer Section  */}
        <section id="tracer" className="scroll-mt-11">
            <Tracer/>
        </section>

        {/* Project Section  */}
        <section id="project" className="scroll-mt-27">
            <Project/>
        </section>

        {/* Call to action */}
        <div className="px-5 lg:px-15">
            <div className="px-2 shadow-lg/20 rounded-md lg:px-10 px-5 mt-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700">
                <h1 className="text-center text-4xl font-semibold text-white tracking-wide"><br/>Continuous Learning</h1>
                <p className="text-center text-xl mt-5 px-10 mb-5 text-white">I am actively contributing to open source softwares and projects on github</p>
                <span className="flex justify-center">
                    <button className="mb-10 mt-2 cursor-pointer text-lg rounded-md p-2 px-5 bg-white hover:opacity-90">
                        <a href="#contact"><p className="text-center font-medium bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent scroll-mt-27">Get in Touch</p></a>
                    </button>
                </span>
            </div>
        </div>

        {/* Contact Section  */}
        <section id="contact" className="scroll-mt-27">
            <Contact/>
        </section>

        {/* Footer Section  */}
        <Footer/>
    </>
}