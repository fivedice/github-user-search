import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatInputModule, MatListModule } from '@angular/material';

const MATERIAL_MODULES = [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatListModule
];


@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MyMaterialModule { }
