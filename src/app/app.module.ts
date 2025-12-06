import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

import { NavbarComponent } from './navbar/navbar.component';
import { FernkampfComponent } from './fernkampf/fernkampf/fernkampf.component';
import { MappedSliderComponent } from './mapped-slider/mapped-slider.component';
import { ResultFernComponent } from './fernkampf/result-fern/result-fern.component';
import { ToggleCollapsableComponent } from './toggle-collapsable/toggle-collapsable.component';
import { AppendRangePipe } from './fernkampf/pipes/append-range.pipe';
import { ValueSliderComponent } from './value-slider/value-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FernkampfComponent,
    MappedSliderComponent,
    ResultFernComponent,
    ToggleCollapsableComponent,
    AppendRangePipe,
    ValueSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSliderModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatExpansionModule,
    FormsModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
