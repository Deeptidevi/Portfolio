"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Code, Target, Users, ChevronRight, BookOpen } from "lucide-react"
import { useState } from "react"
import { TextReveal } from "../ui/TextReveal"
import { Tilt } from "../ui/Tilt"

export function About() {
  const [hoveredCert, setHoveredCert] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const certifications = [
    { 
      id: 1,
      title: "React.js Internship", 
      issuer: "CodeX Matrix",
      duration: "Aug 25",
      link: "https://drive.google.com/file/d/1hWAYll_6zhzU53lYa5jchrZ9t5X1-rsU/view",
      icon: <Code className="w-5 h-5" />
    },
    { 
      id: 2,
      title: "ChatGPT-4 Prompt Engineering", 
      issuer: "Infosys Springboard",
      duration: "Aug 25",
      link: "https://drive.google.com/file/d/1jzF_V1ZrX-dbzcihrbh-kyTHcBaZ6Gw8/view",
      icon: <BookOpen className="w-5 h-5" />
    },
    { 
      id: 3,
      title: "Chat GPT Make Easy AI", 
      issuer: "Infosys Springboard",
      duration: "Jul 25",
      link: "https://drive.google.com/file/d/1OSnDkl8xQqCZFDNVP8dpHpm9GiRcidBL/view",
      icon: <Target className="w-5 h-5" />
    },
    { 
      id: 4,
      title: "Mastering JAVA for App Dev", 
      issuer: "LPU",
      duration: "Jun 25",
      link: "https://drive.google.com/file/d/1D-yYGuOEpf2QhTNx3fC2tJQCMVZE1ZJ3/view",
      icon: <Award className="w-5 h-5" />
    },
    { 
      id: 5,
      title: "Java Programming", 
      issuer: "neoColab",
      duration: "May 24",
      link: "https://drive.google.com/file/d/1Qi9J3jNBusEJaCxPoA5gCKZrYuktybC0/view",
      icon: <Code className="w-5 h-5" />
    }
  ]

  const skills = [
    { icon: <Code className="w-6 h-6" />, label: "Clean Code", delay: 0.1 },
    { icon: <Target className="w-6 h-6" />, label: "Problem Solving", delay: 0.2 },
    { icon: <Users className="w-6 h-6" />, label: "Team Work", delay: 0.3 }
  ]

  const stats = [
    { label: "Years Experience", value: "2+", icon: <Code className="w-5 h-5" /> },
    { label: "Projects Completed", value: "6+", icon: <Target className="w-5 h-5" /> },
    { label: "Technologies", value: "10+", icon: <Award className="w-5 h-5" /> },
  ]

  const particles = [
    { x: 8, y: 12, left: 6, top: 18, duration: 3.6, delay: 0.4, repeatDelay: 1.5 },
    { x: 24, y: 40, left: 18, top: 42, duration: 4.0, delay: 0.8, repeatDelay: 1.8 },
    { x: 52, y: 28, left: 46, top: 30, duration: 3.2, delay: 0.6, repeatDelay: 1.2 },
    { x: 70, y: 12, left: 66, top: 16, duration: 3.8, delay: 0.3, repeatDelay: 1.7 },
    { x: 82, y: 54, left: 80, top: 58, duration: 4.1, delay: 1.0, repeatDelay: 1.6 },
    { x: 12, y: 72, left: 10, top: 74, duration: 3.5, delay: 0.7, repeatDelay: 1.4 },
    { x: 44, y: 70, left: 42, top: 68, duration: 3.9, delay: 0.5, repeatDelay: 1.9 },
    { x: 76, y: 80, left: 74, top: 78, duration: 3.7, delay: 0.9, repeatDelay: 1.3 },
  ]

  return (
    <section id="about" className="py-32 bg-black relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <TextReveal text="About Me" className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6" />
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Surprise Reflecting Elements */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -45 }}
            whileInView={{ x: 0, opacity: 0.2, rotate: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -left-20 top-20 w-40 h-40 bg-primary blur-[100px] pointer-events-none z-0"
          />
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 45 }}
            whileInView={{ x: 0, opacity: 0.2, rotate: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="absolute -right-20 bottom-20 w-40 h-40 bg-secondary blur-[100px] pointer-events-none z-0"
          />

          {/* Main Content - Sliding from Left */}
          <div className="lg:col-span-2 space-y-8 relative z-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
                >
                  <div className="mb-3 p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Introduction Card */}
            <Tilt>
              <motion.div
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  duration: 0.8 
                }}
                className="p-8 bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-xl"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-2xl font-bold mb-4 text-white"
                >
                  Who I Am & What I Do
                </motion.h3>
                
                <div className="space-y-4 text-gray-300">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I&apos;m <span className="text-primary font-bold">Deepti Devi</span>, a Computer Science & Engineering student at Lovely Professional University. I&apos;m a Full Stack Developer dedicated to crafting high-performance, user-centric web applications. Currently, I&apos;m honing my expertise in modern technologies like React.js, Next.js, and Node.js.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    When I&apos;m not coding, you&apos;ll likely find me lost in the strings of my <span className="text-primary">guitar</span> or behind a lens, capturing the world through <span className="text-primary">photography</span>. These creative outlets fuel my innovative approach to technical challenges.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Looking ahead, I aim to push the boundaries of Web Development and Generative AI, creating immersive digital experiences that solve real-world problems with elegance and efficiency.
                  </motion.p>
                </div>
              </motion.div>
            </Tilt>

            {/* Skills with animations */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-primary animate-pulse" />
                My Approach
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: skill.delay,
                      type: "spring",
                      stiffness: 100 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-xl border border-gray-800/50 cursor-pointer relative overflow-hidden group"
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredSkill === index ? 0.1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                    />
                    
                    <motion.div
                      animate={{ 
                        rotate: hoveredSkill === index ? 360 : 0,
                        scale: hoveredSkill === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-primary mb-3 inline-block"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <p className="font-medium text-white mb-1">{skill.label}</p>
                    <p className="text-sm text-gray-400">
                      {skill.label === "Clean Code" ? "Maintainable & scalable" : 
                       skill.label === "Problem Solving" ? "Analytical thinking" : 
                       "Collaborative development"}
                    </p>
                    
                    {/* Animated underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredSkill === index ? "100%" : 0 }}
                      className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-3"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Sliding from Right */}
          <div className="space-y-8 relative z-10">
            {/* Education with animated timeline */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 40,
                damping: 12,
                duration: 0.9 
              }}
              className="p-6 bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-xl"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg"
                >
                  <GraduationCap className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="font-bold text-white text-xl">Education</h4>
              </motion.div>
              
              {/* Animated timeline */}
              <div className="relative pl-8">
                {/* Animated timeline line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute left-[23px] top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent"
                />
                
                {/* Animated timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200 
                  }}
                  className="absolute left-[19px] top-0 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
                />
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-3"
                >
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="font-bold text-white text-lg"
                  >
                    B.Tech Computer Science
                  </motion.p>
                  
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="text-primary text-sm font-medium"
                  >
                    Lovely Professional University
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-center gap-4 text-sm text-gray-400"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-800/50 rounded-full"
                    >
                      2023 – Present
                    </motion.span>
                    
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      CGPA: 6.3
                    </motion.span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Certifications - Modern Design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 shadow-xl"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-bold text-white text-xl">Certifications</h4>
                  </div>
                  
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full"
                  >
                    {certifications.length} Certificates
                  </motion.span>
                </div>
                
                <p className="text-sm text-gray-400">Professional development achievements</p>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <a
                    key={cert.id}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.2 + (index * 0.1),
                        type: "spring" 
                      }}
                      whileHover={{ 
                        backgroundColor: "rgba(30, 41, 59, 0.5)",
                        transition: { duration: 0.2 }
                      }}
                      onMouseEnter={() => setHoveredCert(cert.id)}
                      onMouseLeave={() => setHoveredCert(null)}
                      className="group relative p-4 rounded-xl border border-gray-800/50 hover:border-primary/30 cursor-pointer transition-all duration-300"
                    >
  
                    
                    <div className="ml-4 flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-4 min-w-0 pr-4">
                          <motion.div
                            animate={{ 
                              rotate: hoveredCert === cert.id ? 10 : 0,
                              scale: hoveredCert === cert.id ? 1.1 : 1
                            }}
                            className="text-primary flex-shrink-0"
                          >
                            {cert.icon}
                          </motion.div>
                          <h5 className="font-bold text-white text-base md:text-lg leading-tight truncate">{cert.title}</h5>
                        </div>
                        
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-[10px] md:text-xs font-black text-primary/90 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 whitespace-nowrap flex-shrink-0 self-start sm:self-center mr-2"
                        >
                          {cert.duration}
                        </motion.span>
                      </div>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                          
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ 
                              opacity: hoveredCert === cert.id ? 1 : 0,
                              x: hoveredCert === cert.id ? 0 : -10
                            }}
                            className="flex items-center gap-1 text-xs text-gray-400"
                          >
                            <span>View Certificate</span>
                            <ChevronRight className="w-3 h-3" />
                          </motion.div>
                        </div>
                        
                        {/* Hover line */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-2"
                        />
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                    </motion.div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              initial={{
                x: p.x,
                y: p.y,
                opacity: 0,
              }}
              animate={{
                y: [null, -20, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                repeatDelay: p.repeatDelay,
              }}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
