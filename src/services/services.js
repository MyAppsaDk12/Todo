export const addToArray = (list, item) => {
    if (!list.includes(item)) {
        return [...list, item]
    }
    return list
}


export const removeFromArray = (list, item) => {
    const index = list.indexOf(item);
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)]
}

export const changeValueInArrayMedia = (list, id, media) => {
    return list.map((item) => {
        if (item.id === id) {
            return {...item, properties: {...item.properties, ...media}}
        } else {
            return item
        }
    })

}