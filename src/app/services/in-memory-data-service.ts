import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let chartdata=[
      100, 105, 80, 50, 95, 110, 100
    ];
    return {chartdata};
  }
}
