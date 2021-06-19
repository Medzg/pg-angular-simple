import { Ibook } from './../interface/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { typeSourceSpan } from '@angular/compiler';

@Injectable()

export class ApiService {

  public booksRoot: string = "http://localhost:3000/books";
  public usersApi:string="";
  public offersApi:string="";
  public apiRoot:string;
  public dataApi:string="";

  constructor(private _http:HttpClient) {}
  //Get Books
  getBooks():Observable<Object> {
    return this._http.get(this.booksRoot);
  }

  //addbook
  addBook(book:Ibook):boolean{
try {
  this._http.post(this.booksRoot,book).subscribe(e=>{


    return true;
  });
  return true;
} catch (error) {
  return false;
}


  }

  updateBook(book:Ibook):boolean{
    try {
      this._http.put(this.booksRoot + "/" + book.id,book).subscribe(e=>{


        return true;
      });
      return true;
    } catch (error) {
      return false;
    }


      }

  getBook(id:number):Observable<Object>{

    var pathNew = this.booksRoot + "/" + id ;

    return this._http.get(pathNew);
  }

  removeBook(id:number):boolean{


    try {

      var bookToDelete =  this.booksRoot + "/" + id;
      this._http.delete(bookToDelete).subscribe();
      return true;
    } catch (error) {
      return false;
    }
  }

  //Get commercial offers
  getoffers(offersApi):Observable<Object>{
    this.offersApi = offersApi;
    return this._http.get(this.offersApi);
  }
  //Get users
  getUsers(userRoot):Observable<Object>{
    this.usersApi = userRoot;
    return this._http.get(this.usersApi);
  }
  //Get data
  getData(apiRoot):Observable<Object>{
    this.dataApi = apiRoot;
    return this._http.get(this.dataApi);
  }
}
