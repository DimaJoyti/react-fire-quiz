import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-fire.firebaseio.com/'
})