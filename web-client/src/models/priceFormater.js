export const formater = (price) => {
    let newPrice = []
    const tempPrice = price.toString()
    for(let i = tempPrice.length; i > -1; i--){
        newPrice = [tempPrice[i], ...newPrice]
        if((tempPrice.length - i) % 3 === 0){
            newPrice = [" ", ...newPrice]
        }
    }
    return newPrice.join().replace(new RegExp(',', 'g'), '')
}