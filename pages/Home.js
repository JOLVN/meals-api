import App from '../App.js'

import Searchbar from '../sections/Searchbar.js'
import RandomMeals from '../sections/RandomMeals.js'
import addElement from '../functions/addElement.js'

export default class Home {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.app = new App()
        this.root = this.app.root
    }

    initEvents() {
        new Searchbar()
        new RandomMeals()
    }

}