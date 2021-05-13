import Menu from './Menu'
import Console from './Console'
import CurrentAcc from './CurrentAcc'

const Main = () => {
    return (
        <main className='relative flex flex-grow m-0 p-0 w-full h-full'>
            <Menu className=''/>
            <div className='main flex w-full'>
            <Console />
            <CurrentAcc />
            </div>
        </main>
    )
}

export default Main
