export default function Tracer() 
{
  const tracerTimeline = [
    {
      year: "2022",
      title: "Started BCA at Chandigarh University",
      description: "Building a strong foundation in computer applications and programming basics."
    },
    {
      year: "2023",
      title: "Completed Professional Web Designing Course",
      description: "Mastered HTML, CSS, and JavaScript fundamentals for frontend development."
    },
    {
      year: "Early 2024",
      title: "Developed Quizzy: The MCQ Platform",
      description: "Created a minor project using HTML, CSS & JavaScript to showcase frontend skills."
    },
    {
      year: "Mid 2024",
      title: "Completed Professional Web Programming Course",
      description: "Advanced training in React, Bootstrap, and modern frontend workflows."
    },
    {
      year: "Late 2024",
      title: "Built Online Library Management System",
      description: "Major project integrating React, Bootstrap, and API fetching for dynamic UI."
    },
    {
      year: "Late 2024",
      title: "Research Paper on Online Library Management System",
      description: "Documented technical and design insights of my Online Library Management System."
    },
    {
      year: "2025",
      title: "Adopted Tailwind CSS & Mastered Git/GitHub",
      description: "Enhanced portfolio design and project management with modern tools.",
    }
  ];

  return <>
        <section className="px-5 py-16">
            {/* My Tracer heading and description */}
            <h1 className="text-4xl font-bold text-center text-indigo-600 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">My Tracer</h1>
            <p className="mb-10 px-2 mt-5 text-xl text-gray-600 font-semibold text-center">Tracking my learning journey and projects showcasing growth in frontend development and modern tools.</p>

            {/* Tracer data yearly */}
            <div className="px-5 shadow-lg/20 rounded-md py-6">
                <div className="border-l-4 border-indigo-400 pl-10 space-y-10 max-w-2xl mx-auto">
                    {tracerTimeline.map((item, index) => (
                    <div key={index} className="relative">
                        <div className="absolute -left-8 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white"></div>
                        <p className="text-sm text-gray-500">{item.year}</p>
                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
  </>
}
