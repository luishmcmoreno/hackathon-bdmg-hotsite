import { ServerService } from '@pluritech/server-service';
import { Injectable } from '@angular/core';

@Injectable()
export class CalculateService {

  private endpoint = 'http://bdmg-sandbox.pluritech.com.br/api';
  constructor(private serverService: ServerService) {
  }

  public getInvesmentValue(param: any): Promise<any> {
    return this.serverService.get(`${this.endpoint}/calc/`, param);
  }

}
