import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; 
  to: string;
  description: string;
}

function Button({ onClick, to, description }: ButtonProps) {
  return (
    <div className="shine font-sans rounded-2xl bg-slate-200 text-third_color border-2 border-solid border-primary_color text-center shadow-button text-shadow font-semibold">
        <Link href={to} onClick={onClick}
          className="inline-block py-2 px-3"
        >
            {description}
        </Link>
    </div>
  )
}

export default Button;