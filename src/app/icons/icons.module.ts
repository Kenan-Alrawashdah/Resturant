import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Camera,
  Heart,
  Github,
  AlignJustify,
  PlusSquare,
  Trash2,
  Edit,
  ArrowLeft,
  ArrowRight,
  Image,
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Camera,
  Heart,
  Github,
  AlignJustify,
  PlusSquare,
  Trash2,
  Edit,
  ArrowLeft,
  ArrowRight,
  Image,
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

