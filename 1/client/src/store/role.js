import { makeAutoObservable } from 'mobx'

class Role {
	isAdmin = false

	constructor() {
		makeAutoObservable(this)
	}
	getRole() {
		this.isAdmin = localStorage.getItem('role') === 'admin' ? true : false
	}
}
export default new Role()
