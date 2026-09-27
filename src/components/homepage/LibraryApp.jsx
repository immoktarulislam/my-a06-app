import React from 'react';

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
            <div>
                {data.map((app, ind) => {
                    return (
                        <div key={ind}>
                            <h3>{app.name}</h3>
                        </div>
                    );

                })}


            </div>


        </div>
    );
};

export default LibraryApp;