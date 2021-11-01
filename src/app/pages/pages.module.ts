import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { SharedModule } from '../shared/shared.module';

// Routing
import { PagesRoutingModule } from './pages-routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ImageDimensionsDirective } from '../directive/image-dimensions.directive';

@NgModule({
  declarations: [HomeComponent, DetailsComponent, ImageDimensionsDirective],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
