import logo from '../assets/chatgpt.png'
import users from '../assets/users.png'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

const Home = () => {
    return (

        <div className="relative bg-[#343541] flex-1 p-4 font-sans text-white h-screen overflow-y-auto">
            <strong className="text-xl">ChatGPT</strong>
            {/* for body */}
            <div className='flex mt-[10%]  flex-col items-center'>
                <div className='flex items-center h-full justify-center  flex-col space-y-2'>
                    <img src={logo} alt="" srcset="" className='w-20' />
                    <span className='text-xl font-semibold'>How can I help you today?</span>
                </div>





            </div>

            {/* quick select */}

            <div className=' hidden md:hidden  justify-center items-center  '>
                <div className='space-y-2 py-12'>
                    <div className='flex flex-col md:flex-row space-x-0 space-y-2 md:space-y-0 md:space-x-2 '>
                        <div className='w-[22rem] border rounded-lg p-3 cursor-pointer hover:bg-gray-700/80'>
                            <span className='flex flex-col text-sm'>
                                <span className='text-gray-300 font-semibold'>Tell me a fact</span>
                                <span className='text-gray-500 font-semibold'>about pussy</span>
                            </span>

                        </div>

                        <div className='w-[22rem] border rounded-lg p-3  cursor-pointer hover:bg-gray-700/80'>
                            <span className='flex flex-col text-sm'>
                                <span className='text-gray-300 font-semibold'>Tell me a fact</span>
                                <span className='text-gray-500 font-semibold'>about pussy</span>
                            </span>

                        </div>



                    </div>

                    <div className='flex flex-col md:flex-row space-x-0 space-y-2 md:space-y-0 md:space-x-2 '>
                        <div className='w-[22rem] border rounded-lg p-3  cursor-pointer hover:bg-gray-700/80'>
                            <span className='flex flex-col text-sm'>
                                <span className='text-gray-300 font-semibold'>Tell me a fact</span>
                                <span className='text-gray-500 font-semibold'>about pussy</span>
                            </span>

                        </div>

                        <div className='w-[22rem] border rounded-lg p-3  cursor-pointer hover:bg-gray-700/80'>
                            <span className='flex flex-col text-sm'>
                                <span className='text-gray-300 font-semibold'>Tell me a fact</span>
                                <span className='text-gray-500 font-semibold'>about pussy</span>
                            </span>

                        </div>



                    </div>

                </div>











            </div>


            {/* chat styling */}
            {/* users */}
            <div className='mt-8 px-3 lg:px-16 xl:px-24 mb-5 font-mono '>
                {/* title */}
                <span className='flex items-center space-x-2'>
                    <img src={users} alt="" srcset="" className='w-7' />
                    <span className='text-white font-bold'>You</span>
                </span>

                {/* desc */}
                <p className='pl-9 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, dolorum! Quod deserunt earum voluptates. Quia, accusantium voluptatem mollitia nulla illo eveniet architecto quo facilis ipsa officiis. Nostrum illo doloremque est?
                    Enim temporibus repudiandae aperiam qui voluptatum reprehenderit odit quia, libero esse praesentium modi facilis cumque velit unde placeat? Inventore tempora, possimus provident eum pariatur voluptatem accusantium id laudantium asperiores modi?
                    Quae dolorem, aliquam numquam animi eligendi similique magnam totam laborum nulla! Quibusdam maxime culpa, nulla molestias sed perspiciatis natus ea nobis ipsa voluptas ducimus, aliquid recusandae tempora sint sit? Est!
                    Dolores corporis assumenda iusto praesentium exercitationem fuga tenetur dolorum cum commodi rem non cupiditate expedita a, ullam dolor blanditiis animi adipisci! Voluptates explicabo officiis porro sequi odit, quidem ea non?
                    Eum, in, minus corporis ipsam accusamus voluptas velit, delectus unde voluptate esse maiores magnam itaque deserunt provident labore neque nisi. Eaque beatae quia non possimus, illum ab laborum sunt architecto.
                    Nemo quam quia esse! Nulla dolorem voluptatum aut enim voluptatem, dicta provident accusantium hic fugit quis tempore eos dolorum animi. Id consectetur ab officia, autem dicta labore cupiditate voluptate optio?
                    Doloribus laborum quod consequuntur cumque illum repellat earum iusto rerum. Consequuntur sapiente iste enim blanditiis reiciendis, ut quibusdam, labore nemo ipsum repudiandae, ullam maiores nobis totam modi eaque possimus nisi!
                    Impedit libero cupiditate iure accusamus hic. Repellendus nam laudantium reprehenderit voluptatibus qui, amet debitis odit quos quibusdam reiciendis distinctio at! Ad dolore corrupti nostrum hic similique maiores reiciendis veniam voluptates?
                    Ducimus, ipsa expedita odit tenetur fuga reiciendis nam sit a dolorem officiis cupiditate aperiam sint placeat quam vero. Eos, quibusdam voluptatem fugiat et iure officia consequatur odio vel natus sse commodi quo.
                    Dicta fugiat nihil, quod corrupti sequi corporis. Cupiditate est quas reprehenderit necessitatibus tempora nostrum dignissimos, earum ratione aut deserunt quam, omnis explicabo, repellendus eum beatae quibusdam suscipit! Veritatis, earum in!</p>


            </div>
            {/* Ai */}
            <div className='mt-8 px-3 lg:px-16 xl:px-24 mb-5 font-mono '>
                {/* title */}
                <span className='flex items-center space-x-2'>
                    <img src={logo} alt="" srcset="" className='w-7' />
                    <span className='text-white font-bold'>ChatGPT</span>
                </span>

                {/* desc */}
                <p className='pl-9 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, dolorum! Quod deserunt earum voluptates. Quia, accusantium voluptatem mollitia nulla illo eveniet architecto quo facilis ipsa officiis. Nostrum illo doloremque est?
                    Enim temporibus repudiandae aperiam qui voluptatum reprehenderit odit quia, libero esse praesentium modi facilis cumque velit unde placeat? Inventore tempora, possimus provident eum pariatur voluptatem accusantium id laudantium asperiores modi?
                    Quae dolorem, aliquam numquam animi eligendi similique magnam totam laborum nulla! Quibusdam maxime culpa, nulla molestias sed perspiciatis natus ea nobis ipsa voluptas ducimus, aliquid recusandae tempora sint sit? Est!
                    Dolores corporis assumenda iusto praesentium exercitationem fuga tenetur dolorum cum commodi rem non cupiditate expedita a, ullam dolor blanditiis animi adipisci! Voluptates explicabo officiis porro sequi odit, quidem ea non?
                    Eum, in, minus corporis ipsam accusamus voluptas velit, delectus unde voluptate esse maiores magnam itaque deserunt provident labore neque nisi. Eaque beatae quia non possimus, illum ab laborum sunt architecto.
                    Nemo quam quia esse! Nulla dolorem voluptatum aut enim voluptatem, dicta provident accusantium hic fugit quis tempore eos dolorum animi. Id consectetur ab officia, autem dicta labore cupiditate voluptate optio?
                    Doloribus laborum quod consequuntur cumque illum repellat earum iusto rerum. Consequuntur sapiente iste enim blanditiis reiciendis, ut quibusdam, labore nemo ipsum repudiandae, ullam maiores nobis totam modi eaque possimus nisi!
                    Impedit libero cupiditate iure accusamus hic. Repellendus nam laudantium reprehenderit voluptatibus qui, amet debitis odit quos quibusdam reiciendis distinctio at! Ad dolore corrupti nostrum hic similique maiores reiciendis veniam voluptates?
                    Ducimus, ipsa expedita odit tenetur fuga reiciendis nam sit a dolorem officiis cupiditate aperiam sint placeat quam vero. Eos, quibusdam voluptatem fugiat et iure officia consequatur odio vel natus sse commodi quo.
                    Dicta fugiat nihil, quod corrupti sequi corporis. Cupiditate est quas reprehenderit necessitatibus tempora nostrum dignissimos, earum ratione aut deserunt quam, omnis explicabo, repellendus eum beatae quibusdam suscipit! Veritatis, earum in!</p>


            </div>


            {/* input item */}
            <div className='fixed bottom-0  bg-[#343541]  w-[90%] md:w-[62%] lg:w-[70%] xl:w-[80%] pl-3 lg:pl-14 lg:pr-10 xl:pl-24 xl:pr-20  '>
                <div className='flex justify-between px-2 border rounded-md mb-4 '>
                <input type="text" placeholder='Message Chatgpt' className='p-2 bg-transparent outline-none w-full   rounded-md' />
                <PaperAirplaneIcon className='w-5 cursor-pointer' />
                </div>
                
                {/* <div className=' bottom-6 w-[90%] lg:w-[70%] xl:w-[54%] lg:left-[50%] lg:translate-x-[-32%] border rounded-md flex justify-between px-2 cursor-pointer overflow-auto bg-[#343541] '>

                   
                   
                </div> */}

            </div>








        </div>


    )
}

export default Home