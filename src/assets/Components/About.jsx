// import { Github, Linkedin, Twitter } from "lucide-react";

export default function About()
{
    const skills = [
            {name: "Responsive Web Design", description: "I design websites that look and work great on all devices by using flexible layouts, media queries, and modern CSS techniques."},
            {name: "UI/UX Implementation", description: "I create clean and easy-to-use interfaces that make websites more user-friendly, visually appealing, and consistent across pages."},
            {name: "Component Based Development", description: "I build reusable components to keep code neat and efficient, making websites easier to manage and update especially using React applications."},
            // {name: "API Integration", description: "I connect websites to external data using APIs, allowing real-time updates and making web apps more dynamic and interactive."}
        ]

    return <>
        {/* About Hero Section */}
        <h1 className="text-center mt-22 text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Hi,I am <br/> Jashan </h1>
        <p  className="text-center mt-2 text-base lg:text-lg p-8 mb-11 lg:px-13">Hey, I'm a frontend developer focused on  building responsive, user-friendly websites that blend modern design with seamless, engaging user experiences.</p>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16 z-0">
          <div className="absolute left-6 right-6 md:left-8 md:right-8 lg:left-15 lg:right-15 inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img src="/My_Profile_Image.png" alt="Profile Image" className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48"/>
        </div>

        {/* Professional Journey */}
        <div className="px-5 lg:px-15 mb-16">
            <div className="px-5 shadow-lg/20 rounded-md lg:px-10">
                <h1 className="text-4xl font-bold text-center mb-5 text-gray-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 bg-clip-text text-transparent"><br/>Professional Journey</h1>
                <p className="text-center text-base lg:text-lg mb-6 lg:px-9">I'm a passionate frontend developer focused on creating clean, responsive, and user-friendly web experiences. I enjoy turning ideas into reality with modern design practices and attention to detail.</p>
                <p className="text-center text-base lg:text-lg mb-5 lg:px-10">My journey started with a love for web design, which soon grew into a passion for frontend development. I keep learning to create better, more engaging digital experiences.</p><br/>
            </div>
        </div>

        {/* My Core Frontend Skills heading and description */}
        <h1 className="text-4xl font-bold text-center text-indigo-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 bg-clip-text text-transparent px-5">Core Frontend Skills</h1>
        <p className="mb-10 px-5 mt-5 text-xl text-gray-600 font-semibold text-center">Focused on building responsive, user-friendly, and maintainable web applications using modern frontend technologies below.</p>

        {/* Core Frontend Skills section data */}
        {skills.map((skill, index) => (
            <div key={index} className="px-5 lg:px-15">
                <div className="px-2 shadow-lg/20 rounded-md lg:px-10 mb-10">
                    <h1 className={`text-center text-3xl font-semibold mb-5 ${skill.name == "Responsive Web Design" ? "text-purple-600" : skill.name == "UI/UX Implementation" ? "text-teal-600" : skill.name == "Component Based Development" ? "text-indigo-600" : ""}`}><br/>{skill.name}</h1>
                    <p className="px-5 text-center text-base lg:text-lg lg:px-9 mb-5">{skill.description}</p><br/>
                </div>
            </div>
        ))}

        {/* Professional Interest Beyond Coding heading and description */}
        <h1 className="py-7 text-center text-4xl font-bold text-gray-800 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">Beyond Coding</h1>
        <p className="text-center px-5 text-xl font-semibold text-gray-600">Passionate about crafting intuitive interfaces, learning continuously, and solving problems creatively through user-centered design.</p>
            
        {/* Professional Interest Beyond Coding points */}
        <div className="px-5 lg:px-15">
            <div className="px-2 shadow-lg/20 rounded-md lg:px-10 py-1 mt-10">

                <h2 className="mt-10 text-center text-3xl font-semibold text-indigo-600">Web Design & Visual Appeal</h2>
                <p className="mt-5 mb-5 px-5 text-center lg:text-lg lg:px-9">I enjoy exploring modern UI/UX trends and design systems to craft interfaces that are visually appealing, intuitive, and accessible for all users.</p><br/>

                <h2 className="text-center text-3xl font-semibold text-teal-600">Continuous Learning</h2>
                <p className="mt-5 mb-5 px-5 text-center lg:text-lg lg:px-9">I’m always curious to explore new frontend tools, design trends, and technologies to stay updated in the fast-changing tech world.</p><br/>

                <h2 className="text-center text-3xl font-semibold text-purple-600">User Behavior & Interaction</h2>
                <p className="mt-5 mb-5 px-5 text-center lg:text-lg lg:px-9">Understanding how users interact with interfaces helps me improve usability, navigation, and design decisions based on real behavior and feedback.</p><br/>

                <h2 className="text-center text-3xl font-semibold text-indigo-600">Creativity in Problem Solving</h2>
                <p className="mt-5 mb-5 px-5 text-center lg:text-lg lg:px-9">I enjoy combining creativity with logic thinking outside the box to build innovative and effective solutions to frontend challenges.</p><br/>
            </div>
        </div>
    </>
}