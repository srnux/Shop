import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { map, tap, catchError  } from 'rxjs/operators';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private baseUrl = 'https://localhost:44390/api/product';

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {

        return this.http.get<IProduct[]>(this.baseUrl)
        .pipe(
          tap(
              data => console.log('getProducts: ' + data)
            ),
          catchError(this.handleError<IProduct[]>('getProducts', []))
        );
        // return this.http.get(this.baseUrl)
        //     .map(this.extractData)
        //     .do(data => console.log('getProducts: ' + JSON.stringify(data)))
        //     .catch(this.handleError);
    }

    // getProduct(id: number): Observable<IProduct> {
    //     if (id === 0) {
    //     return Observable.of(this.initializeProduct());
    //     // return Observable.create((observer: any) => {
    //     //     observer.next(this.initializeProduct());
    //     //     observer.complete();
    //     // });
    //     };
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.get(url)
    //         .map(this.extractData)
    //         .do(data => console.log('getProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // deleteProduct(id: number): Observable<Response> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });

    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.delete(url, options)
    //         .do(data => console.log('deleteProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // saveProduct(product: IProduct): Observable<IProduct> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });

    //     if (product.id === 0) {
    //         return this.createProduct(product, options);
    //     }
    //     return this.updateProduct(product, options);
    // }

    // private createProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
    //     product.id = undefined;
    //     return this.http.post(this.baseUrl, product, options)
    //         .map(this.extractData)
    //         .do(data => console.log('createProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // private updateProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
    //     const url = `${this.baseUrl}/${product.id}`;
    //     return this.http.put(url, product, options)
    //         .map(() => product)
    //         .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }

    // private extractData(response: Response) {
    //     let body = response.json();
    //     return body.data || {};
    // }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

    initializeProduct(): IProduct {
        // Return an initialized object
        return {
            id: 0,
            productName: null,
            productCode: null,
            tags: [''],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    }
}
