import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { TestService } from './test.service';
import { CounterService } from './counter.service';
import { ObservablesComponent } from './observables/observables.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import { TestDirective } from './test.directive';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductsListComponent},
  { path: 'test', component: TestComponent},
  { path: 'observables', component: ObservablesComponent},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProductsListComponent,
    NavigationComponent,
    PageNotFoundComponent,
    ProductItemComponent,
    TestComponent,
    ObservablesComponent,
    TestPipe,
    TestDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: TestService, useClass: TestService }, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
