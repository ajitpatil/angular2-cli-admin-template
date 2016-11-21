import { Component, OnInit}    from '@angular/core';
import { Router }               from '@angular/router';
import {ChartDataService} from '../services/chart-data.service'
import { Observable } from 'rxjs/Observable';
@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    isDataAvailable : boolean = false;
    constructor( private router: Router, private chartDataService: ChartDataService ) {
        //this.getChartData();
        this.isDataAvailable=true;
        console.log("loading..");
    }

    chartData : number[];
    ngOnInit():void {

    }

    public getChartData():void{
      this.chartDataService.getChartData().then(chartData =>
        {this.chartData=chartData
          console.log("chart Data :" + this.chartData);
          this.lineChart4Data=[
              {
                  data: this.chartData,
                  label: 'Series A'
              }
          ];
          this.isDataAvailable=true;
        });
    }


    public brandPrimary:string =  '#20a8d8';
    public brandSuccess:string =  '#4dbd74';
    public brandInfo:string =     '#63c2de';
    public brandWarning:string =  '#f8cb00';
    public brandDanger:string =   '#f86c6b';

    //convert Hex to RGBA
    public convertHex(hex:string,opacity:number){
        hex = hex.replace('#','');
        let r = parseInt(hex.substring(0,2), 16);
        let g = parseInt(hex.substring(2,4), 16);
        let b = parseInt(hex.substring(4,6), 16);

        let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return rgba;
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    // lineChart4
    public lineChart4Data:Array<any> ;
    public lineChart4Labels:Array<any> = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    public lineChart4Options:any = {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                display:false,
                points:false,
            }],
            yAxes: [{
                display:false,
            }]
        },
        elements: { point: { radius: 0 } },
        legend: {
            display: false
        }
    };
    public lineChart4Colours:Array<any> = [
        {
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
            borderWidth: 2
        }
    ];
    public lineChart4Legend:boolean = false;
    public lineChart4Type:string = 'line';



}
