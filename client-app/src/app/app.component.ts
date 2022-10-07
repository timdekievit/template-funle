import { Component, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { CandidateStore } from './services/candidateStore';

@Component({
  selector: 'funle-portal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy {
  title = 'template-funle';
  isIntroPage = false;
  loggedIn = true;
  
  pageTitle$ = '';
  showBack$ = false;

  private backSegments: string[] = [];
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private route: Router) {
    this.route.events.pipe(
      takeUntil(this.destroy$),
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        const url = event.urlAfterRedirects?.substring(1);
        const segments = url?.split('/');
        segments.pop();
        return segments;
      }),      
    ).subscribe(segments => {
      this.backSegments = segments;
    });
  }

  private destroy$ = new Subject<boolean>();
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  

  // constructor(private route: Router) {
  //   this.route.events.subscribe(event => {
  //     if (event instanceof GuardsCheckStart) {
  //       this.isAuthenticating = true;
  //     } else if (event instanceof GuardsCheckEnd || event instanceof NavigationCancel) {
  //       this.isAuthenticating = false;
  //     } else if (event instanceof NavigationError) {
  //       this.isAuthenticating = false;
  //       this.error = true;
  //     }
  //   });
  //   this.route.events.pipe(
  //     takeUntil(this.destroy$),
  //     filter(event => event instanceof NavigationEnd),
  //     map((event: NavigationEnd) => {
  //       const url = event.urlAfterRedirects?.substring(1);
  //       const segments = url?.split('/');
  //       segments.pop();
  //       return segments;
  //     }),      
  //   ).subscribe(segments => {
  //     this.backSegments = segments;
  //   });
  // }

  onBack() {
    // if (this.backSegments.length > 0) {
    //   this.route.navigate(this.backSegments);
    // } else {
    //   this.route.navigate(['dashboard']);
    // }
  }

  menuOpen(open: boolean): void {
    this.sidenav.toggle();
  }
}
