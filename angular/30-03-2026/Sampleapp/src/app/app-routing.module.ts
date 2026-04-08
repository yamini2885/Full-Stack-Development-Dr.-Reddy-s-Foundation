import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './com02-04-2026/home/home.component';
import { AboutComponent } from './com02-04-2026/about/about.component';
import { ServicesComponent } from './com02-04-2026/services/services.component';
import { GalleryComponent } from './com02-04-2026/gallery/gallery.component';
import { ContactComponent } from './com02-04-2026/contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServicesComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
