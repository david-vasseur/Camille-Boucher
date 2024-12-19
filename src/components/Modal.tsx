"use client";
import React, { ReactNode, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

function Modal({ children }: { children: ReactNode }) {

    const [isVisible, setIsVisible] = useState(true)

	return (
		isVisible ? (
			<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[999]">
				<div className="relative sm:w-[40vw] w-[90vw] max-h-[80vh] sm:max-h-[90vh] bg-secondary_color sm:rounded-2xl rounded-lg border-2 border-slate-800 p-8 pt-12 overflow-y-auto shadow-lg flex flex-col gap-8 items-center">
					<FaXmark
						className="absolute right-4 top-4 text-[1.5rem] cursor-pointer z-[9999]"
						onClick={() => setIsVisible(!isVisible)}
					/>
					<p className="font-oldStandard font-semibold text-center pt-8">{children}</p>
					<button className="mt-10 px-6 py-2 rounded-2xl bg-slate-500 font-bold shadow-lg" onClick={() => setIsVisible(!isVisible)}>Ok</button>
				</div>
			</div>
		) : null
	)
}

export default Modal;