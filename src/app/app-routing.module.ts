import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',      //this route for home page
    redirectTo: '/home',
    //component: MycvComponent,
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: 'full',  
  },
  {
    path: '**',
    component: PagenotfoundComponent
  } 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
