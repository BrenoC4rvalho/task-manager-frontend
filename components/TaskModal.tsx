import { FcDisclaimer, FcExpired, FcManager, FcOvertime, FcTimeline } from "react-icons/fc";
import Task from "../types/Task";

type Props = {
    task: Task
    onClick: () => void
    deleteTask: (id: number) => void
    openEditModal: (id: number) => void
}

const TaskModal = ({ task, onClick, deleteTask, openEditModal }: Props) => {
    return (
        <div className="p-5 bg-sky-400 border border-black rounded w-fit">
            <div className="flex justify-between text-3xl">
                <div></div>
                <h3>TASK</h3>
                <button onClick={onClick}>
                    <FcDisclaimer />
                </button>
            </div>
            <div className="text-2xl my-4">
                <div className="flex items-center mb-2">
                    <FcTimeline />
                    <p>{task.task}</p>
                </div>
                <div className="flex items-center mb-2">
                    <FcManager />
                    <p>{task.responsible}</p>
                </div>
                <div className="flex items-center mb-2">
                    <FcExpired />
                    <p>{task.status}</p>
                </div>
                <div className="flex items-center">
                    <FcOvertime />
                    <p>{task.deadline.toString()}</p>
                </div>
            </div>
            
            <div className="flex justify-end">
                <button className="p-3 bg-white border border-black rounded mx-3"
                    onClick={() => deleteTask(task.id)}
                >
                    delete
                </button>
                <button className="px-5 py-3 bg-white border border-black rounded"
                    onClick={() => openEditModal(task.id)}
                >
                    edit
                </button>
            </div>

        </div>
    )
}

export default TaskModal;