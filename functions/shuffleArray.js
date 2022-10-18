export default (array) => {
    let nb = array.length

    while (nb > 0) {
        const index = Math.floor(Math.random() * nb)
        nb--
        const temp = array[nb]
        array[nb] = array[index]
        array[index] = temp
    }
    
    return array
}