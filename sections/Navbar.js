import App from '../App.js'
import addElement from '../functions/addElement.js'

export default class NavBar {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        this.app = new App()
        this.root = this.app.root
        this.pages = this.app.pages
    }

    initEvents() {
        this.createNavbar()
    }

    createNavbar() {

        this.navbar = addElement('ul', this.root, {classes: ['navbar']})
        for (const page of this.pages) {
            const href = page.id === 'home' ? '/index.html' : `${location.hash}?page=${page.id}`
            const li = addElement('li', this.navbar)
            addElement('a', li, {text: page.title, href })
        }

    }

}