/* Find object within array with a specific id */
export const getObjById = (id, contentArray) => {
    let obj = ''
    contentArray.forEach(content => {
        if (content.id === id) {
            obj = content
        }
    })

    return obj
}