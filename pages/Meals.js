import App from '../App.js'

import Searchbar from '../sections/Searchbar.js'

import getData from '../functions/getData.js'
import createMealCards from '../functions/createMealCards.js'

export default class Meals {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.app = new App()
        this.root = this.app.root
        this.url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    }

    initEvents() {
        new Searchbar()
        this.getMeals()
    }

    getMeals() {
        getData(this.url)
        .then((result) => {
            if (!result.meals) return
            this.createMeals(result.meals)
        })
    }
    
    createMeals(meals) {
        createMealCards(meals)
    }


}