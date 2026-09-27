import Image from 'next/image';
import React from 'react';

const AppCard = ({ app }) => {
    return (
        <div>
            <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />

                    {/* Difficulty */}
                    <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                        {exercise.difficulty}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Title + Rating */}
                    <div className="flex items-start justify-between gap-3">
                        <h2 className="text-xl font-bold text-gray-900">
                            {exercise.name}
                        </h2>

                        <div className="flex shrink-0 items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
                            <span className="text-yellow-500">★</span>
                            <span className="text-sm font-semibold text-gray-800">
                                {exercise.rating}
                            </span>
                        </div>
                    </div>

                    {/* Muscle Groups */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {exercise.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
                        {exercise.description}
                    </p>

                    {/* Exercise Info */}
                    <div className="mt-5 grid grid-cols-3 gap-2 border-y border-gray-100 py-4">
                        <div className="text-center">
                            <p className="text-xs text-gray-400">Duration</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {exercise.duration} min
                            </p>
                        </div>

                        <div className="border-x border-gray-100 text-center">
                            <p className="text-xs text-gray-400">Calories</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {exercise.caloriesBurned}
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-xs text-gray-400">Sets</p>
                            <p className="mt-1 font-semibold text-gray-800">
                                {exercise.sets}
                            </p>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-4 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-400">Equipment</p>
                            <p className="text-sm font-medium text-gray-700">
                                {exercise.equipment}
                            </p>
                        </div>

                        <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;