// Generates a URL friendly name
// web tech -> webTech
const camelize = (text: string) => {
    return text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return '' // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase()
    })
}

export default camelize
