import Navbar from './sections/Navbar.js'
import Home from './pages/Home.js'
import Meals from './pages/Meals.js'
import Meal from './pages/Meal.js'
import Categories from './pages/Categories.js'
import Category from './pages/Category.js'

import addElement from '../functions/addElement.js'

let instance = null 

export default class App {

    constructor(_root) {

        //  Singleton
		if (instance) return instance
        instance = this
        
        this.root = _root
        
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.search = window.location.search
        this.urlParams = new URLSearchParams(window.location.search);
        this.content = document.createElement('div')
        this.content.classList.add('content')

        this.pages = [
            {
                id: 'home',
                title: 'Home'
            },
            {
                id: 'categories',
                title: 'Categories'
            },
            {
                id: 'meals',
                title: 'Meals'
            }
        ]
    }

    initEvents() {
        this.findActualPage()
        new Navbar()
        this.loadPage()
        this.setTitle()
        this.root.appendChild(this.content)
    }
    
    findActualPage() {
        this.actualPage = this.urlParams.get('page')
        if (!this.actualPage) this.actualPage = 'home'
    }

    loadPage() {
        switch (this.actualPage) {
            case 'meals':
                this.meals = new Meals()
                break;
            case 'meal':
                this.meal = new Meal()
            case 'categories':
                this.categories = new Categories()
            case 'category':
                this.category = new Category()
            default:
                this.home = new Home()
        }
    }

    setTitle() {
        const page = this.pages.find((page) => page.id == this.actualPage)
        if (!page) return
        addElement('h1', this.root, {text: this.pages.find((page) => page.id == this.actualPage).title})
    }

}