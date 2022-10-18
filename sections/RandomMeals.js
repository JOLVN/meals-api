import App from '../App.js'

import getData from '../functions/getData.js'
import shuffleArray from '../functions/shuffleArray.js'
import createMealCards from '../functions/createMealCards.js'

export default class RandomMeals {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.app = new App()
        this.content = this.app.content
        this.url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    }

    initEvents() {
        this.getMeals()
    }

    getMeals() {
        getData(this.url)
        .then((result) => {
            if (!result.meals) return

            const numberOfMealsToDisplay = 3
            const shuffledArray = shuffleArray(result.meals)
            const newArray = shuffledArray.slice(0, numberOfMealsToDisplay)
            createMealCards(newArray)
        })
    }


}