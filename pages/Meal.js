import App from '../App.js'

import getData from '../functions/getData.js'
import addElement from '../functions/addElement.js'

export default class Meal {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.app = new App()
        this.root = this.app.root
        this.urlParams = this.app.urlParams
        this.id = this.urlParams.get('id')
        this.url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`

        this.meal = addElement('div', this.root, {classes: ['mealContainer']})
    }

    initEvents() {
        this.getMeal()
    }

    getMeal() {

        getData(this.url)
        .then((result) => {
            if (!result.meals) return
            this.mealData = result.meals[0]
            this.createMeal()
            this.createIngredients()
        })
    }

    createMeal() {
        addElement('h1', this.meal, {text: this.mealData.strMeal})
        addElement('img', this.meal, {src: this.mealData.strMealThumb})
        addElement('p', this.meal, {text: `Category : ${this.mealData.strCategory}`})
        addElement('p', this.meal, {classes: ['instructions'], text: this.mealData.strInstructions})
    }

    createIngredients() {

        const ingredients = addElement('ul', this.meal)
        const numberOfIngredients = 20

        for (let i = 1; i <= numberOfIngredients; i++) {
            if (!this.mealData[`strIngredient${i}`]) return
            const ingredient = addElement('li', ingredients)

            addElement('p', ingredient, {classes: ['ingredient'], text: this.mealData[`strIngredient${i}`]})
            addElement('p', ingredient, {classes: ['measure'], text: this.mealData[`strMeasure${i}`]})
        }
    }


}