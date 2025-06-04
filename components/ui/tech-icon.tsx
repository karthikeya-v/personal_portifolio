"use client";

import React from 'react';
import { IconType } from 'react-icons';
import {
  SiPython, SiJavascript, SiDocker, SiAmazonaws, SiNodedotjs,
  SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiGithub, SiJava,
  SiCplusplus, SiMysql, SiMongodb, SiLinux, SiMicrosoftazure,
  SiKubernetes, SiExpress, SiGrafana, SiCsharp, SiGo, SiRubyonrails,
  SiPhp, SiPostgresql, SiMicrosoftsqlserver, SiDjango, SiSpringboot, SiVuedotjs, SiAngular
} from 'react-icons/si';
import {
  FaGitAlt, FaJava as FaJavaFa, FaAws as FaAwsFa, FaPython as FaPythonFa,
  FaJsSquare, FaNodeJs as FaNodeJsFa, FaDocker as FaDockerFa,
  FaReact as FaReactFa, FaLinux as FaLinuxFa, FaDatabase, FaServer,
  FaShieldAlt, FaSyncAlt, FaChartLine
} from 'react-icons/fa';
import { TbBrandNextjs as TbBrandNextjsTb, TbBrandCpp as TbBrandCppTb, TbBrandGolang } from 'react-icons/tb';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils"; // Assuming cn utility for classnames

interface TechIconProps {
  techName: string;
  className?: string; // For additional styling on the container div
  iconClassName?: string; // For styling the icon itself (size, etc.)
}

// Using a more specific type for the registry
type IconRegistryEntry = {
  icon: IconType;
  color?: string;
  title: string;
  category?: 'language' | 'backend' | 'frontend' | 'database' | 'devops' | 'cloud' | 'tool' | 'framework' | 'library';
};

export const iconRegistry: Record<string, IconRegistryEntry> = {
  // Programming Languages
  python: { icon: FaPythonFa, color: "#3776AB", title: "Python", category: 'language' },
  java: { icon: FaJavaFa, color: "#007396", title: "Java", category: 'language' },
  javascript: { icon: FaJsSquare, color: "#F7DF1E", title: "JavaScript", category: 'language' },
  cplusplus: { icon: TbBrandCppTb, color: "#00599C", title: "C++", category: 'language' },
  csharp: { icon: SiCsharp, color: "#239120", title: "C#", category: 'language' },
  go: { icon: TbBrandGolang, color: "#00ADD8", title: "Go", category: 'language' },
  ruby: { icon: SiRubyonrails, color: "#CC342D", title: "Ruby (on Rails)", category: 'language' }, // Using Rails icon as it's common
  php: { icon: SiPhp, color: "#777BB4", title: "PHP", category: 'language' },

  // Frontend Frameworks/Libraries
  react: { icon: FaReactFa, color: "#61DAFB", title: "React", category: 'frontend' },
  nextjs: { icon: TbBrandNextjsTb, color: "#000000", title: "Next.js", category: 'frontend' },
  vuejs: { icon: SiVuedotjs, color: "#4FC08D", title: "Vue.js", category: 'frontend' },
  angular: { icon: SiAngular, color: "#DD0031", title: "Angular", category: 'frontend' },

  // Backend Development
  nodejs: { icon: FaNodeJsFa, color: "#339933", title: "Node.js", category: 'backend' },
  expressjs: { icon: SiExpress, color: "#000000", title: "Express.js", category: 'backend' },
  django: { icon: SiDjango, color: "#092E20", title: "Django", category: 'backend' },
  springboot: { icon: SiSpringboot, color: "#6DB33F", title: "Spring Boot", category: 'backend' },
  restapis: { icon: FaServer, color: "#1E88E5", title: "REST APIs", category: 'backend' },

  // Databases
  sql: { icon: FaDatabase, color: "#4479A1", title: "SQL", category: 'database' },
  mysql: { icon: SiMysql, color: "#4479A1", title: "MySQL", category: 'database' },
  postgresql: { icon: SiPostgresql, color: "#336791", title: "PostgreSQL", category: 'database' },
  mongodb: { icon: SiMongodb, color: "#47A248", title: "MongoDB", category: 'database' },
  microsoftsqlserver: { icon: SiMicrosoftsqlserver, color: "#CC2927", title: "MS SQL Server", category: 'database' },

  // DevSecOps & Security
  docker: { icon: FaDockerFa, color: "#2496ED", title: "Docker", category: 'devops' },
  git: { icon: FaGitAlt, color: "#F05032", title: "Git", category: 'tool' },
  github: { icon: SiGithub, color: "#181717", title: "GitHub", category: 'tool' },
  linux: { icon: FaLinuxFa, color: "#FCC624", title: "Linux", category: 'tool' },
  securitytesting: { icon: FaShieldAlt, color: "#00B482", title: "Security Testing", category: 'devops' }, // Generic shield
  cicd: { icon: FaSyncAlt, color: "#1E88E5", title: "CI/CD", category: 'devops' }, // Generic sync/cycle

  // Cloud & Tools
  aws: { icon: FaAwsFa, color: "#FF9900", title: "AWS", category: 'cloud' },
  azure: { icon: SiMicrosoftazure, color: "#0078D4", title: "Azure", category: 'cloud' },
  kubernetes: { icon: SiKubernetes, color: "#326CE5", title: "Kubernetes", category: 'devops' },
  grafana: { icon: SiGrafana, color: "#F46800", title: "Grafana", category: 'tool' },
  monitoring: { icon: FaChartLine, color: "#34A853", title: "Monitoring", category: 'tool' }, // Generic chart
  tailwindcss: { icon: SiTailwindcss, color: "#06B6D4", title: "Tailwind CSS", category: 'frontend' },
};

export function TechIcon({ techName, className, iconClassName = "w-5 h-5 md:w-6 md:h-6" }: TechIconProps) {
  const techKey = techName.toLowerCase().replace(/[\s/.]+/g, '').replace(/#/g, 'sharp'); // Normalize key, handle C#
  const entry = iconRegistry[techKey];

  if (!entry) {
    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={cn("inline-flex items-center justify-center p-2.5 rounded-lg bg-card hover:bg-muted/80 transition-colors cursor-default", className)}>
              <span className={cn("text-xs font-mono", iconClassName)}>{techName.substring(0,3)}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{techName}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  const IconComponent = entry.icon;
  // Use a specific color if provided, otherwise let CSS handle it (e.g. currentColor or specific class)
  const iconStyle = entry.color ? { color: entry.color } : {};

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn("inline-flex items-center justify-center p-2.5 rounded-lg bg-card hover:bg-muted/80 transition-colors cursor-pointer", className)}>
            <IconComponent className={cn(iconClassName)} style={iconStyle} aria-hidden="true" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{entry.title || techName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
