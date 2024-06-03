import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Prices = () => {
    return (
        <div id="pricing" className="flex flex-col justify-center items-center mt-20 font-bold">
            <h2 className="text-5xl">AND IT'S ALL FOR FREE</h2>
            <p className='text-xl mt-5 text-gray-700'>At the moment you can get it in github, but it supports only chromium based browsers</p>
            <a href="https://github.com/rendizi/noleetcheat" target='_blank'>
            <FontAwesomeIcon 
                icon={faGithub} 
                size="3x" 
                className="mt-4 cursor-pointer" 
            />
            </a>
            <img src="assests/growth-2.png"                         className="mx-auto mt-6 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 rounded"      ></img>

        </div>
    );
};
