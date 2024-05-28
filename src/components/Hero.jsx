import React from 'react'
import phone from '../assets/phone.png'

const Hero = () => {
  return (
    <div className='bg-white   '>
        <div className=' custom-container flex '>

      {/* text */}
      <div className='arsenal-regular pt-[8rem] flex flex-col gap-4   '>
        <button className='rounded-full bg-[#fdd2cb] text-2xl font-semibold bg-opacity-50 text-nowrap px-3 '>Welcome to a Modern Financial Experience</button>
        <p className=' text-4xl font-bold '>Managing Your Personal Finances Made Easier</p>
        <p className='text-xl text-wrap '>Elevate your financial experience with e-wallet. We simplify how you pay, transfer money, and manage your finances, giving you full control over your money.</p>

      </div>
      {/* photo */}
      <div className='w-[120rem]   '>
        <img src={phone} />

      </div>
        </div>
    </div>
  )
}

export default Hero
