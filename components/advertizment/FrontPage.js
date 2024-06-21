import React from 'react'

function FrontPage() {
  return (
    <>
    <div className='w-screen h-screen mb-4 block'>
    <video
            src="/videos/seconf_intro.mp4"
            className="w-full h-full object-cover z-0 overflow-hidden"
            autoPlay
            muted
            loop

          />
    </div>
    </>
  )
}

export default FrontPage ;
