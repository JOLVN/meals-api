import App from '../App.js'

import addElement from './addElement.js'

export default (result) => {
    const app = new App()
    const content = app.content
    const pageName = 'meal'

    const meals = addElement('div', content, { classes: ['meals'] })

    for (const meal of result) {
        const card = addElement('a', meals, {classes: ['card'], href: `${location.hash}?page=${pageName}&id=${meal.idMeal}`})
        addElement('h2', card, {classes: ['title'], text: meal.strMeal})
        addElement('p', card, {classes: ['category'], text: meal.strCategory})
        addElement('img', card, {src: meal.strMealThumb})
    }
}