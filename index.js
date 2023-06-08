import { items } from "./js/db/items.js"
import {
  appendItemsToTheDocument,
  setProductImageAlt,
  updateSingleProductAmount,
  updateTotalProductsAmount,
  updateTotalProductsValue,
} from "./js/functions.js"

appendItemsToTheDocument(items)

document.querySelectorAll(".item").forEach((item) => {
  setProductImageAlt(item)
})

updateTotalProductsAmount()
updateTotalProductsValue()

document.querySelectorAll(".add").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentItem = btn.parentNode.parentNode.parentNode.parentNode
    const span = btn.parentNode.children[1]
    parentItem.dataset.amount = parseInt(parentItem.dataset.amount) + 1
    updateTotalProductsAmount()
    updateTotalProductsValue()
    updateSingleProductAmount(span, parentItem)
  })
})

document.querySelectorAll(".sub").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parentItem = btn.parentNode.parentNode.parentNode.parentNode
    const span = btn.parentNode.children[1]
    if (parentItem.dataset.amount > 1) {
      parentItem.dataset.amount = parseInt(parentItem.dataset.amount) - 1
      updateSingleProductAmount(span, parentItem)
    } else {
      confirm("Deseja excluir esse produto do seu carrinho?") && parentItem.remove()
    }
    updateTotalProductsValue()
    updateTotalProductsAmount()
  })
})
