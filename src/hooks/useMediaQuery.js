import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
    const getMatches = () => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }
        return false;
    };

    const [matches, setMatches] = useState(getMatches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);

        media.addEventListener("change", listener);

        return () => {
            media.removeEventListener("change", listener);
        };
    }, [query]);

    return matches;
}
