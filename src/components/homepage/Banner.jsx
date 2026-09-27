import React from 'react';
import Image from 'next/image';
import bannerImg from "@/assets/banner.png"

const Banner = () => {
    return (
        <section className="bg-black-50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">

                <div className="flex flex-col items-center gap-10 md:flex-row md:gap-12">

                    {/* Left Content */}
                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C2F800] sm:text-base">
                            WORKOUT LIBRARY
                        </p>

                        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                            TRAIN WITH INTENT. LOG
                            EVERY SET.

                        </h2>

                        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-400 sm:text-lg md:mx-0">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today's plan, and watch the week's work add up
                        </p>

                        <button className="mt-7 rounded-lg bg-[#C2F800]  px-6 py-3 font-semibold text-black ">
                            BROWSE WORKOUTS
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2">
                        <Image src={bannerImg} alt="hero mage" />
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Banner;