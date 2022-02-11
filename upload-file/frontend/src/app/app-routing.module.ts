import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';
import { ListFilesComponent } from './components/list-files/list-files.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'list-files', component: ListFilesComponent },
  { path: 'drop-down', component: DropDownComponent },
  { path: '', redirectTo: '/upload', pathMatch: 'full' },
  { path: '**', redirectTo: '/upload', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
