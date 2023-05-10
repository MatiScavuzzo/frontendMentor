import Image from 'next/image'

const QR_CODE = '/image-qr-code.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-2 bg-light-gray">
      <div className='flex flex-col items-center justify-center p-4 bg-white w-80 rounded-2xl'>
        <Image className='rounded-2xl' src={QR_CODE} alt="QR Code" width={300} height={300} />
        <article className='flex flex-col items-center justify-center w-full gap-2 p-4 text-center text-black'>
          <h4 className='font-[700]'>Improve your front-end skills by building projects</h4>
          <p className='text-[15px] font-[400]'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </article>
      </div>
    </main>
  )
}
