import React from 'react'
import Left from './left'
import Right from './right'

const IntroSection = () => {
    return (
        <div className='bg-primary w-full p-2 px-16 pt-20 flex justify-around max-h-screen overflow-hidden  ' >
            <Left />
            <Right />

        </div>
    )
}

export default IntroSection