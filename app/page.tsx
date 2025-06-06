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
  Shield, // May be unused if not for project cards
  Cloud,
  GraduationCap,
  Database, // May be unused if not for project cards
  ChevronDown,
} from "lucide-react"
// Github, ExternalLink are used by GithubProjectsSection and Footer, so keep.
// Code, Server are used in Skills.
// Mail, Phone, MapPin, Download, Linkedin are used in Contact and Footer.
// Menu, X are for mobile nav.
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { ThemeToggleButton } from "@/components/theme-toggle-button"
import { CodeSnippet } from "@/components/ui/code-snippet"
import { GithubProjectsSection } from "@/components/server/github-projects-section";
import { TechIcon } from "@/components/ui/tech-icon"; // Import the new TechIcon component
=======
import { ThemeToggle } from "@/components/theme-toggle"


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Standardized transitions
  const slowTransition = { duration: 0.8, ease: "easeInOut" };
  const mediumTransition = { duration: 0.6, ease: "easeInOut" };
  const fastTransition = { duration: 0.3, ease: "easeOut" };
  const buttonHoverTapTransition = { duration: 0.2, ease: "easeOut" };

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
    <main className="min-h-screen bg-background text-foreground">
      {/* Enhanced Header */}
      <motion.header

        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"

        className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border"

        style={{ opacity: headerOpacity }}
        transition={fastTransition}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">

            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg rounded-lg shadow-lg">KV</div>
              <span className="text-black font-bold text-xl">Karthikeya V.</span>

            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05, transition: buttonHoverTapTransition }}
              whileTap={{ scale: 0.95, transition: buttonHoverTapTransition }}
            >
              <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                KV
              </div>
              <span className="text-foreground font-bold font-heading text-xl">Karthikeya V.</span>

            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}

                  className="text-black hover:text-blue-600 transition-colors relative group font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full" />

                  className="text-foreground hover:text-primary transition-colors relative group font-medium text-sm lg:text-base"
                  whileHover={{ y: -2, transition: buttonHoverTapTransition }}
                  transition={fastTransition}
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 ease-out group-hover:w-full" />

                </motion.button>
              ))}
              <ThemeToggleButton />
            </div>


            {/* Mobile Menu Button */}
            <motion.custom
              variant="ghost"
              size="icon"

              className="md:hidden text-black hover:bg-blue-50 hover:text-blue-600"

              className="md:hidden text-foreground hover:bg-muted"

              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9, transition: buttonHoverTapTransition }}
              as={Button}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-content"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.custom>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-black hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>

          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            id="mobile-menu-content" // Added ID for aria-controls
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}

            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">

            transition={{ ...fastTransition, duration: 0.2 }}
            className="md:hidden bg-background border-t border-border shadow-lg"
          >
            <nav className="container mx-auto px-4 py-6 space-y-1" aria-label="Mobile navigation">

              {["About", "Skills", "Education", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}

                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-left text-black hover:text-blue-600 transition-colors py-4 px-4 font-medium rounded-lg hover:bg-blue-50 active:bg-blue-100"

                  className="block w-full text-left text-foreground hover:bg-muted/80 dark:hover:bg-muted/50 transition-colors py-3 px-3 rounded-md font-medium"
                  whileTap={{ scale: 0.98, transition: buttonHoverTapTransition }}

                >
                  {item}
                </motion.button>
              ))}

              <div className="pt-2 px-3">
                <ThemeToggleButton />
              </div>

              <ThemeToggle />

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

      <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background dark:from-black dark:via-gray-900 dark:to-black" />

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-foreground transform rotate-45" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-foreground" />
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-foreground transform rotate-12" />

        </div>

        <motion.div className="container mx-auto px-4 text-center relative z-10" style={{ y: heroY }}>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg leading-tight"

            transition={mediumTransition}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"

          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Sai Karthikeya Vemulapalli
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
            className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-300 text-center px-4"

            transition={{ ...mediumTransition, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed"

          >
            <span className="inline-block hover:text-blue-300 transition-colors cursor-default">Software Engineering Student</span>
            <span className="mx-1 sm:mx-2 text-blue-400">|</span>
            <span className="inline-block hover:text-purple-300 transition-colors cursor-default">DevSecOps Enthusiast</span>
            <span className="mx-1 sm:mx-2 text-purple-400">|</span>
            <span className="inline-block hover:text-pink-300 transition-colors cursor-default">Backend Developer</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...mediumTransition, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-base sm:text-lg mb-10 text-muted-foreground"
          >
            <MapPin className="w-5 h-5" />
            Brisbane, QLD, Australia
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"

            transition={{ ...mediumTransition, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"

          >
            <motion.custom
              onClick={() => scrollToSection("contact")}

              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border-0 w-full sm:w-auto touch-manipulation"

              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md px-6 sm:px-8 py-3 text-base sm:text-lg font-medium"
              whileHover={{ scale: 1.03, y: -2, transition: buttonHoverTapTransition }}
              whileTap={{ scale: 0.97, y: 0, transition: buttonHoverTapTransition }}
              transition={fastTransition}
              as={Button}

            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </motion.custom>
            <motion.custom
              onClick={() => scrollToSection("projects")}
              variant="outline"

              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg w-full sm:w-auto touch-manipulation"

              className="border-border text-foreground hover:bg-muted hover:text-muted-foreground shadow-sm hover:shadow-md px-6 sm:px-8 py-3 text-base sm:text-lg font-medium"
              whileHover={{ scale: 1.03, y: -2, transition: buttonHoverTapTransition }}
              whileTap={{ scale: 0.97, y: 0, transition: buttonHoverTapTransition }}
              transition={fastTransition}
              as={Button}

            >
              <Code className="w-5 h-5 mr-2" />
              View Projects
            </motion.custom>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Enhanced About Section */}

      <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      <section id="about" className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={mediumTransition}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...mediumTransition, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl lg:max-w-3xl mx-auto"
          >

            <Card className="p-8 border border-gray-200 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-6 text-lg leading-relaxed text-gray-700">

            <Card className="p-6 sm:p-8 border-2 border-border bg-card text-card-foreground">
              <CardContent className="space-y-5 text-base sm:text-lg leading-relaxed sm:leading-loose text-muted-foreground">

                <p>
                  I'm a passionate <strong className="text-foreground font-medium">Software Engineering student</strong> at The
                  University of Queensland with a keen interest in <strong className="text-foreground font-medium">DevSecOps</strong>,{" "}
                  <strong className="text-foreground font-medium">cybersecurity</strong>, and{" "}
                  <strong className="text-foreground font-medium">backend development</strong>.
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

      <section id="skills" className="py-16 md:py-20 lg:py-24 bg-muted/50 dark:bg-muted/20">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={mediumTransition}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Programming Languages",
                description:
                  "Proficient in multiple programming languages with focus on backend development and system programming.",
                skills: ["Python", "Java", "JavaScript", "CPlusPlus", "CSharp", "SQL", "Go", "PHP", "Ruby"], // Matched to TechIcon keys
              },
              {
                icon: <Server className="w-8 h-8" />, // This Server icon is for the category title
                title: "Backend Development",
                description:
                  "Experience building RESTful APIs, database management, and server-side application development.",
                skills: ["NodeJS", "ExpressJS", "Django", "SpringBoot", "RESTAPIs", "MySQL", "PostgreSQL", "MongoDB"],
              },
              {
                icon: <Shield className="w-8 h-8" />, // This Shield icon is for the category title
                title: "DevSecOps & Security",
                description:
                  "Learning security-first development practices and exploring cybersecurity tools and methodologies.",
                skills: ["Docker", "Git", "GitHub", "Linux", "SecurityTesting", "CI/CD", "Kubernetes"],
              },
              {
                icon: <Cloud className="w-8 h-8" />, // This Cloud icon is for the category title
                title: "Frontend & Cloud Tools", // Combined some for better fit or can be split
                description:
                  "Familiar with modern frontend frameworks, cloud platforms, and development tools.",
                skills: ["React", "NextJS", "TailwindCSS", "AWS", "Azure", "Grafana", "Monitoring"],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...mediumTransition, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.01, transition: fastTransition }}
                className="group"
              >

                <Card className="h-full p-6 border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:border-blue-200">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 rounded-lg shadow-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">

                <Card className="h-full p-6 border-2 border-border bg-card hover:bg-muted/50 dark:hover:bg-muted/30 transition-all duration-300 group-hover:shadow-lg dark:group-hover:shadow-primary/20">
                  <CardContent className="space-y-4">
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground flex items-center justify-center mb-4 rounded-lg group-hover:scale-105 transition-transform duration-200"
                    >
                      {React.cloneElement(category.icon, { className: "w-7 h-7 sm:w-8 sm:h-8"})}
                    </motion.div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent-foreground transition-colors">

                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">{category.description}</p>


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

                    {/* New TechIcon rendering */}
                    <div className="flex flex-wrap gap-3 items-center">
                      {category.skills.map((skill) => (
                        <TechIcon key={skill} techName={skill} />

                      ))}
                    </div>
                    {/* Old skill text badges are removed in favor of tooltips from TechIcon */}
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

      <section id="education" className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={mediumTransition}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Education & Learning</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={mediumTransition}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01, transition: fastTransition }}
              className="group"
            >

              <Card className="h-full p-8 border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-4 rounded-lg shadow-lg">

              <Card className="h-full p-6 sm:p-8 border-2 border-border bg-card text-card-foreground group-hover:shadow-lg dark:group-hover:shadow-primary/20">
                <CardContent className="space-y-4">
                  <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 rounded-lg group-hover:scale-105 transition-transform duration-200"
                  >

                    UQ
                  </motion.div>
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-foreground" />
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground">Current Education</h3>
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-medium text-foreground">Bachelor of Software Engineering</h4>
                  <p className="text-base sm:text-lg font-medium text-muted-foreground">The University of Queensland – Brisbane, QLD</p>
                  <p className="text-sm sm:text-base text-muted-foreground italic">Expected Graduation: 2025</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed sm:leading-loose">
                    Specializing in secure software development, cloud computing, and cybersecurity. Coursework includes
                    software design, database systems, web development, and information security.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...mediumTransition, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.01, transition: fastTransition }}
              className="group"
            >

              <Card className="h-full p-8 border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white flex items-center justify-center rounded-lg shadow-lg">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Learning Goals</h3>

              <Card className="h-full p-6 sm:p-8 border-2 border-border bg-card text-card-foreground group-hover:shadow-lg dark:group-hover:shadow-primary/20">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform duration-200"
                    >
                      <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
                    </motion.div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground">Learning Goals</h3>

                  </div>
                  <p className="text-base sm:text-lg font-medium text-muted-foreground mb-3">Currently pursuing:</p>
                  <ul className="space-y-2.5 sm:space-y-3 list-none pl-0"> {/* Ensured ul, list-none removes default bullets if custom are used */}
                    {[
                      "AWS Cloud Practitioner Certification",
                      "Docker & Kubernetes fundamentals",
                      "Advanced cybersecurity practices",
                      "DevOps pipeline development",
                      "Open source contributions",
                    ].map((goal, index) => (
                      <motion.li
                        key={goal}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-muted-foreground"
                      >

                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" aria-hidden="true"></span>

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

      {/* Enhanced Projects Section - Now uses server component */}
      <GithubProjectsSection />

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 md:py-20 lg:py-24 bg-background text-foreground relative overflow-hidden">
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-foreground transform rotate-45" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-foreground" />
          <div className="absolute top-1/2 right-10 w-16 h-16 border border-foreground transform -rotate-12" />

        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={mediumTransition}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl lg:max-w-2xl mx-auto leading-relaxed lg:leading-loose">
              Interested in collaborating or have an opportunity to share? I'd love to hear from you!
            </p>
          </motion.div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">

            {[
              {
                icon: <Mail className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Email",
                subtitle: "Send me an email",
                description: "Drop me a line anytime! I usually respond within 24 hours.",
                action: "mailto:saikarthikeya.vemulapalli@gmail.com",
              },
              {
                icon: <Phone className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Phone",
                subtitle: "Call or text me",
                description: "Available for calls during business hours in Brisbane timezone.",
                action: "tel:+61412259932",
              },
              {
                icon: <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "LinkedIn",
                subtitle: "Connect professionally",
                description: "Let's connect and build our professional network together!",
                action: "https://www.linkedin.com/in/sai-karthikeya-vemulapalli-375a44252/",
              },
              {
                icon: <Github className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "GitHub",
                subtitle: "Check out my code",
                description: "Explore my repositories and open-source contributions.",
                action: "https://github.com/karthikeya-v",
              },
              {
                icon: <MapPin className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Location",
                subtitle: "Based in Australia",
                description: "Brisbane, Queensland, Australia - Open to remote work opportunities.",
                action: null,
              },
              {
                icon: <Download className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Resume",
                subtitle: "Download my resume",
                description: "Get a detailed overview of my experience and qualifications.",
                action: "#",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...mediumTransition, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02, transition: fastTransition }}
                className="group relative"
              >
                <motion.div
                  className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-card text-card-foreground px-3 py-0.5 text-xs font-medium opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 ease-out whitespace-nowrap rounded-sm shadow-sm"
                >
                  {contact.subtitle}
                </div>


                <Card className="h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white to-gray-100 text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300 rounded-lg shadow-lg">

                <Card className="h-full p-6 sm:p-8 bg-card/80 dark:bg-card/50 backdrop-blur-md border-2 border-border hover:bg-muted/50 dark:hover:bg-muted/30 transition-all duration-300 group-hover:shadow-xl dark:group-hover:shadow-primary/25">
                  <CardContent className="text-center space-y-3 sm:space-y-4">
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-primary text-primary-foreground flex items-center justify-center rounded-lg group-hover:scale-105 transition-transform duration-200"
                    >

                      {contact.icon}
                    </motion.div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent-foreground transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed sm:leading-loose">{contact.description}</p>
                    {contact.action && (
                      <motion.custom
                        onClick={() => {
                          if (contact.action.startsWith("http") || contact.action.startsWith("mailto") || contact.action.startsWith("tel")) {
                            window.open(contact.action, contact.action.startsWith("http") ? "_blank" : "_self")
                          } else if (contact.action === "#") {
                            // Placeholder for resume download or other action
                            console.log("Resume download clicked");
                          }
                        }}
                        variant="outline"

                        className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all hover:scale-105"

                        className="border-border text-foreground hover:bg-muted hover:text-muted-foreground shadow-sm hover:shadow-md text-xs sm:text-sm px-4 py-2"
                        whileHover={{ scale: 1.03, y:-1, transition: buttonHoverTapTransition }}
                        whileTap={{ scale: 0.97, y:0, transition: buttonHoverTapTransition }}
                        transition={fastTransition}
                        as={Button}

                      >
                        Connect
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                      </motion.custom>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temporary Test Section for CodeSnippet */}
      <section id="dev-perks-test" className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={mediumTransition}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            {/* This h2 is part of a temporary section, its level might need adjustment in a real page structure */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Interactive Code Snippets
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>
          <div className="max-w-2xl lg:max-w-3xl mx-auto space-y-8">
            <CodeSnippet
              language="javascript"
              title="Example JavaScript: greet.js"
              codeString={`function greet(name) {
  // A simple greeting function
  console.log(\`Hello, \${name}!\`);
}

greet("Developer");
// Expected output: Hello, Developer!`}
            />
            <CodeSnippet
              language="python"
              title="Example Python: calculate_sum.py"
              codeString={`def calculate_sum(a, b):
  """Calculates the sum of two numbers."""
  return a + b

result = calculate_sum(5, 10)
print(f"The sum is: {result}")
# Expected output: The sum is: 15`}
            />
             <CodeSnippet
              language="tsx"
              title="React Component: MyButton.tsx"
              codeString={`import React from 'react';

type MyButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const MyButton: React.FC<MyButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 15px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px'
      }}
    >
      {children}
    </button>
  );
};

export default MyButton;`}
            />
            <CodeSnippet
              language="bash"
              title="Bash Script: setup_project.sh"
              codeString={`#!/bin/bash

# Create project directory
mkdir my_new_project
cd my_new_project

# Initialize git repository
git init

# Create a virtual environment (Python)
python3 -m venv .venv
source .venv/bin/activate

echo "Project setup complete!"`}
            />
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}

      <footer className="bg-gradient-to-r from-gray-50 to-white text-black py-12 border-t border-gray-200">

      <footer className="bg-muted/50 dark:bg-muted/20 text-foreground py-10 md:py-12 border-t-2 border-border">

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{...slowTransition, delay: 0.1}}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center font-bold rounded-lg shadow-lg">KV</div>
              <span className="text-xl font-semibold">Karthikeya Vemulapalli</span>

            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <motion.div
                className="w-7 h-7 sm:w-8 sm:h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold rounded-md"
                whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1, transition: {...buttonHoverTapTransition, duration:0.3} }}
              >
                KV
              </div>
              <span className="text-base sm:text-lg font-medium font-heading">Karthikeya Vemulapalli</span>

            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sai Karthikeya Vemulapalli. Built with passion and modern web technologies.
            </p>
            <div className="flex justify-center gap-5 sm:gap-6 mt-4 sm:mt-6">
              {[
                { name: "GitHub", icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, url: "https://github.com/karthikeya-v" },
                {
                  name: "LinkedIn",
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

                { name: "Email", icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, url: "mailto:saikarthikeya.vemulapalli@gmail.com" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View Karthikeya's ${social.name} profile`}
                  whileHover={{ scale: 1.15, y: -3, color: "var(--primary-hsl)" , transition: buttonHoverTapTransition }}
                  whileTap={{ scale: 0.95, transition: buttonHoverTapTransition }}
                  transition={fastTransition}
                  className="text-muted-foreground hover:text-primary"

                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span> {/* More specific sr-only text */}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
