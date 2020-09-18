import axios from 'axios'

export const register = newUser => {
  console.log(newUser)
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role
    })
    .then(response => {

      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password,
      role: user.role
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token)
      localStorage.setItem('userId', response.data.id)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const teacher = newExam => {
  console.log("userFunc",newExam)
  return axios
    .post('exams/teacher', {
      eid: newExam.eid,
      ename: newExam.ename,
      marks: newExam.marks,
      duration: newExam.duration,
      number: newExam.number,
      rows: newExam.rows,
      userId: newExam.userId
    })
    .then(response => {

      console.log('exam created')
    })
}
export const getExam = (id) => {
  return axios
    .get('exams/teacher/'+id, {
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}