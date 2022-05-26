import { makeAutoObservable } from "mobx"

class Auth{
  user=localStorage.getItem('token')?true:false
  constructor(){
    makeAutoObservable(this)
  }
  addUser(item){
    localStorage.setItem('token',item)
    this.user=true
  }
  delUser(){
    localStorage.removeItem('token')
    this.user=false
  }
}
export default new Auth()