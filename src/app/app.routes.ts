import { Routes } from '@angular/router';
import { couterPageComponent } from './pages/counter/counter-page.componer';
import { HeroPageComponent } from './pages/home/hero-page.componer';
import { DragonbollComponent } from './Components/shared/dragonboll/dragonboll.component';

export const routes: Routes = [
{
  path:'',
  component:couterPageComponent,

},

{
  path: 'hero',
  component: HeroPageComponent,
},{
  path: 'dragonboll',
  component: DragonbollComponent,
},
{
  path: '**',
  redirectTo:'',
}
];
