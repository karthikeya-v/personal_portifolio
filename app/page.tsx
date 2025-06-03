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
import Head from "next/head"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

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

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <link rel="preload" href="/pattern.png" as="image" />
      </Head>
      {/* Enhanced Header */}
      <motion.header
        className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 backdrop-blur-md border-b border-white/10"
        style={{ opacity: headerOpacity }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                KV
              </div>
              <span className="text-white font-bold text-xl">Karthikeya V.</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-orange-300 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-300 transition-all group-hover:w-full" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
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
            className="md:hidden bg-black/90 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-white hover:text-orange-300 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20" />

        <motion.div className="container mx-auto px-4 text-center text-white relative z-10" style={{ y: heroY }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent"
          >
            Sai Karthikeya Vemulapalli
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-4 text-blue-100"
          >
            Software Engineering Student | DevSecOps Enthusiast | Backend Developer
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-lg mb-8 text-blue-200"
          >
            <MapPin className="w-5 h-5" />
            Brisbane, QLD, Australia
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105"
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
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  I'm a passionate <strong className="text-blue-600">Software Engineering student</strong> at The
                  University of Queensland with a keen interest in{" "}
                  <strong className="text-purple-600">DevSecOps</strong>,{" "}
                  <strong className="text-green-600">cybersecurity</strong>, and{" "}
                  <strong className="text-orange-600">backend development</strong>.
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
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Programming Languages",
                description:
                  "Proficient in multiple programming languages with focus on backend development and system programming.",
                skills: ["Python", "Java", "JavaScript", "C/C++", "SQL"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Backend Development",
                description:
                  "Experience building RESTful APIs, database management, and server-side application development.",
                skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "DevSecOps & Security",
                description:
                  "Learning security-first development practices and exploring cybersecurity tools and methodologies.",
                skills: ["Docker", "Git/GitHub", "Linux", "Security Testing", "CI/CD"],
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud & Tools",
                description:
                  "Familiar with cloud platforms and modern development tools for scalable application deployment.",
                skills: ["AWS", "Azure", "Grafana", "Monitoring", "Kubernetes"],
                color: "from-purple-500 to-indigo-500",
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
                <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="space-y-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-br ${category.color} hover:scale-105 transition-transform cursor-default`}
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
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education & Learning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="h-full p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                    UQ
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-800">Current Education</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600">Bachelor of Software Engineering</h4>
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
              <Card className="h-full p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Learning Goals</h3>
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
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full" />
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
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "MySQL + Grafana SaaS Monitoring",
                description:
                  "Docker containerized solution for deploying MySQL database with Grafana monitoring dashboard, loaded with 55,000+ SaaS application data for comprehensive analytics and visualization.",
                tech: ["Docker", "MySQL", "Grafana", "Python"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "ReconMap Testing Repository",
                description:
                  "Personal testing environment for security reconnaissance and vulnerability assessment tools. Exploring penetration testing methodologies and security automation.",
                tech: ["Security Testing", "Smarty", "Reconnaissance", "DevSecOps"],
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "University Course Projects",
                description:
                  "Collection of academic projects including web applications, database systems, and software engineering assignments demonstrating full-stack development skills.",
                tech: ["Full-Stack", "Database Design", "Web Development", "Software Engineering"],
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Github className="w-6 h-6" />,
                title: "Code Storage & Learning",
                description:
                  "GitHub repository serving as a personal code library and learning journal, documenting my journey through various programming languages and technologies.",
                tech: ["Version Control", "Documentation", "Learning", "Best Practices"],
                color: "from-purple-500 to-indigo-500",
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
                <Card className="h-full p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-br ${project.color} hover:scale-105 transition-transform cursor-default`}
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Interested in collaborating or have an opportunity to share? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                subtitle: "Send me an email",
                description: "Drop me a line anytime! I usually respond within 24 hours.",
                action: "mailto:saikarthikeya.vemulapalli@gmail.com",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                subtitle: "Call or text me",
                description: "Available for calls during business hours in Brisbane timezone.",
                action: "tel:+61412259932",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: <Linkedin className="w-8 h-8" />,
                title: "LinkedIn",
                subtitle: "Connect professionally",
                description: "Let's connect and build our professional network together!",
                action: "https://www.linkedin.com/in/sai-karthikeya-vemulapalli-375a44252/",
                color: "from-blue-600 to-blue-700",
              },
              {
                icon: <Github className="w-8 h-8" />,
                title: "GitHub",
                subtitle: "Check out my code",
                description: "Explore my repositories and open-source contributions.",
                action: "https://github.com/karthikeya-v",
                color: "from-gray-700 to-gray-800",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Location",
                subtitle: "Based in Australia",
                description: "Brisbane, Queensland, Australia - Open to remote work opportunities.",
                action: null,
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Resume",
                subtitle: "Download my resume",
                description: "Get a detailed overview of my experience and qualifications.",
                action: "#",
                color: "from-purple-500 to-indigo-500",
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  {contact.subtitle}
                </div>

                <Card className="h-full p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="text-center space-y-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{contact.description}</p>
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
                        className="border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all"
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
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                KV
              </div>
              <span className="text-lg font-semibold">Karthikeya Vemulapalli</span>
            </div>
            <p className="text-gray-400">
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
                  className="text-gray-400 hover:text-orange-400 transition-colors"
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
