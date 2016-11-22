import { Component, OnInit }        from '@angular/core';
import { Timeframe}         from '../model/timeframe';

@Component({
    templateUrl: 'charts.component.html'
})
export class ChartsComponent implements OnInit {

    constructor() { }

    ngOnInit(){
      this.selectedTimeframe = this.timeframes[3];
    }

    public timeframes : Timeframe[] = [{name:'Last 2 hours',value:'-2h'},{name:'Last 4 hours',value:'-4h'},
                                        {name:'Last 8 hours',value:'-8h'},{name:'Today',value:'midnight'},
                                        {name:'Last 1 Day',value:'-1d'},{name:'Yesterday',value:'midnight-1d'},
                                        {name:'Last 1 Week',value:'-1w'},{name:'Last 2 weeks',value:'-2w'}
                                      ];

    selectedTimeframe: Timeframe;

    timeChange (t:any):void{
      console.log("inside : " + t);
      this.selectedTimeframe = t;
    }

}
