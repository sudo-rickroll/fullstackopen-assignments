import axios from "axios";

const baseURL = "http://localhost:3001/persons"

const getPersons = () => {
    return axios
            .get(baseURL)
            .then(response => response.data)
            .catch(error => error)
}

const createPerson = (newObject) => {
    return axios.post(baseURL, newObject).then(response => response.data).catch(error => error)
    }

const deletePerson = (id) => {
    return axios.delete(`${baseURL}/${id}`).then(response => response.data).catch(error => error)
}

const updatePerson = (id, updatedObject) => {
    return axios.put(`${baseURL}/${id}`, updatedObject).then(response => response.data).catch(error => error)
}

export default {
    getPersons,
    createPerson,
    deletePerson,
    updatePerson
}