import logo from '../assets/chatgpt.png'
import { PencilSquareIcon, Bars3Icon } from '@heroicons/react/24/outline'

const Sidebar = () => {
    return (
        <div className="relative flex-1 hidden md:flex flex-col max-w-[16rem] bg-black h-screen overflow-y-auto p-3 text-white  ">
            {/* new chat */}
            <div className="flex items-center justify-between rounded-lg p-2 cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80  ">
                <span className='space-x-2 flex items-center'>
                    <img src={logo} alt="img" className='w-7' />
                    <span className='text-sm '>New chat</span>
                </span>
                <PencilSquareIcon className='w-6' />

            </div>

            {/* tasks according to dates */}        {/* new task */}
            <div className="mt-6  flex flex-col">
                <span className='text-xs text-gray-500 mb-2 px-2'>Previous 7 days</span>
                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>


                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                <div className='flex items-center cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80 active:bg-gray-900/80 rounded-lg justify-between p-2'>

                    <span className='text-sm truncate w-[88%]  '>machikney randi ko xoro mugi aaija</span>
                    <Bars3Icon className='w-6' />


                </div>

                
            </div>

            {/* users info */}
            <div className='fixed bg-black bottom-0 w-full'>
                <div className="flex items-center justify-between rounded-lg p-2 cursor-pointer transition-all ease-in-out duration-100 hover:bg-gray-900/80   ">
                    <span className='space-x-2 flex items-center'>
                        <img src={logo} alt="img" className='w-7' />
                        <span className='text-sm '>New chat</span>
                    </span>


                </div>


            </div>



        </div>
    )
}

export default Sidebar