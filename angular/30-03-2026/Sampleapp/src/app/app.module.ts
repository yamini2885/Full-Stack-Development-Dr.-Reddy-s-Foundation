import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com31032026Component } from './com31-03-2026/com31-03-2026.component';
import { Com01042026Component } from './com01-04-2026/com01-04-2026.component';
import { FormsModule } from '@angular/forms';
import { Com02042026Component } from './com02-04-2026/com02-04-2026.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { NavbarComponent } from './com02-04-2026/navbar/navbar.component';
import { HomeComponent } from './com02-04-2026/home/home.component';
import { AboutComponent } from './com02-04-2026/about/about.component';
import { ServicesComponent } from './com02-04-2026/services/services.component';
import { GalleryComponent } from './com02-04-2026/gallery/gallery.component';
import { ContactComponent } from './com02-04-2026/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    Com31032026Component,
    Com01042026Component,
    Com02042026Component,
    CustomPipePipe,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
