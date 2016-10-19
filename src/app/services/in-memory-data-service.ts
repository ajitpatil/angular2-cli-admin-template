import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let chartdata=[
      100, 100, 80, 90, 100, 100, 100
    ];
    return {chartdata};
  }
}
