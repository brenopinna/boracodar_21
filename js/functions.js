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
