import { useEffect, useState } from "react"
import { FcDisclaimer, FcExpired, FcManager, FcOvertime, FcTimeline } from "react-icons/fc"
import Task from "../types/Task"

type Props = {
    onClick: () => void
    btnEdit: (id: number, task: string, responsible: string, status: string, deadline: string) => void
    editTask: Task
}

const EditModal = ({ onClick, btnEdit, editTask }: Props) => {

    const [task, setTask] = useState('')
    const [deadline, setDeadline] = useState('')
    const [responsible, setResponsible] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        loadTask();
    })

    const loadTask = () => {
        setTask(editTask.task);
        setResponsible(editTask.responsible);
        setStatus(editTask.status);
        setDeadline(editTask.deadline.toString());
    }

    return (
        <div className="p-5 bg-sky-400 border border-black rounded w-fit">
            <div className="text-3xl mb-5 flex justify-between">
                <div></div>
                <p>{`Let's edit a task`}</p>
                <div>
                    <button onClick={onClick}>
                        <FcDisclaimer />
                    </button>
                </div>            
            </div>
            <div className="text-2xl">
                
                    <div className="flex items-center mb-3">
                        <label className="flex mr-2 items-center" htmlFor="task"><FcTimeline />Task</label>
                        <input className="w-80 rounded" type="text" id="task" required
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center mb-3">
                        <label className="flex mr-2 items-center" htmlFor="deadline"><FcOvertime />Deadline</label>
                        <input className="rounded" type="date" id="deadline" required
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                        />
                    </div>
               
                    <div className="flex items-center mb-3">
                        <label className="flex mr-2 items-center" htmlFor="responsible"><FcManager />Responsible</label>
                        <input className="rounded" type="text" id="responsible" required
                            value={responsible}
                            onChange={(e) => setResponsible(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center mb-3">
                        <label className="flex mr-2 items-center" htmlFor="status"><FcExpired />Status</label>
                        <input className="rounded" type="text" id="status" required 
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>
                
                
            </div>

            <div className="flex justify-end">
                <button className="p-3 bg-white border border-black rounded mx-3"
                    onClick={() => btnEdit(editTask.id, task, responsible, status, deadline)}
                >
                    To edit
                </button>
            </div>

        </div>
    )
}

export default EditModal