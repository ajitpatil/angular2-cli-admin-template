import { Component, OnInit}    from '@angular/core';
import { Router }               from '@angular/router';
import {PeopleService} from '../services/people-service'
import {PoolDataService} from '../services/pool-data-service';
import {Person} from '../model/person';
import { Observable } from 'rxjs/Observable';
@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    isDataAvailable : boolean = false;
    constructor( private router: Router, private peopleService: PeopleService, private poolDataService : PoolDataService ) {
        //this.getChartData();
        this.isDataAvailable=true;
        console.log("loading..");
    }

    people : Person[] =[];
    poolData : any[] =[];
    ngOnInit():void {
      this.peopleService
      .getAll()
      .subscribe(p => this.people = p);
      console.log(this.people);

      this.poolDataService
      .getAll()
      .subscribe(response => {this.poolData = response;
        console.log(this.poolData);
      });

    }




}
