import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SalaComponent } from './sala/sala.component';
import { SalaItemComponent } from './sala/sala-item/sala-item.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },


  {
    path: '', component: MainComponent, children: [
      { path: 'sala', component: SalaComponent },
      { path: 'sala/:action', component: SalaItemComponent },
    ]
  },


];
