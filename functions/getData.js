// Get data from API
export default async (url) => {
    const response = await fetch(url)
    const result = await response.json()
    return result
}