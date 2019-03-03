// qualquer arquivo que recebe ou exporta dados de serviços externos

import axios from 'axios'

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' })

export default api;