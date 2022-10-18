export default (elementType, parent, {text = '', classes = [], src = '', href = '', type = '', placeholder = ''} = {}) => {
    const element = document.createElement(elementType)
    if (text) element.innerText = text
    if (classes) {
        for (const _class of classes) {
            element.classList.add(_class)
        }
    }
    if (src) element.src = src
    if (href) element.href = href
    if (type) element.type = type
    if (placeholder) element.placeholder = placeholder
    parent.appendChild(element)
    return element
}