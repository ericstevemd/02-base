import { Component, signal } from '@angular/core';

interface Character{
    id :number;
  name :string;
  power:number;
}

@Component({
  selector: 'app-dragonboll',
  imports: [],
  templateUrl: './dragonboll.component.html',
  styleUrl: './dragonboll.component.css'
})
export class DragonbollComponent {
 characters =signal<Character[]>([

   { id:1, name: 'goku',power:9001},
   { id:2, name: 'vegeta ',power:9001},
   { id:3, name: 'piccolo',power:9001},
 ]);
}
