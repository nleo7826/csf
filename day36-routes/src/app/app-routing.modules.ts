import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  './components/home/home.component';
import { ElephantComponent } from './components/elephant/elephant.component';
import { TrexComponent } from './components/trex/trex.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'elephant', component: ElephantComponent },
    { path: 'trex', component: TrexComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }