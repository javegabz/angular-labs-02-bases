import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <hr>
    <h3>Counter : {{counter}}</h3>
    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="increaseBy(-1)" >-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public title:string = 'Mi primer APP de Angular';
  public value:number = 0;
  public counter:number= 10;

  increaseBy(value:number):void {
    console.log(value);
    this.counter += value;
    console.log(this.counter);
  }

}
1
