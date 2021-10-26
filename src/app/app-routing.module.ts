import {HomeTabComponent} from './components/tabs/home-tab/home-tab.component';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrendingTabComponent} from './components/tabs/trending-tab/trending-tab.component';
import {DetailTabComponent} from './components/tabs/detail-tab/detail-tab.component';
import { SearchTabComponent } from './components/tabs/search-tab/search-tab.component';

const routes: Routes = [
  {path: 'home', component: HomeTabComponent},
  {path: 'trending', component: TrendingTabComponent},
  {path: 'detail/:id', component: DetailTabComponent},
  {path: 'search', component: SearchTabComponent},
  {path: '**', redirectTo: '/home-tab'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
