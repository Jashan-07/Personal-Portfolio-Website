import { ExternalLink } from "lucide-react"

export default function Project()
{
    // ADD PROJECT OBJECTS HERE 
    const projects = [
        {id: 1, title: "My Portfolio Website", description: "A modern portfolio website builds with React and Tailwind CSS.", link:"https://personal-portfolio-website-drab-tau.vercel.app/", technologies: ["HTML", "CSS", "React", "Tailwind CSS"]}
    ]

    return <>
        {/* My Projects heading and description */}
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">My Projects</h1>
        <p className="text-center px-5 mt-5 text-xl text-gray-600 font-semibold">A collection of projects I’ve built to demonstrate my skills, creativity, and passion.</p>

        {/* Project Includes */}
        {projects.map((project, index) => (
        <div key={index} className="px-5 mt-10">
            <div className="group px-5 shadow-lg/20 rounded-md py-6 hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-50">
                <p className="text-2xl font-semibold text-gray-600 mb-5 group-hover:text-gray-700">{project.title}</p>
                <p className="text-lg mb-5">{project.description}</p>
                <div className="text-gray-600 flex flex-row flex-wrap gap-4 mb-5">
                    {project.technologies.map((projecttechnologies, techindex) => (
                        <p key={techindex} className="bg-indigo-100 rounded-full px-3 py-2 font-medium text-indigo-800">{projecttechnologies}</p>
                    ))}
                </div>
                <a href={project.link} target="_blank" className="text-lg text-indigo-600 cursor-pointer hover:text-indigo-800 transition-all duration-200 flex flex-row items-center hover:font-semibold">View Project
                    <ExternalLink className="ml-2 w-4 h-4"/>
                </a>
            </div>
        </div>
        ))}
    </>
}