import Axios from 'axios'

const Client = Axios.create({ baseURL: 'https://api.themoviedb.org' })

export default Client