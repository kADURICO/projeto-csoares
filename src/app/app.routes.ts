import { Routes } from '@angular/router';
import { LoginCsoaresComponent } from './componentes/login-csoares/login-csoares.component';
import { HomeCsoaresComponent } from './componentes/home-csoares/home-csoares.component';

export const routes: Routes = [
    {path: '', component: LoginCsoaresComponent},
    {path: 'home', component: HomeCsoaresComponent}
];
