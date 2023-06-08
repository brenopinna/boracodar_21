import { createItem } from "./utils/createItem.js"

export function setProductImageAlt(item) {
  const productName = item.querySelector(".name").title
  const productImage = item.querySelector(".product-image")
  productImage.alt = productName
}

export function appendItemsToTheDocument(items) {
  const DOMItems = items.map(createItem)
  DOMItems.forEach((DOMItem) => {
    document.querySelector("main").appendChild(DOMItem)
  })
}

function getTotalProductsAmount() {
  return Array.from(document.querySelectorAll(".item")).reduce((acc, item) => {
    return (acc += parseInt(item.dataset.amount))
  }, 0)
}

export function updateTotalProductsAmount() {
  document.getElementById("products-total-amount").textContent = getTotalProductsAmount()
}

export function updateSingleProductAmount(span, item) {
  span.textContent = item.dataset.amount
}

function getTotalProductsValue() {
  return Array.from(document.querySelectorAll(".item")).reduce((acc, item) => {
    return (acc += parseInt(item.dataset.amount) * parseInt(item.dataset.price))
  }, 0)
}

export function updateTotalProductsValue() {
  document.getElementById("products-total-value").textContent = formatMoney(
    getTotalProductsValue(),
  )
}

export function formatMoney(value) {
  return parseInt(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })
}
