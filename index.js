import { items } from "./js/db/items.js"
import { appendItemsToTheDocument, setProductImageAlt } from "./js/functions.js"

appendItemsToTheDocument(items)

document.querySelectorAll(".item").forEach((item) => {
  setProductImageAlt(item)
})
