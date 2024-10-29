import Link from 'next/link'
import React from 'react'

function Button({ to, description }: { to:string, description:string }) {
  return (
    <div>
        <Link href={to} 
          className=" font-oldStandard rounded-2xl bg-slate-200 text-third_color border-2 border-solid border-primary_color p-2 px-3 text-center shadow-button text-shadow-lg font-semibold"
        >
            {description}
        </Link>
    </div>
  )
}

export default Button