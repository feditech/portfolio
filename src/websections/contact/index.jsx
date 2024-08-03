import React from 'react'
import Left from './left'
import Right from './right'

const ContactSection = () => {
    return (
        <div id="contactsection" className='w-full p-2 px-16 py-20 flex justify-around max-h-screen overflow-hidden  ' >
            <Left />
            <Right />

        </div>
    )
}

export default ContactSection