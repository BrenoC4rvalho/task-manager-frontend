import { useEffect, useState } from "react"
import EditModal from "../components/EditModal"
import Header from "../components/Header"
import ModalAdd from "../components/ModalAdd"
import Table from "../components/Table"
import TaskModal from "../components/TaskModal"
import api from "../services/api"
import Task from "../types/Task"

const Home = () => {

  const [modalAdd, setModalAdd] = useState(false);
  const [modalTask, setModalTask] = useState(false);
  const [modalEdit, setModalEdit] = useState(false)

  const [taskList, setTaskList] = useState<Task[]>();
  const [task, setTask] = useState<Task>();

  useEffect(() => {
    loadTaskList();
  }, [])

  const loadTaskList = async () => {
    const response: Task[] = await api.getAll();
    setTaskList(response);
  }

  const openModalTask = (id: number) => {
    loadTask(id);
    setModalTask(true);
  }

  const openEditModal = (id: number) => {
    setModalTask(false);
    setModalEdit(true);
  }

  const editTask = async (id: number, task: string, responsible: string, status: string, deadline: string) => {
    const date = new Date(deadline);
    await api.update(id, task, responsible, status, date);
    setModalEdit(false);
  }

  const addTask = async (task: string, responsible: string, status: string, deadline: string) => {
    const date = new Date(deadline);
    await api.create(task, responsible, status, date);
    setModalAdd(false);
  }

  const loadTask = async (id: number) => {
    const response: Task = await api.getUnique(id);
    setTask(response); 
  }

  const deleteTask = async (id: number) => {
    await api.destroy(id);
    setModalTask(false);
  }

  return (
    <div className="relative">
        <Header onClick={() => setModalAdd(true)}/>
        <main className="mt-8 mx-5">
          {taskList &&
            <Table onClick={openModalTask} taskList={taskList} />
          }
        </main>

        {modalAdd&&
          <div className="fixed top-0 left-0 z-50 h-screen w-full bg-opacity-60 bg-black">
            <div className="relative top-1/4 left-1/3">
                <ModalAdd onClick={() => setModalAdd(false)} btnAdd={addTask} />
            </div>
          </div>
        }

        {modalTask&&
          <div className="fixed top-0 left-0 z-50 h-screen w-full bg-opacity-60 bg-black">
            <div className="relative top-1/4 left-1/3">
                {task&&
                  <TaskModal onClick={() => setModalTask(false)} deleteTask={deleteTask}
                    task={task} openEditModal={openEditModal} 
                  />
                }
            </div>
          </div>
        }

        {modalEdit&&
          <div className="fixed top-0 left-0 z-50 h-screen w-full bg-opacity-60 bg-black">
            <div className="relative top-1/4 left-1/3">
              {task&&
                <EditModal btnEdit={editTask} onClick={() => setModalEdit(false)} editTask={task} /> 
              }
            </div>
         </div>

        }
    </div>
    
  )

}

export default Home
