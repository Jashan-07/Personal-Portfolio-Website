import { useState } from "react"

export default function Skill()
{
    const [togglebtn, settogglebtn]=useState(false);

    const myskills = [
        {techname: "Responsive Web Design", techprof: 90, softname: "Problem Solving", softprof: 85},
        {techname: "UI/UX Implementation", techprof: 85, softname: "Communication", softprof: 80},
        {techname: "Component-Based Development (React)", techprof: 80, softname: "Adaptability", softprof: 90},
        {techname: "API Fetching", techprof: 75, softname: "Time Management", softprof: 80},
        {techname: "HTML, CSS & JavaScript", techprof: 95, softname: "Team Collaboration", softprof: 85},
        {techname: "Version Control (Git)", techprof: 70, softname: "Continuous Learning", softprof: 95}
    ]

    function toggle(value)
    {
        if(value === "soft")
        {
            settogglebtn(true);
        }
        else
        {
            settogglebtn(false);
        }
    }

    function proflabel(value)
    {
        if(value >= 90) return "Expert";
        else if(value > 75) return "Advanced";
        else if(value >= 60) return "Intermediate";
        return "Beginner";
    }

    return<>
        {/* My Skills heading and description */}
        <h1 className="text-center mt-16 text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">My Skills</h1>
        <p className="text-center px-5 mt-5 text-xl text-gray-600 font-semibold">A focused overview of my core technical strengths and frontend development expertise.</p>

        {/* Toggle Button */}
        <div className="text-center flex justify-around mt-10 transition-all duration-300">
            <button className={`text-2xl font-semibold cursor-pointer transition-all duration-300 ${togglebtn ? "hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 hover:bg-clip-text hover:text-transparent" : "bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 p-2 rounded-md text-white transition-colors duration-300"}`} onClick={() => toggle("technical")}>Technical Skills</button>
            <button className={`text-2xl font-semibold cursor-pointer transition-all duration-300 ${togglebtn ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 p-2 rounded-md text-white transition-colors duration-300" : "hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 hover:bg-clip-text hover:text-transparent"}`} onClick={() => toggle("soft")}>Soft Skills</button>
        </div>

        {togglebtn ? (
            // Soft Skills Toggle Items.
            myskills.map((mysoftskills, index) => (
            <div key={index} className="px-5 lg:px-15">
                <div className="px-2 shadow-lg/20 rounded-md lg:px-10 mt-5 py-5 px-5 cursor-pointer hover:bg-gray-200 hover:scale-105 transition-transform duration-500">
                    <h1 className="mb-5 text-xl font-semibold text-gray-600">{mysoftskills.softname}</h1>
                    <div className="flex flex-row justify-between">
                        <p>{proflabel(mysoftskills.softprof)}</p>
                        <p className="bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700 bg-clip-text text-transparent font-medium">{mysoftskills.softprof}%</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 h-4 rounded-full" style={{ width: `${mysoftskills.softprof}%` }}></div>
                    </div>
                </div>
            </div>
        ))
        ) : (
            // Technical Skills Toggle Items.
            myskills.map((mytechskills, index) => (
            <div key={index} className="px-5 lg:px-15">
                <div className="px-2 shadow-lg/20 rounded-md lg:px-10 mt-5 py-5 px-5 cursor-pointer hover:bg-gray-200 hover:scale-105 transition-transform duration-500">
                    <h1 className="mb-5 text-xl font-semibold text-gray-600">{mytechskills.techname}</h1>
                    <div className="flex flex-row justify-between">
                        <p>{proflabel(mytechskills.techprof)}</p>
                        <p className="bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700 bg-clip-text text-transparent font-medium">{mytechskills.techprof}%</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 h-4 rounded-full" style={{ width: `${mytechskills.techprof}%` }}></div>
                    </div>
                </div>
            </div>
        )))}
    </>
}