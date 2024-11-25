import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { SearchCatalogComponent } from './search-catalog/search-catalog.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'',redirectTo:'/search', pathMatch:'full'},
  {path:'search', component: SearchCatalogComponent},
  { path: 'catalog', component: CatalogComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class appRoutes{}
