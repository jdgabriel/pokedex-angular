import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, ListComponent],
  exports: [HeaderComponent, SearchComponent, ListComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class SharedModule {}
