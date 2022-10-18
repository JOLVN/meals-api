import App from '../App.js'

import addElement from './addElement.js'

export default (result) => {
    const app = new App()
    const root = app.root
    const pageName = 'category'

    const categories = addElement('div', root, { classes: ['categories'] })

    for (const category of result) {
        const card = addElement('a', categories, {classes: ['card'], href: `${location.hash}?page=${pageName}&name=${category.strCategory}`})
        addElement('h2', card, {classes: ['title'], text: category.strCategory})
        addElement('img', card, {src: category.strCategoryThumb})
        addElement('p', card, {classes: ['category'], text: category.strCategoryDescription})
    }
}