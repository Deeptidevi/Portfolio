"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { TextReveal } from "../ui/TextReveal"

const experiences = [
  {
    role: "Web Developer (Freelance)",
    company: "Nits Construction",
    period: "Mar '25 - Apr '25",
    location: "Live",
    link: "https://nitsconstructionltd.co.uk/",
    description:
      "Developed a responsive PHP/MySQL website, driving a 40% increase in user engagement. Created dynamic service modules and lead-capture forms, increasing lead conversion by 25% and reducing data processing time by 30%. Delivered the full project lifecycle independently, delivering a production-ready solution for a paid client.",
    technologies: ["PHP", "MySQL", "JavaScript", "Lead-capture Forms"],
  },
  {
    role: "Frontend Developer (Internship)",
    company: "CodeX Matrix",
    period: "Jun '25 - Aug '25",
    location: "Link",
    link: "https://drive.google.com/file/d/1hWAYll_6zhzU53lYa5jchrZ9t5X1-rsU/view",
    description:
      "Engineered a high-performance UI using React.js & Tailwind CSS, boosting interface responsiveness by 50%. Reduced initial load time by 20%, which in return improved the overall user experience. Improved UI performance by 35% through optimized rendering optimization techniques.",
    technologies: ["React.js", "Tailwind CSS", "UI Optimization", "Rendering Performance"],
  },
  {
    role: "Core Java Training",
    company: "LPU",
    period: "Jun '25 - Jul '25",
    location: "Link",
    link: "https://drive.google.com/file/d/1D-yYGuOEpf2QhTNx3fC2tJQCMVZE1ZJ3/view",
    description:
      "Completed hands-on training in Object-Oriented Programming (OOP), Exception Handling, and JDBC, building modular and scalable Java applications using clean architecture principles. Advanced a Quiz Application with user login, dynamic question management, score calculation, and database integration using JDBC for secure data handling. Demonstrated strong problem-solving and backend development skills, earning an 'O' Grade for outstanding academic performance.",
    technologies: ["Core Java", "OOP", "JDBC", "Quiz Application"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 bg-black relative z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 flex flex-col items-center">
          <TextReveal text="Work Experience" className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6" />
          <div className="w-24 h-1.5 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Subtle Background Glows that follow scroll */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            className="absolute -left-20 top-0 w-64 h-64 bg-primary rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            className="absolute -right-20 bottom-0 w-64 h-64 bg-primary rounded-full blur-[120px] pointer-events-none"
          />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -150 : 150,
                rotateY: index % 2 === 0 ? 45 : -45
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                rotateY: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: index * 0.1 
              }}
              className="w-full relative z-10"
            >
              <a 
                href={exp.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group p-10 rounded-[3rem] border border-white/5 bg-[#0a0a0a] hover:border-primary/30 transition-all duration-700 shadow-2xl h-full cursor-pointer"
              >
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <span className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[12px] group-hover:border-primary/50 group-hover:text-primary transition-all duration-500">
                      <MapPin className="w-5 h-5 text-primary" />
                      {exp.location}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase group-hover:text-primary transition-colors duration-500 leading-none">
                      {exp.role}
                    </h3>
                    <p className="text-primary/80 font-bold mt-2 uppercase tracking-widest text-xs">
                      {exp.company}
                    </p>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base font-medium flex-grow">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5 mt-auto">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl bg-white/5 border border-white/5 text-gray-500 group-hover:text-white group-hover:border-primary/20 transition-all duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
