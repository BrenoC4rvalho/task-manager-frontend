 import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

const api = {

    async getAll() {
        let response = await instance.get(`/taskmanager`);
        return response.data;
    },

    async create(task: string, responsible: string, status: string, deadline: Date) {
        let response = await instance.post(`/taskmanager`, {
            task, responsible, status, deadline
        });
        return response.data;

    },

    async getUnique(id: number) {
        let response = await instance.get(`/taskmanager/${id}`);
        return response.data;
    },

    async update(id: number, task: string, responsible: string, status: string, deadline: Date) {
        let response = await instance.put(`/taskmanager/${id}`, {
            task, responsible, status, deadline
        });
        return response.data;
    },

    async destroy(id: number) {
        let response = await instance.delete(`/taskmanager/${id}`);
        return response.data;
    }




}

export default api;