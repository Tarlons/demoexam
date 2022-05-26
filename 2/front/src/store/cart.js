import { makeAutoObservable } from "mobx";

class Cart {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  price = this.cart.reduce((a, b) => a + b.quantity * b.price, 0)||0;
  constructor() {
    makeAutoObservable(this);
  }
  addCart(item) {
    console.log(item);
    if (!this.cart.some((i) => i.id === item.id) || !this.cart.length) {
      item.quantity = 1;
      this.cart.push(item);
    } else {
      this.cart.forEach((i) => {
        if (item.max_quantity === i.quantity) return alert("Максимальное кол-во на складе");
        return i.id === item.id ? (i.quantity += 1) : null;
      });
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.price = this.cart.reduce((a, b) => a + b.quantity * b.price, 0);
  }
}
export default new Cart();
