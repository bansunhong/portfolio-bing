import { useEffect, useRef, useState } from "react";

function useFadeUp() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                } else {
                    if (entry.boundingClientRect.top > 0) {
                        setVisible(false);
                    }
                }
            },
            {
                threshold: 0,
            },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}

export default useFadeUp;
