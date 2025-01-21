import React from 'react'

export default function Footer() {
  return (
    <footer className=' flex flex-col border border-gray-100 shadow items-center py-5 gap-5 mt-[90px]'>
        <p className=' font-bold'>Follow us :</p>
        <span className=' h-[1px] bg-gray-900 w-auto rounded-[5px] md:w-[70rem]'/>
        <nav className=' flex flex-wrap gap-4 text-xl font-semibold justify-start'>
            <a href="">Twitter</a>
            <a href="">Facebook</a>
            <a href="">Linkedin</a>
        </nav>

    </footer>
  )
}
