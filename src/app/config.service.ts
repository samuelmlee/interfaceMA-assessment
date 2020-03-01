import { Injectable } from '@angular/core';

const CONFIG_DB = {
  getHouses: '/api/programming-assessment-1.0/buildings'
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getUrl(api: string): string {
    return CONFIG_DB[api];
  }
}
