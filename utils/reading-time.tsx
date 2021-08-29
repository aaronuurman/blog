export const readingTime = (content: string): number => {
    const words_per_second: number = 275 / 60
    let imagesCount: number = 0
    const regex: RegExp = /\w/

    let wordsCount: number = content.split(' ').filter((word: string) => {
        if (word.includes('<img')) {
            imagesCount += 1
        }
        return regex.test(word)
    }).length

    let imageAdjust: number = imagesCount * 4
    let imageSecs: number = 0
    let imageFactor: number = 12

    while (imagesCount) {
        imageSecs += imageFactor
        if (imageFactor > 3) {
            imageFactor -= 1
        }
        imagesCount -= 1
    }

    return Math.ceil(((wordsCount - imageAdjust) / words_per_second + imageSecs) / 60)
}
