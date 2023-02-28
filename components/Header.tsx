import { FcCalendar } from 'react-icons/fc';

type Props = {
    onClick: () => void
}

const Header = ({ onClick }: Props) => {
    return(
        <header className='flex justify-between px-10 py-4 bg-yellow-200'>
                <div>

                </div>

                <div className='text-5xl font-semibold flex'>
                    <FcCalendar />
                    <h1>TaskManager</h1>
                </div>

                <button onClick={onClick} className='text-base font-medium p-3 rounded bg-neutral-100 border border-black'>
                    Add task
                </button>
        </header>
    )
}

export default Header