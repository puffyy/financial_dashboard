import {useState} from 'react'

const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
        '24', '25', '26', '27', '28', '29', '30', '31'];

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'];

const years = ["1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003",
        "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2020",
        "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028",
        "2029", "2030"];


const DatePicker = () => {
    // Declate state / setState of day, month, year
    const [day, setDay] = useState(new Date().getDate())
    const [month, setMonth] = useState(monthNames[new Date().getMonth()])
    const [year, setYear] = useState(new Date().getFullYear())        

    // Day pick func
    const handleChangeDay = (e) => {
        setDay(e.target.value)
        console.log(`date changed to ${day}`)
    }

    // Month pick func
    const handleChangeMonth = (e) => {
        setMonth(e.target.value)
        console.log(`month changed to ${month}`)
    }

    // Year pick func
    const handleChangeYear = (e) => {
        setYear(e.target.value)
        console.log(`year changed to ${year}`)
    }

    return (
        <div className='flex space-x-5 text-white dark:text-black'>
            <select value={day} onChange={handleChangeDay} 
                    className='shadow m-0 p-2 rounded-lg bg-black dark:bg-white hover:bg-gray-200 
                    focus:outline-none'>
                {/* Create multiple day options by mapping */}
                {days.map((day) => <option key={day}>{day}</option>)}
            </select>
            <select value={month} onChange={handleChangeMonth}                    
                    className='shadow m-0 p-2 rounded-lg bg-black dark:bg-white hover:bg-gray-200 
                    focus:outline-none'>
                {/* Create multiple month options by mapping */}
                {monthNames.map((month) => <option key={month}>{month}</option>)}
            </select>
            <select value={year} onChange={handleChangeYear}
                    className='shadow m-0 p-2 rounded-lg bg-black dark:bg-white hover:bg-gray-200 
                    focus:outline-none'>
                {/* Create multiple year options by mapping */}
                {years.map((year) => <option key={year}>{year}</option>)}
            </select>
        </div>
    )
}

export default DatePicker
