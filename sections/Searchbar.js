import App from '../App.js'

import RandomMeals from './RandomMeals.js'

import getData from '../functions/getData.js'
import createMealCards from '../functions/createMealCards.js'
import addElement from '../functions/addElement.js'
import debounce from '../functions/debounce.js'

export default class Searchbar {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.app = new App()
        this.root = this.app.root
        this.home = this.app.home
        this.url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    }

    initEvents() {
        this.createSearchbar()
    }

    createSearchbar() {
        const searchbar = addElement('div', this.root, {classes: ['searchbar']})
        const input = addElement('input', searchbar, {type: ['text'], placeholder: 'Search a meal'})
        this.search(input)
    }

    search(input) {
        input.onkeyup = debounce(() => {
            // Display 3 random meals if page home
            if (input.value == '' && this.app.home) {
                this.clearContent()
                new RandomMeals()
            }
            // Display result meals
            else {
                this.getMeals(input.value)
            }
        }, 150)
    }

    getMeals(value) {
        getData(this.url + value)
        .then((result) => {
            if (!result.meals) return
            this.clearContent()
            this.createMeals(result.meals)
        })
    }

    clearContent() {
        this.content = this.app.content
        if (this.content) {
            this.content.innerHTML = ""
        }
    }

    createMeals(meals) {
        createMealCards(meals)
    }


}