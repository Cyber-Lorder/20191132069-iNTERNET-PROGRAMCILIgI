import { ekipmanlarComponent } from './components/ekipmanlar/ekipmanlar.component';
import { ekipmanlarKayitComponent } from './components/ekipmanlarKayit/ekipmanlarKayit.component';

import { HikadminComponent } from './components/hikadmin/hikadmin.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';

import { UrunlerComponent } from './components/urunler/urunler.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { HakkimizdaComponent } from './components/hakkimizda/hakkimizda.component';
import { UyeloginComponent } from './components/uyelogin/uyelogin.component';


import { UyeregisterComponent } from './components/uyeregister/uyeregister.component';




@NgModule({
  declarations: [
    AppComponent,
    HikadminComponent,
    LoginComponent,
    KayitlarComponent,
    AnasayfaComponent,
    UrunlerComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    IletisimComponent,
    HakkimizdaComponent,
    FooterComponent,
    UyeloginComponent,
    UyeregisterComponent,
    ekipmanlarComponent,
    ekipmanlarKayitComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
