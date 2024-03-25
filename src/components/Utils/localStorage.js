
const getStored = (key) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
}

const saveToReadList = (bookId) => {
    const readList = getStored('readlist');
    if (!readList.includes(bookId)) {
        readList.push(bookId);
        localStorage.setItem('readlist', JSON.stringify(readList));
    }
}

const saveToWishlist = (bookId) => {
    const wishlist = getStored('wishlist');
    if (!wishlist.includes(bookId)) {
        wishlist.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
}

const removeFromWishlist = (bookId) => {
    const wishlist = getStored('wishlist');
    const updatedWishlist = wishlist.filter(id => id !== bookId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
}

export {getStored,saveToReadList,saveToWishlist,removeFromWishlist}