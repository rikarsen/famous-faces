import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { _throw } from "rxjs/observable/throw";
import 'rxjs/add/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};
const apiUrl = "http://localhost:3000/famous-faces";

/*
  Generated class for the FamousFacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FamousFacesProvider {

  constructor (public http: HttpClient) {
    console.log('Hello FamousFacesProvider Provider');
  }

  public create (data): Observable<any> {
    const url = `${apiUrl}`;
    return this.http.post(url, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public findAll (): Observable<any> {
    return this.http.get(apiUrl, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  public findOne (id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  public update (id: string, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public delete (id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return _throw('Something bad happened; please try again later.');
  }

  private extractData (res: Response) {
    let body = res;
    return body || {};
  }
}
