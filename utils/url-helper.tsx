const extractHost = (url: string) => {
    let match = url.match(/:\/\/(www[0-9]?\.)?(.[^.:]+)/i)
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2]
    } else {
        return null
    }
}

export default extractHost
