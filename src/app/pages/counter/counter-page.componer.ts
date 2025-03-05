import { Component, signal } from "@angular/core";
import { count } from "rxjs";



@Component({
templateUrl: './counter-page.componer.html',
styleUrl: './counter-page.componer.css',
})

export class couterPageComponent{
couter =15;
couterSignal=signal(15);

increasseby (value: number){
  this.couter+=value;
  this.couterSignal.update((current)=>current-value)
}


desminuncion (value :number){
  this.couter-=value;
  this.couterSignal.update((current)=>current-value)
}


resetiara (){
this.couter=15
this.couterSignal.set(15)
}

}
