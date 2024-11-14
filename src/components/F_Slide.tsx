"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

interface IProps {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    className?: string;
}

function Slide({ children, width = "fit-content", className }: IProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <div>
        <div ref={ref} className={`relative overflow-hidden ${className}`} style={{width}}>
        <motion.div
                variants={{
                    hidden: { opacity: 0, y: "15vh" },
                    visible: { opacity: 1, y:0 }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 120 }}
            >
                {children}
            </motion.div>
        </div>
    </div>
  )
}

export default Slide;