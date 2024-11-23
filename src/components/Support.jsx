import React from 'react'


function Support() {

  return (
    <div className='w-[90%] md:w-[60%] lg:w-[50%] m-auto h-fit p-6 rounded-xl bg-gray-800 shadow-lg mt-7 mb-7'>
        <h1 className='text-3xl font-bold text-white mb-4'>Contact Support</h1>
        <p className='text-lg text-gray-300 mb-6'>
            If you have any issues or want to report a bug, please create an issue using the button below.
        </p>
        <div className='flex flex-col gap-5 items-center'>
            <button
                className='px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400'
                onClick={() => window.open("https://github.com/DheerajRay-01/myNote-appwrite/issues/new", "_blank")}
                aria-label="Create an issue on GitHub"
            >
                Create an Issue
            </button>
        </div>
    </div>
  )
}

export default Support
