"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

interface IProps {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    className?: string;
}

function Rotate({ children, width = "fit-content", className }: IProps) {

    const firstChild = React.Children.toArray(children)[0];
    const secondChild = React.Children.toArray(children).splice(1);
    const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{width}}>
        <motion.div
            variants={{
                hidden: { opacity: 0, rotate: 0 },
                visible: { opacity: 1, rotate: 360 }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 1, delay: 0.2, type: 'tween', stiffness: 120 }}
        >
            {firstChild}
        </motion.div>
        <div>
            {secondChild}
        </div>
    </div>
  )
}

export default Rotate;