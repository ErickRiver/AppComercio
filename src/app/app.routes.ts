import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', component: AppComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        ProductosComponent,
        ContactoComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: []
})
export class AppModule { }