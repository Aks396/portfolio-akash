"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch by only rendering after mounting
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center">
                <div className="w-4 h-4 bg-muted animate-pulse rounded-full" />
            </div>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors shadow-sm"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </motion.button>
    );
}
