import {HomeComponent} from './components/home/home.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrendingComponent} from './components/trending/trending.component';
import {DetailComponent} from "./components/detail/detail.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
