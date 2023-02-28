import Link from 'next/link'
import { FcOvertime, FcManager, FcTimeline, FcExpired } from 'react-icons/fc'
import Task from '../types/Task'

type Props = {
    onClick: (id: number) => void
    taskList: Task[] 
}

const Table = ({ onClick, taskList }: Props) => {
    return (
 
        <table className="w-full text-base text-left text-blakc">
            <thead className="text-xl text-white bg-sky-400 uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <div className='flex items-center'><FcTimeline/>Task</div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <div className='flex items-center'><FcManager />Responsible</div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <div className='flex items-center'><FcExpired />Status</div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <div className='flex items-center'><FcOvertime />Deadline</div>
                    </th>
                </tr>
            </thead>
            <tbody>
                    {taskList.map((task, index) => (
                        <tr key={index} className="bg-yellow-200 border border-y-zinc-400">
                            <td scope="row" className="px-6 py-4 font-medium  whitespace-nowrap">
                                <button onClick={() => onClick(task.id)}>
                                    {task.task} 
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                {task.responsible}
                            </td>
                            <td className="px-6 py-4">
                                {task.status}
                            </td>
                            <td className="px-6 py-4">
                                {task.deadline.toString()}
                            </td>
                        </tr>
                    
                    
                    ))}

                   
                    
            </tbody>
    </table>

    )
}

export default Table