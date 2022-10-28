import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private title: string = "";
  private devName: string = "";
  private role: string = "";

  public getDevName(): string {
    return this.devName;
  }
  public setDevName(value: string) {
    this.devName = value;
  }
  public getRole(): string {
    return this.role;
  }
  public setRole(value: string) {
    this.role = value;
  }

  public getTitle(): string {
    return this.title;
  }
  public setTitle(value: string) {
    this.title = value;
  }

  constructor() { }
}
