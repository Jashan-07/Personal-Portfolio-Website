import { useState } from 'react';
import './App.css';
import Main from './assets/Components/Main';

function App() {
    const [menu, setmenu]=useState(false);
    const [items, setitems]=useState(false);

    function MenuChange()
    {
        if(menu === false)
        {
            setmenu(true);
            setitems(true);
        }
        else
        {
            setmenu(false);
            setitems(false);
        }
    }

    function NameIcon(e)
    {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

  return (
    <>
      {/* <BrowserRouter> */}
        {/* Navbar */}
        <nav className='bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 w-full h-16 flex item-start justify-between border-2 border-purple-600 overflow-hidden sticky top-0 z-10'>
            <div className='flex items-center justify-center'>
                <div className='w-13 h-11 md:w-14 md:h-12 group bg-white rounded-md flex justify-center ml-3 items-center cursor-pointer shadow-lg shadow-black/30 hover:border hover:border-white hover:bg-indigo-400' onClick={(e) => NameIcon(e)}>
                    <p className='text-2xl font-bold text-indigo-500 group-hover:text-white px-3 py-1 transition-colors duration-300'>JT</p>  
                </div>
            </div>
                {/* Navbar items show in medium screen size */}
                <ul type="none" className='hidden md:block md:flex flex-row gap-4 text-md lg:text-lg items-center justify-center text-white font-semibold text-base'>
                    <li className='hover:opacity-90'><a href="#about">About</a></li>
                    <li className='hover:opacity-90'><a href="#skill">Skills</a></li>
                    <li className='hover:opacity-90'><a href="#tracer">Tracer</a></li>
                    <li className='hover:opacity-90'><a href="#project">Projects</a></li>
                    <li className='mr-3 hover:opacity-90'><a href="#contact">Contacts</a></li>
                </ul> 

                {/* Navbar menu icon button show only in small screen size */}
                {menu ? (
                <div className='md:hidden flex items-center mr-3'>
                    <button className='group flex items-center justify-center h-11 w-13 rounded-md bg-white shadow-lg shadow-black/30 cursor-pointer hover:border hover:border-white hover:bg-teal-400' onClick={() => MenuChange()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 group-hover:stroke-white transition-all duration-300 rotate-0 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                ) : (
                <div className='md:hidden flex items-center mr-3'>
                    <button className='group flex items-center justify-center h-11 w-13 rounded-md bg-white shadow-lg shadow-black/30 cursor-pointer hover:border hover:border-white hover:bg-teal-400' onClick={() => MenuChange()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 group-hover:stroke-white transition-all duration-300 rotate-180 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                )}
        </nav>

        {/* Navbar menu icon button items show on small screen size */}
        {items ? (
            // ADD ANIMATION IN IT.
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 w-full px-3 py-1 text-white text-md font-semibold transition-all duration-300 flex flex-row justify-between border-t-3 border-white fixed z-10'>
                <li type="none" className='hover:opacity-90'><a href="#about">About</a></li>
                <li type="none" className='hover:opacity-90'><a href="#skill">Skills</a></li>
                <li type="none" className='hover:opacity-90'><a href="#tracer">Tracer</a></li>
                <li type="none" className='hover:opacity-90'><a href="#project">Projects</a></li>
                <li type="none" className='hover:opacity-90'><a href="#contact">Contacts</a></li>
            </div>
            ): (
                ""
        )}

        {/* Main Section */}
        <Main className="scroll-smooth"/>

        {/* <Routes>
            <Route path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App