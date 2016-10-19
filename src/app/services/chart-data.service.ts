import {Injectable} from "@angular/core";

import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChartDataService{
  private heroesUrl = 'app/chartdata';
  private headers = new Headers({'Content-Type':'application/json'});
  constructor (private http:Http){}

  getChartData(): Promise<number[]>{
    return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response=> response.json().data as number[])
                .catch(this.handleError);

  }


  private handleError(error:any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message||error);
  }



}
