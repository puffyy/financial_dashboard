import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SearchIcon from '@material-ui/icons/Search';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {useState, useEffect} from 'react'

const Header = () => {

    //ThemeColor Func
    const [theme, setTheme] = useState('light');
    const colorTheme = theme === 'light' ? 'dark' : 'light';
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    // eslint-disable-next-line
    }, [theme]);
   
    return (
        <header className='relative flex justify-between m-0 p-0 min-w-max w-full h-14 bg-gray-50 dark:bg-gray-900'>
            <div className='header-dash flex self-end items-center mx-0 py-1 px-3 h-10 dark:text-white cursor-default' >
                <DashboardIcon fontSize='large'></DashboardIcon>
                <p className='pl-3 pr-1 text-xl'>Dashboard</p>
            </div>

            <nav className='header-nav flex self-end items-centerm-0 pr-3 pb-2 space-x-4 h-10'>
                {/* Search Box */}
                <div className='relative search-bar '>
                    <input
                        className='search m-0 pl-2 pr-8 h-8 rounded-lg shadow-md text-sm 
                            focus:outline-none focus:ring-2 focus:ring-gray-100'
                        type='search' name='search' placeholder='Search...' />
                    <button type='submit' className='search-icon absolute m-0 px-2 top-1 right-1 text-gray-600 rounded-lg  
                            focus:outline-none hover:bg-gray-50' >
                        <SearchIcon></SearchIcon>
                    </button>
                </div>

                {/*Select Language */}
                <div className='relative m-auto py-1 px-2 h-8 rounded-lg shadow-md bg-white text-base hover:bg-gray-100 
                            dark:bg-gray-900 dark:text-white dark:hover:bg-gray-600 cursor-pointer'>
                    <a href='/#TR'>EN</a>
                </div>

                {/* Notifications */}
                <div className='relative m-auto py-1 px-2 h-8 rounded-lg shadow-md bg-white text-gray-800 
                            hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-600 cursor-pointer'>
                    <NotificationsIcon></NotificationsIcon>
                </div>
                
                {/* Dark Mode */}
                <button onClick={() => setTheme(colorTheme)}
                    className='relative m-auto py-1 px-2 h-8 rounded-lg shadow-md bg-white text-gray-800
                            hover:bg-gray-100 focus:outline-none dark:bg-gray-900 dark:text-white dark:hover:bg-gray-600 
                            cursor-pointer'>
                    <Brightness4Icon></Brightness4Icon>
                </button>
            </nav>            
        </header>
    )
}

export default Header
