export class Book {

    public data:any;

    setBook(data:any){
        this.data = data;
        let dataModel = {
            "id":data.id,
            "title":data.title,
            "price":data.price,
            "cover":data.cover,
            "description":data.description
        }
        return dataModel;
    }
}
