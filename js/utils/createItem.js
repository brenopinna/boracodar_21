import { DOMElement } from "./DOMElement.js"
import { formatMoney } from "../functions.js"

export function createItem(item) {
  const container = new DOMElement("div", ["item"])

  const maxNameLength = 47
  const initialAmount = 1
  container.dataset.amount = initialAmount
  container.dataset.price = item.price

  const productImage = new DOMElement("img", ["product-image"], { src: item.imageUrl })

  const infoContainer = new DOMElement("div", ["product-info"])

  const productName = new DOMElement(
    "span",
    ["name"],
    {
      textContent:
        item.name.length > maxNameLength
          ? item.name.substring(0, maxNameLength).trim().concat("...")
          : item.name,
    },
    { title: item.name },
  )

  const productTotal = new DOMElement("div", ["product-total"])

  const productValue = new DOMElement("span", ["product-value"], {
    textContent: formatMoney(item.price),
  })

  const productAmount = new DOMElement("span", ["product-amount"])

  const subButton = new DOMElement("button", ["sub"])
  const addButton = new DOMElement("button", ["add"])

  const subIcon = new DOMElement("i", ["ph", "ph-minus"])
  const amount = new DOMElement("span", [], { textContent: initialAmount })
  const addIcon = new DOMElement("i", ["ph", "ph-plus"])

  subButton.appendChild(subIcon)
  addButton.appendChild(addIcon)

  productAmount.appendChild(subButton)
  productAmount.appendChild(amount)
  productAmount.appendChild(addButton)

  productTotal.appendChild(productValue)
  productTotal.appendChild(productAmount)

  infoContainer.appendChild(productName)
  infoContainer.appendChild(productTotal)

  container.appendChild(productImage)
  container.appendChild(infoContainer)

  return container
}
