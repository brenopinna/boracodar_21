export class DOMElement {
  constructor(type, classNames, ...options) {
    const element = document.createElement(type)
    classNames.forEach((className) => element.classList.add(className))
    options.forEach((option) => {
      const [attr, value] = Object.entries(option)[0]
      element[attr] = value
    })

    return element
  }
}
