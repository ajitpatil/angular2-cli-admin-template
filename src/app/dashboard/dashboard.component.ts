import { Component, OnInit}    from '@angular/core';
import { Router }               from '@angular/router';
import {PeopleService} from '../services/people-service'
import {Person} from '../model/person';
import { Observable } from 'rxjs/Observable';
@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    isDataAvailable : boolean = false;
    constructor( private router: Router, private peopleService: PeopleService ) {
        //this.getChartData();
        this.isDataAvailable=true;
        console.log("loading..");
    }

    people : Person[] =[];
    ngOnInit():void {
      this.peopleService
      .getAll()
      .subscribe(p => this.people = p)
      console.log(this.people);
    }




}
