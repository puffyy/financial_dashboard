import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Progress from "./charts/CircularBalanceBar/CircularBalanceBar"
import Graph from "./charts/FinancialSankeyFlowChart/FinancialSankeyFlowChart"
import DatePicker from "./DatePicker"


const Console = () => {
    const income = '11500';
    const expense = '4561';
    const balance = '50451';

    return (
        <div className='console relative flex flex-col flex-grow flex-wrap flex-shrink m-auto p-0 w-full h-full cursor-default'>
            <div className='balance flex justify-center space-x-36 my-5 w-full dark:text-white'>
                <div className='balancePre flex flex-col justify-center items-center w-80 h-full'>
                    
                    {/* Balance Preview */}
                    <div className=' flex flex-col justify-center items-center m-5 w-full font-merienda font-bold'>
                        <h1 className='m-1 text-xl'>BALANCE</h1>
                        <p className='text-3xl'><AttachMoneyIcon fontSize='large'/>{balance}</p>
                    </div>
                    <div className='flex w-full font-bold'>
                        <div className='flex flex-col items-center justify-center space-y-2 w-2/4'>
                            <h2 className='font-merienda'>Income</h2>
                            <p className='font-arima text-green-800 text-base'>{income}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center space-y-2 w-2/4'>
                            <h2 className='font-merienda'>Expense</h2>
                            <p className='font-arima text-red-800 text-base'>{expense}</p>
                        </div>
                    </div>
                </div>
                
                {/* Balance Chart */}
                <div className='balancePro'>
                    <Progress />
                </div>
            </div>
            
            {/* Date Picker */}
            <div className='datepicker mx-auto my-10'><DatePicker /></div>
            
            {/* Sankey Diagram */}
            <div className='salkey responsive flex flex-col mx-0 my-auto p-0 items-center w-full h-auto'>
                <Graph />
            </div>
        </div>
    )
}

export default Console


