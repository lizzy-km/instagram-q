import React from 'react'

const Home = () => {
  return (
    <div className=' flex px-[20px] justify-around items-start w-full min-h-full h-auto ' >
      <div className=' max-w-[630px] w-full min-h-full  gap-[24px] h-auto flex flex-col justify-start items-center ' >
        <div className='h-[124px] w-full border-b  bg-secondary-gray ' >
            {/* Story  */}
        </div>

        <div className=' min-w-full w-full h-auto min-h-[500px]   ' >
          {/* Content  */}

          <div className=' flex flex-col max-[470px]:min-w-[470px]  max-[470px]:max-w-[470px]  h-[300px] bg-secondary-gray ' >

          </div>
          
        </div>
      </div>
      <div className=' min-w-[383px] w-[383px] min-h-[600px] max-1xl:hidden flex bg-secondary-gray border ' >

      </div>
    </div>
  )
}

export default Home