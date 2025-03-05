import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({

  templateUrl: './hero-page.componer.html',
  imports:[UpperCasePipe]

})

export class HeroPageComponent {


  name =signal('Ironman');

  age = signal(45);
heroDescription = computed(()=> {
  const description =`${this.name()}-${this.age()}`
  return description;
});

capitalizzedName=computed(()=>this.name().toUpperCase())

changeHero() {
this.name.set('spiderman')
this.age.set(22)
}
getHeroDescription() {
return `${this.name()}-${this.age()}`
}
resetForm() {
  this.name.set('Ironman')
  this.age.set(45)
  }
  changeAge() {
this.name.set('Ironman');
this.age.set(45);

    }

}
