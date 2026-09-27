import React from 'react';
import AppCard from './AppCard';

const getAllApps = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    return data;
}

const LibraryApp = async () => {
    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    console.log(data, "data");

    return (
        <div className='my-[80px]'>
            <div >
                <h2 className='font-bold text-3xl'> THE LIBRARY</h2>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>

            {/* display card data */}
            <div className=' rounded-2xl mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 '>
                {data.map((app, ind) => {
                    return (
                        <AppCard key={ind} app={app} />
                    );
                })}
            </div>
        </div>
    );
};
export default LibraryApp;





