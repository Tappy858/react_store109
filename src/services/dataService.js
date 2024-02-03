let catalog = [

    {
        "title" : "Orange",
        "category" : "fruit",
        "price" : 15.99,
        "image" : "oranges.jpg",
        "_id" : "1",
    },

];

class DataService{
    
    getProducts(){
        return catalog;
    }

}

export default DataService;