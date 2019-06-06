import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatToolbarModule,
            MatGridListModule, MatInputModule, MatCardModule, MatDividerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDialogModule, MatToolbarModule,
            MatGridListModule, MatInputModule, MatCardModule, MatDividerModule]
})
export class MaterialModule { }

// grid ni chahiye
// mat button mat check ccheck krlo