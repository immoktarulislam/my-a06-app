import Image from 'next/image';
import React from 'react';
import { Clock3, Flame, Star } from "lucide-react";

const AppCard = ({ app }) => {
    return (
        <section className='bg-[#15171D]  '>
            <div>
                <div className="w-full max-w-sm overflow-hidden rounded-2xl  bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ">

                    {/* Image */}
                    <div className="relative h-52 ">
                        <Image
                            src={app.image}
                            alt={app.name}
                            fill
                            className="object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Difficulty */}
                    <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                        {app.difficulty}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Muscle Groups */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {app.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#C2F800] text-black  px-3 py-1 text-xs font-medium "
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Title + Rating */}
                    <div className="flex items-start justify-between gap-3 my-2">
                        <h2 className="text-xl uppercase font-bold ">
                            {app.name}
                        </h2>


                    </div>

                    {/* Bottom */}
                    <div >
                        <div>
                            <p className="text-sm font-medium text-gray-400">
                                {app.equipment}
                            </p>
                        </div>

                        {/* Exercise Info */}
                        <div className="mt-5 grid grid-cols-3 gap-2 ">
                            <div className="flex items-center gap-2">
                                <Clock3 className="w-5 h-5 text-yellow-400" />
                                <span>{app.duration} min</span>
                            </div>



                            <div className="flex items-center gap-2" >

                                <Flame className="w-5 h-5 text-yellow-400" />
                                <span> {app.caloriesBurned} kcal</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span> {app.rating}</span>
                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default AppCard;











