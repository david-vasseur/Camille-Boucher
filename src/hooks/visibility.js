"use client"
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const useInView = (options) => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        }
    }, [elementRef, isInView]);

    return [elementRef, isInView]
};

export default useInView;