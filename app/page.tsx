"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Server,
  Shield,
  Cloud,
  GraduationCap,
  Database,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Tech logos as simple icon representations
  const TechLogos = {
    Python: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        PY
      </motion.div>
    ),
    Java: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-700 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        JV
      </motion.div>
    ),
    JavaScript: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        JS
      </motion.div>
    ),
    CPlusPlus: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-8 h-8 bg-gradient-to-br from-blue-700 to-purple-800 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        C++
      </motion.div>
    ),
    SQL: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-600 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        SQL
      </motion.div>
    ),
    NodeJS: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        NODE
      </motion.div>
    ),
    Docker: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        DOC
      </motion.div>
    ),
    AWS: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        AWS
      </motion.div>
    ),
    Git: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        GIT
      </motion.div>
    ),
    Linux: () => (
      <motion.div 
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-8 h-8 bg-gradient-to-br from-gray-700 to-black text-white flex items-center justify-center text-xs font-bold rounded-md shadow-sm cursor-pointer transition-all"
      >
        LNX
      </motion.div>
    ),
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Enhanced Header */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
        style={{ opacity: headerOpacity }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg rounded-lg shadow-lg">KV</div>
              <span className="text-black font-bold text-xl">Karthikeya V.</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-black hover:text-blue-600 transition-colors relative group font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-black hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-left text-black hover:text-blue-600 transition-colors py-4 px-4 font-medium rounded-lg hover:bg-blue-50 active:bg-blue-100"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-blue-900/20" />

        {/* Enhanced geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gradient-to-r from-blue-400 to-purple-400 transform rotate-45 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-gradient-to-r from-purple-400 to-pink-400 animate-bounce" style={{animationDuration: '3s'}} />
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-gradient-to-r from-cyan-400 to-blue-400 transform rotate-12" />
          <div className="absolute top-10 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
        </div>

        <motion.div className="container mx-auto px-4 text-center relative z-10" style={{ y: heroY }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Sai Karthikeya Vemulapalli
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
            className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-300 text-center px-4"
          >
            <span className="inline-block hover:text-blue-300 transition-colors cursor-default">Software Engineering Student</span>
            <span className="mx-1 sm:mx-2 text-blue-400">|</span>
            <span className="inline-block hover:text-purple-300 transition-colors cursor-default">DevSecOps Enthusiast</span>
            <span className="mx-1 sm:mx-2 text-purple-400">|</span>
            <span className="inline-block hover:text-pink-300 transition-colors cursor-default">Backend Developer</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-lg mb-8 text-gray-400"
          >
            <MapPin className="w-5 h-5" />
            Brisbane, QLD, Australia
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border-0 w-full sm:w-auto touch-manipulation"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg w-full sm:w-auto touch-manipulation"
            >
              <Code className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">About Me</h2>
            <div className="w-24 h-1 bg-black mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 border border-gray-200 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  I'm a passionate <strong className="text-black">Software Engineering student</strong> at The
                  University of Queensland with a keen interest in <strong className="text-black">DevSecOps</strong>,{" "}
                  <strong className="text-black">cybersecurity</strong>, and{" "}
                  <strong className="text-black">backend development</strong>.
                </p>
                <p>
                  Currently seeking opportunities to apply my technical skills in real-world settings, I'm particularly
                  drawn to the intersection of security and software development. My goal is to build secure, scalable
                  systems while gaining hands-on experience in the industry.
                </p>
                <p>
                  As a dedicated learner, I enjoy exploring new technologies, working on challenging projects, and
                  contributing to open-source initiatives. I'm always eager to collaborate with like-minded individuals
                  and teams who share a passion for innovative software solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Technical Skills</h2>
            <div className="w-24 h-1 bg-black mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Programming Languages",
                description:
                  "Proficient in multiple programming languages with focus on backend development and system programming.",
                skills: ["Python", "Java", "JavaScript", "C/C++", "SQL"],
                logos: [TechLogos.Python, TechLogos.Java, TechLogos.JavaScript, TechLogos.CPlusPlus, TechLogos.SQL],
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Backend Development",
                description:
                  "Experience building RESTful APIs, database management, and server-side application development.",
                skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
                logos: [TechLogos.NodeJS, TechLogos.SQL, TechLogos.NodeJS, TechLogos.SQL, TechLogos.NodeJS],
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "DevSecOps & Security",
                description:
                  "Learning security-first development practices and exploring cybersecurity tools and methodologies.",
                skills: ["Docker", "Git/GitHub", "Linux", "Security Testing", "CI/CD"],
                logos: [TechLogos.Docker, TechLogos.Git, TechLogos.Linux, TechLogos.Docker, TechLogos.Git],
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud & Tools",
                description:
                  "Familiar with cloud platforms and modern development tools for scalable application deployment.",
                skills: ["AWS", "Azure", "Grafana", "Monitoring", "Kubernetes"],
                logos: [TechLogos.AWS, TechLogos.AWS, TechLogos.Docker, TechLogos.Linux, TechLogos.Docker],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full p-6 border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:border-blue-200">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 rounded-lg shadow-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>

                    {/* Tech logos */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.logos.map((Logo, logoIndex) => (
                        <motion.div
                          key={logoIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: logoIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Logo />
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 transition-all cursor-default rounded-full shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Education & Learning</h2>
            <div className="w-24 h-1 bg-black mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full p-8 border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-4 rounded-lg shadow-lg">
                    UQ
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-black" />
                    <h3 className="text-2xl font-bold text-black">Current Education</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-black">Bachelor of Software Engineering</h4>
                  <p className="text-lg font-medium text-gray-700">The University of Queensland – Brisbane, QLD</p>
                  <p className="text-gray-600 italic">Expected Graduation: 2025</p>
                  <p className="text-gray-700 leading-relaxed">
                    Specializing in secure software development, cloud computing, and cybersecurity. Coursework includes
                    software design, database systems, web development, and information security.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full p-8 border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center rounded-lg shadow-lg">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Learning Goals</h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-4">Currently pursuing:</p>
                  <ul className="space-y-3">
                    {[
                      "AWS Cloud Practitioner Certification",
                      "Docker & Kubernetes fundamentals",
                      "Advanced cybersecurity practices",
                      "DevOps pipeline development",
                      "Open source contributions",
                    ].map((goal, index) => (
                      <motion.li
                        key={goal}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        {goal}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Featured Projects</h2>
            <div className="w-24 h-1 bg-black mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "MySQL + Grafana SaaS Monitoring",
                description:
                  "Docker containerized solution for deploying MySQL database with Grafana monitoring dashboard, loaded with 55,000+ SaaS application data for comprehensive analytics and visualization.",
                tech: ["Docker", "MySQL", "Grafana", "Python"],
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "ReconMap Testing Repository",
                description:
                  "Personal testing environment for security reconnaissance and vulnerability assessment tools. Exploring penetration testing methodologies and security automation.",
                tech: ["Security Testing", "Smarty", "Reconnaissance", "DevSecOps"],
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "University Course Projects",
                description:
                  "Collection of academic projects including web applications, database systems, and software engineering assignments demonstrating full-stack development skills.",
                tech: ["Full-Stack", "Database Design", "Web Development", "Software Engineering"],
              },
              {
                icon: <Github className="w-6 h-6" />,
                title: "Code Storage & Learning",
                description:
                  "GitHub repository serving as a personal code library and learning journal, documenting my journey through various programming languages and technologies.",
                tech: ["Version Control", "Documentation", "Learning", "Best Practices"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full p-6 border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:border-purple-200">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 rounded-lg shadow-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all cursor-default rounded-full shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => window.open("https://github.com/karthikeya-v", "_blank")}
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white px-8 py-3 text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg shadow-md"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-pink-900/10" />
        {/* Enhanced geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/30 transform rotate-45 animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-purple-400/30" />
          <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-pink-400/30 transform -rotate-12" />
          <div className="absolute top-10 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Interested in collaborating or have an opportunity to share? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                subtitle: "Send me an email",
                description: "Drop me a line anytime! I usually respond within 24 hours.",
                action: "mailto:saikarthikeya.vemulapalli@gmail.com",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                subtitle: "Call or text me",
                description: "Available for calls during business hours in Brisbane timezone.",
                action: "tel:+61412259932",
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                title: "LinkedIn",
                subtitle: "Connect professionally",
                description: "Let's connect and build our professional network together!",
                action: "https://www.linkedin.com/in/sai-karthikeya-vemulapalli-375a44252/",
              },
              {
                icon: <Github className="w-8 h-8" />,
                title: "GitHub",
                subtitle: "Check out my code",
                description: "Explore my repositories and open-source contributions.",
                action: "https://github.com/karthikeya-v",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Location",
                subtitle: "Based in Australia",
                description: "Brisbane, Queensland, Australia - Open to remote work opportunities.",
                action: null,
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Resume",
                subtitle: "Download my resume",
                description: "Get a detailed overview of my experience and qualifications.",
                action: "#",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  {contact.subtitle}
                </div>

                <Card className="h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-gray-100 text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-lg shadow-lg">
                      {contact.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{contact.description}</p>
                    {contact.action && (
                      <Button
                        onClick={() => {
                          if (contact.action.startsWith("http")) {
                            window.open(contact.action, "_blank")
                          } else {
                            window.location.href = contact.action
                          }
                        }}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all hover:scale-105"
                      >
                        Connect
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-50 to-white text-black py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center font-bold rounded-lg shadow-lg">KV</div>
              <span className="text-xl font-semibold">Karthikeya Vemulapalli</span>
            </div>
            <p className="text-gray-600">
              © 2024 Sai Karthikeya Vemulapalli. Built with passion and modern web technologies.
            </p>
            <div className="flex justify-center gap-6 mt-6">
              {[
                { icon: <Github className="w-5 h-5" />, url: "https://github.com/karthikeya-v" },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  url: "https://www.linkedin.com/in/sai-karthikeya-vemulapalli-375a44252/",
                },
                { icon: <Mail className="w-5 h-5" />, url: "mailto:saikarthikeya.vemulapalli@gmail.com" },
              ].map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => window.open(social.url, "_blank")}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-black transition-all p-2 rounded-lg hover:bg-gray-100 hover:shadow-lg"
                >
                  {social.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
