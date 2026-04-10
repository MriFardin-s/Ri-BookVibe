const getAllReadListFromLocalDB = () =>{

    const allReadList = localStorage.getItem('readList')
    // console.log(allReadList, 'ReadList From local DB')

    if (allReadList) return  JSON.parse(allReadList);
    return [];

}




const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();
    
    console.log("Current LocalDB:", allBooks);
    console.log("Adding Book ID:", book.bookId);

    const isAlreadyExist = allBooks.find(bk => bk.bookId == book.bookId); 

    if (!isAlreadyExist) {
        const updatedList = [...allBooks, book]; 
        localStorage.setItem("readList", JSON.stringify(updatedList));
        
    } else {
        alert("It Has Been Already in List!");
    }
};
    
        //ei data ta local db te add krte chai
        
    










export {getAllReadListFromLocalDB, addReadListToLocalDB}