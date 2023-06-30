import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSliderModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTableModule
    ],
    exports:[
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatSliderModule,
        MatSelectModule,
        MatDialogModule,
        MatProgressBarModule,
        MatTableModule
    ]
})
export class MaterialModule { }
