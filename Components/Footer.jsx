import React from 'react'

const Footer = () => {
  const autoYear = new Date().getFullYear()
  return (
     <div>
      <div className="w-auto md:max-w-full m-2 md:m-5 border-b-2 border-black "></div>
      <p className="text-base md:text-2xl italic  text-center mb-5">
        © {autoYear} All rights reserved by Gopal Khanal
      </p>
    </div>
  )
}

export default Footer
