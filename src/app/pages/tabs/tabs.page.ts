import { Component } from '@angular/core';
import { AppearancesStore } from '../../stores/appearances.store';

@Component({
  selector: 'app-page-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(
    public appearnce: AppearancesStore,
  ) {}
}
