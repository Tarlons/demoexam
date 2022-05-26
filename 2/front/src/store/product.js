import { makeAutoObservable } from "mobx"
import http from "../http"

class Product{
  product = []
  constructor(){
    makeAutoObservable(this)
  }
  addItem(item){
    this.product = item
  }
  sortItem(value){
    if(value==="new") return this.product = this.product.sort((a,b)=>b.id-a.id)
    if(value==="year") return this.product = this.product.sort((a,b)=>b.year-a.year)
    if(value==="name") return this.product = this.product.sort((a,b)=>a.name-b.name)
    if(value==="price") return this.product = this.product.sort((a,b)=>a.price-b.price)
    console.log(JSON.stringify(this.product))
  }
  async sortCat(id){
    if(id==='all'){
      const values = await http.get('/product/')
      this.product = values.data
     
    }
    await http.get(`/product/cat/${id}`)
    .then((values)=>{
      this.product = values.data
    })
  }

  
}
export default new Product()