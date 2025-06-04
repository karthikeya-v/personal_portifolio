"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder or null to avoid SSR hydration mismatch with theme
    return <Button variant="outline" size="icon" disabled className="h-9 w-9" aria-label="Loading theme toggle"><Sun className="h-[1.2rem] w-[1.2rem]" /></Button>;
  }

  const isDarkMode = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      role="switch"
      aria-checked={isDarkMode}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      className="h-9 w-9" // Standardized size
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDarkMode ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDarkMode ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      <span className="sr-only">{isDarkMode ? "Current theme: Dark. Switch to light theme." : "Current theme: Light. Switch to dark theme."}</span>
    </Button>
  );
}
