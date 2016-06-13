import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  moduleId: module.id,
  selector: 'magnet-app',
  templateUrl: 'magnet.component.html',
  directives: [BannerComponent],
  styleUrls: ['assets/style/signal.css']
})
export class MagnetAppComponent {
  title = 'foo';
}
