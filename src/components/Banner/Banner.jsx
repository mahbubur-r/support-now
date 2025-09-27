import React from 'react';
const Banner = ({inProgress, resolved}) => {
    return (
        <div className="gap-3  my-5 max-w-[1600px] mx-auto flex justify-between items-center ">  
                <div className='w-[700px] h-[250px] mx-auto bg-[linear-gradient(125.07deg,#632ee3,#9f62f2)]'>
                    <h1 className='text-white text-3xl font-bold justify-center text-center mt-20'>In-Progress</h1>
                    <h1 className='text-white text-7xl font-extrabold justify-center text-center'>{inProgress}</h1>
                </div>
            <div className='w-[700px] h-[250px] mx-auto bg-[linear-gradient(90deg,#54cf68,#00827a)]'>
                <h1 className='text-white text-3xl font-bold justify-center text-center mt-20'>Resolved</h1>
                <h1 className='text-white text-7xl font-extrabold justify-center text-center'>{resolved}</h1>
            </div>
        </div>
    );
};

export default Banner;