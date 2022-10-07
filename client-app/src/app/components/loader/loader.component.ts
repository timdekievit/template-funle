import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loadingService';

@Component({
  selector: 'funle-portal-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {

  constructor(public loadingService: LoadingService) {

  }
  
}
