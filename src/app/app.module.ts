import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    AgGridModule.withComponents([]),
    MatChipsModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    PolicyManagementDashboardRoutingModule,
    AngularEditorModule,
    QuillModule,
    MatSidenavModule,
    PolicyTemplatesModule,
    MatGridListModule,
    UserIconModule,
    GenericCommentsModule,
    SelectedPoliciesStatusbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
