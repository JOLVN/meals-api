import App from '../App.js'

import Searchbar from '../sections/Searchbar.js'

import getData from '../functions/getData.js'
import addElement from '../functions/addElement.js'
import createMealCards from '../functions/createMealCards.js'

export default class Category {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.app = new App()
        this.root = this.app.root
        this.urlParams = this.app.urlParams
        this.strCategory = this.urlParams.get('name')
        this.url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.strCategory}`

        this.category = addElement('div', this.root, {classes: ['category']})
    }

    initEvents() {
        this.setTitle()
        this.getMeals()
    }

    setTitle() {
        addElement('h1', this.root, { text: this.strCategory })
    }

    getMeals() {

        getData(this.url)
            .then((result) => {
            if (!result.meals) return
            createMealCards(result.meals)
        })
    }


}