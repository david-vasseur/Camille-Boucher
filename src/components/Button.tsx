import Link from 'next/link'
import React from 'react'

function Button({ to, description }: { to:string, description:string }) {
  return (
    <div>
        <Link href={to} 
        className=" font-oldStandard rounded-lg bg-fourth_color text-third_color border-2 border-solid border-primary_color p-2 text-center shadow-md font-semibold"
        >
            {description}
        </Link>
    </div>
  )
}

export default Button