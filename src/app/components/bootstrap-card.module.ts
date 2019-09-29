import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {CardComponent} from "./card/card.component";
import {LandingComponent} from "./landing/landing.component";
import {BootstrapTemplateComponent} from './bootstrap-template/bootstrap-template.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CardComponent,
    LandingComponent,
    BootstrapTemplateComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    NgbModule
  ]
})
export class BootstrapCardModule {
}
