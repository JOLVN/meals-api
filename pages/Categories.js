import App from '../App.js'

import getData from '../functions/getData.js'
import createCategoriesCards from '../functions/createCategoriesCards.js'

export default class Categories {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.app = new App()
        this.root = this.app.root
        this.url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    }

    initEvents() {
        this.getCategories()
    }

    getCategories() {

        getData(this.url)
            .then((result) => {
            if (!result.categories) return
            createCategoriesCards(result.categories)
        })
    }


}