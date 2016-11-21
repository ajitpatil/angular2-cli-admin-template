/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment }           from '../model/comment';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
    // private commentsUrl = 'http://localhost:3000/api/comments';
    private commentsUrl = 'https://scotch-http-api.herokuapp.com/api/comments';
    private employeeUrl = 'http://localhost.dev.ebay.com:8080/api/employee/10001';

     // Fetch all existing comments
     getComments() : Observable<Comment[]>{
         // ...using get request
         return this.http.get(this.commentsUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     getEmployee() : Observable<any>{
         // ...using get request
         return this.http.get(this.employeeUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => {
                           res.json();
                           console.log(res.json());
                         })
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }


}
