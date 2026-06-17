import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Needhelp() {
  return (
    <div className='flex items-center flex-col p-5 border-4 rounded-2xl mt-6'>
      
      <h2 className='text-3xl font-game'>Need Help ?</h2>
      <p className='font-game text-gray-500 text-xl text-center'>Connect with fellow students, discuss coding topics, clear doubts and grow together.</p>
      <Link href={'https://web.whatsapp.com'}>
        <Button className='font-game cursor-pointer text-lg' variant={'pixel'}>Join community</Button>
      </Link>
    
    </div>
  )
}

export default Needhelp
