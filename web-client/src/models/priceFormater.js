export const formater = (price) => {
    /**let tempPrice = price.toString()
    let newPrice = []

    for(let i = tempPrice.length, j = 1; i > -1; i--, j++){
        newPrice.unshift(tempPrice.charAt(i))
        console.log(j)
        if(j % 3){
            newPrice.unshift(' ')
        }
    }
    return newPrice.join().replace(new RegExp(',', 'g'), '')**/
    return price
}