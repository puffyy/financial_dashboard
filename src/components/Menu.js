/* eslint-disable jsx-a11y/img-redundant-alt */
import profilePicture from './profile_pics/dreamcatcher.png'
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const Menu = () => {
    return (
        <div className='menu relative flex flex-col m-0 w-40'>
            <nav className='menu-nav flex flex-col m-0 p-0 min-h-full'>
                {/* Profile Picture | Acc Owner Text*/}
                <a href='/#ProfileSettings'>
                    <img src={profilePicture} alt='Profile Picture' 
                        className='mt-8 mx-auto p-1 w-28 h-28 pp shadow rounded-full cursor-pointer'/>
                </a>

                <p className='menuText flex justify-center mt-4 mb-0 p-1 border-b-2 dark:text-white cursor-default '>
                    Puffyy
                </p>

                {/* Menu */}
                <ul className="menu-items flex flex-col my-auto mx-0 justify-center space-y-8 font-sans text-lg 
                        dark:text-white">
                    <li className=''>
                        <a href='/#Home' className='flex items-center px-2 shadow rounded-full bg-white 
                            hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600 cursor-pointer'>
                            <HomeIcon></HomeIcon>
                            <p className='menuText pl-3'>Home</p>
                        </a>
 
                    </li>
                    <li className=''>
                        <a href='/#Mail' className='flex items-center px-2 shadow rounded-full bg-white  
                            hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600 cursor-pointer'>
                            <EmailIcon></EmailIcon>
                            <p className='menuText pl-3'>Mail</p>
                        </a>
                    </li>
                    <li className=''>
                        <a href='/#Statistics' className='flex items-center px-2 shadow rounded-full bg-white 
                            hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600 cursor-pointer'>
                            <TrendingUpIcon></TrendingUpIcon>
                            <p className='menuText pl-3'>Statistics</p>
                        </a>
                    </li>
                    <li className=''>
                        <a href='/#menuText' className='flex items-center px-2 shadow rounded-full bg-white 
                            hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600 cursor-pointer'>
                            <SettingsIcon></SettingsIcon>
                            <p className='menuText pl-3'>Settings</p>
                        </a>
                    </li>
                    <li className=''>
                        <a href='/#Logout' className='flex items-center px-2 shadow rounded-full bg-white 
                            hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600 cursor-pointer'>
                            <ExitToAppIcon></ExitToAppIcon>
                            <p className='menuText pl-3'>Logout</p>
                        </a>
                    </li>
                    <li className='menu-help opacity-0'>
                        <a href='/#Help' className='flex items-center px-2 shadow rounded-full bg-white 
                            hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600 cursor-pointer'>
                            <ContactSupportIcon></ContactSupportIcon>
                            <p className='menuText pl-3'>Help</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu

