import gpay from './accs/gpay.png'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

const activityReastaurantCafe = '🍕', 
activitySport = '🏀', 
activityTravel = '🚉', 
activityMarket = '🛒',
activityIncome = '💰'; 

const activity1 = 'Proper Gym AS',
activity2 = 'Stallen Restaurant',
activity3 = 'Hemsedal Cafe',
activity4 = '7-Eleven',
activity5 = 'Rent',
activity6 = 'Train Ticket'

const date1 = "10 May 2021 18:10",
date2 = "8 May 2021 14:20",
date3 = "5 May 2021 12:54",
date4 = "3 May 2021 09:56",
date5 = "2 May 2021 10:32",
date6 = "1 May 2021 09:32";

const amount1 = '-125.45',
amount2 = '-454',
amount3 = '-52.42', 
amount4 = '-54.51',
amount5 = '+3657.54',
amount6 = '-78.45';

const accOwner = 'Puffyy'
const cash = 280;
const moneyType = '$' 

const CurrentAcc = () => {
          return (
        <div className='currentAcc relative flex flex-col flex-wrap flex-shrink-0 m-0 p-2 w-96 min-h-full'>
            <div className='flex flex-col h-full m-0 w-full rounded-lg'>               
                {/* Account Preview */ }
                <div className='accPre flex flex-col h-52 shadow-lg from-blue-50 via-yellow-100 to-red-50 
                    bg-gradient-to-r rounded-xl m-2 p-2 cursor-default'>
                    <img src={gpay} alt='gpay_acc' className='accImg my-1 mx-auto p-1 h-24 border-none'/>
                    <h1 className='mb-auto text-center text-xl font-semibold'>{accOwner}</h1>
                    <p className='pl-2'> {cash} {moneyType} </p>
                <div>
                    <p className='mb-0 pl-2 text-xs '> Cash </p>
                </div>
                </div>
                {/* Switch Account */}
                <div className='flex my-2'>
                    <select className='shadow flex mx-2 my-0 px-2 w-full h-9 bg-white dark:bg-gray-900 dark:text-white 
                            focus:bg-gray-200 focus:outline-none rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 
                            cursor-pointer'>
                        <option >Google Pay</option>
                        <option>PayPal</option>
                        <option>Credit Card</option>
                    </select>
                    <div className='pointer-evetflex s-auto'>
                    </div>
                </div>
                {/* Recent Activities */}
                <div className='recAct flex flex-col items-center m-auto p-2 w-full dark:text-white cursor-default'>
                    <div className='flex flex-col m-auto py-2 w-full shadow rounded-lg bg-gray-50 dark:bg-gray-800'>
                        <div className='flex m-0 p-2 justify-between dark:bg-gray-800'>
                        <h2>Recent Activities</h2>
                        <a href='/#AllActivities'>All &gt;</a>         
                    </div>
                
                    <table className='flex flex-col mx-2 mb-2 h-96 bg-white shadow rounded-lg dark:bg-gray-900'>
                    <tbody className='flex flex-col justify-between w-full h-full m-auto text-sm'>
                        <tr className='flex items-center justify-between h-full border-b-8 border-gray-50 
                            dark:border-gray-800 text-start'>
                            <td className='px-2 w-12'>{activitySport}</td>
                            <td className='actName px-2 w-full'>{activity1}<br/>
                                <span className='actDate text-xs'>{date1}</span>
                            </td>
                            <td className='px-2 '>{amount1}</td>
                        </tr>
                        <tr className='flex items-center justify-between h-full border-b-8 border-gray-50 
                            dark:border-gray-800 text-start'>
                            <td className='px-2 w-12'>{activityReastaurantCafe}</td>
                            <td className='actName px-2 w-full'>{activity2}<br/>
                                <span className='actDate text-xs'>{date2}</span>
                            </td>
                            <td className='px-2 '>{amount2}</td>
                        </tr>
                        <tr className='flex items-center justify-between h-full border-b-8 border-gray-50 
                            dark:border-gray-800 text-start'>
                            <td className='px-2 w-12'>{activityReastaurantCafe}</td>
                            <td className='actName px-2 w-full'>{activity3}<br/>
                                <span className='actDate text-xs'>{date3}</span>
                            </td>
                            <td className='px-2 '>{amount3}</td>
                        </tr>
                        <tr className='flex items-center justify-between h-full border-b-8 border-gray-50 
                            dark:border-gray-800 text-start'>
                            <td className='px-2 w-12'>{activityMarket}</td>
                            <td className='actName px-2 w-full'>{activity4}<br/>
                                <span className='actDate text-xs'>{date4}</span>
                            </td>
                            <td className='px-2 '>{amount4}</td>
                        </tr>
                        <tr className='flex items-center justify-between h-full border-b-8 border-gray-50 
                            dark:border-gray-800 text-start'>
                            <td className='px-2 w-12'>{activityIncome}</td>
                            <td className='actName px-2 w-full'>{activity5}<br/>
                                <span className='actDate text-xs'>{date5}</span>
                            </td>
                            <td className='px-2'>{amount5}</td>
                        </tr>
                        <tr className='flex items-center text-start justify-between h-full'>
                            <td className='px-2 w-12'>{activityTravel}</td>
                            <td className='actName px-2 p-2 w-full'>{activity6}<br/>
                                <span className='actDate text-xs'>{date6}</span>
                            </td>
                            <td className='px-2'>{amount6}</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                </div>
                {/* Help */}             
                <div className='helpflex self-end m-2 text-lg dark:text-white'>
                    <a href='/#' className='helpText flex m-0 py-1 px-5 shadow rounded-full bg-white 
                        hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600 cursor-pointer'>
                        <ContactSupportIcon></ContactSupportIcon>
                        <p className='px-2'>Help</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CurrentAcc
