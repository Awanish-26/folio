import { useTheme } from "../context/ThemeContext";
import { MdInvertColors, MdInvertColorsOff } from "react-icons/md";

export default function ThemeToggle() {
    const { isMono, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            title={isMono ? "Switch to Color theme" : "Switch to Mono theme"}
            aria-label="Toggle mono theme"
            className={`theme-toggle fixed top-4 right-4 z-50 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200
                ${isMono
                    ? "bg-white border-black text-black shadow-none"
                    : "bg-[#1a1a2e] border-violet-500 text-violet-300 hover:border-violet-400 hover:text-violet-100 shadow-[0_0_10px_rgba(139,92,246,0.4)]"
                }`}
        >
            {isMono
                ? <MdInvertColorsOff className="w-5 h-5" />
                : <MdInvertColors className="w-5 h-5" />
            }
        </button>
    );
}
