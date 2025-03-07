import { useEffect, useRef, useState } from "react";

function UseElementSize() {
    const ref = useRef(null);
    const [size, setSize] = useState({width: 0, height: 0});

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver(entries => {
            if (!Array.isArray(entries)) return;
            const entry = entries[0];
            setSize({
                width: entry.contentRect.width,
                height: entry.contentRect.height
            });
        });

        
    observer.observe(ref.current);

    return () => observer.disconnect();

    }, []);

    return [ref, size];
}

export default UseElementSize;