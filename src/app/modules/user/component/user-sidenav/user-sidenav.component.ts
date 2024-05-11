import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from "@angular/router";
import {PieChartComponent} from "../user-home/widgets/pie-chart/pie-chart.component";
import {TableDetailsComponent} from "../user-home/widgets/table-details/table-details.component";
import {UserFreshffoodComponent} from "../user-freshffood/user-freshffood.component";

@Component({
  selector: 'app-user-sidenav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterLink, PieChartComponent, TableDetailsComponent, UserFreshffoodComponent],
  templateUrl: './user-sidenav.component.html',
  styleUrl: './user-sidenav.component.scss'
})
export class UserSidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
