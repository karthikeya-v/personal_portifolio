import React from "react";
import { motion } from "framer-motion"; // motion can be used in Server Components for initial/animate if they translate to CSS
import { getGithubRepos, type Repo } from "@/lib/github";
import { GithubRepoCard } from "@/components/ui/github-repo-card";
import { Button } from "@/components/ui/button"; // For the "View All" button
import { Github, ExternalLink } from "lucide-react";

// Standardized transitions (if needed for motion components here, otherwise remove)
const mediumTransition = { duration: 0.6, ease: "easeInOut" };
const buttonHoverTapTransition = { duration: 0.2, ease: "easeOut" }; // For motion.custom button
const fastTransition = { duration: 0.3, ease: "easeOut" };


export async function GithubProjectsSection() {
  const githubUsername = "karthikeya-v";
  const repos: Repo[] = await getGithubRepos(githubUsername, 6);

  // Framer Motion props for parts that can be declarative
  const sectionMotionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 }, // This might only work if this component becomes 'use client' or is wrapped
    transition: mediumTransition,
    viewport: { once: true },
  };

  // Note: whileInView and other event-based motion props typically require a client component.
  // For a pure server component, animations would be limited to initial/animate that map to CSS,
  // or the motion component itself needs to be a client component wrapper.
  // GithubRepoCard is already "use client" so it can handle its own animations.
  // The section title animation here might need adjustment if this remains purely server-side.
  // For simplicity, we'll assume the motion.div for title might not fully animate with whileInView here
  // unless this component itself is part of a client boundary higher up or becomes one.

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-muted/50 dark:bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          // {...sectionMotionProps} // Applying declarative animation for section title
          // For Server Components, complex whileInView might not work as expected without client wrapper.
          // Let's use a simpler initial animation or rely on GithubRepoCard's own animations.
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            A selection of my recent work from GitHub. More available on my profile.
          </p>
        </motion.div>

        {repos && repos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {repos.map((repo, index) => (
              <GithubRepoCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            <p>Could not load projects from GitHub at the moment. Please check back later.</p>
            <p className="text-xs mt-2">Attempted to fetch from: {githubUsername}</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: repos && repos.length > 0 ? (repos.length * 0.1) + 0.2 : 0.2 }} // Delay after cards would have animated
          className="text-center mt-10 md:mt-16"
        >
          <motion.a // Changed from motion.custom as={Button} to motion.a for direct link styling
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-md transition-all"
            whileHover={{ scale: 1.03, y: -2, transition: buttonHoverTapTransition }}
            whileTap={{ scale: 0.97, y: 0, transition: buttonHoverTapTransition }}
            // transition={fastTransition} // already part of whileHover/Tap
          >
            <Github className="w-5 h-5 mr-2.5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 ml-2.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
