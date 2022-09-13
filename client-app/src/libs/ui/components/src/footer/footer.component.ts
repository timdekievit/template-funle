import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

export interface ILegal {
  text: string;
  url: string;
}

export interface ISocial {
  text: string;
  url: string;
  icon: string;
}

export interface IContact {
  text: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'funle-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() public showLegals = false;
  @Input() public showSocials = false;
  @Input() public year = new Date().getFullYear();

  public legals: ILegal[] = [
    {
      text: 'Privacy Statement',
      url: '/privacy-statement',
    },
  ];

  public socials: ISocial[] = [
    {
      text: 'Deel funle op Facebook',
      icon: 'fa fa-facebook',
      url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A//funle.nl',
    },
    {
      text: 'Deel funle op Twitter',
      icon: 'fa fa-twitter',
      url: `https://twitter.com/intent/tweet?text=Stop%20de%20torenhoge%20tarieven%20die%20intermediairs%20vragen%20aan%20freelancers%20op%20https%3A//funle.nl`,
    },
    {
      text: 'Deel funle op LinkedIn',
      icon: 'fa fa-linkedin',
      url: 'https://www.linkedin.com/sharing/share-offsite/?url=https%3A//funle.nl',
    },
    {
      text: 'Deel funle via e-mail',
      icon: 'fa fa-envelope',
      url: `mailto:?subject=Doe%20je%20ook%20mee%20met%20funle?&body=Stop%20de%20torenhoge%20tarieven%20die%20intermediairs%20vragen%20op%20https://funle.nl`,
    },
  ];

  public contacts: IContact[] = [
    {
      text: '3e Binnenvestgracht 23, 2312 NR Leiden',
      icon: 'fa fa-map-marker',
      url: `https://www.google.com/maps/place/3e+Binnenvestgracht+23,+2311+NV+Leiden/`,
    },
    {
      text: '071-5414471',
      icon: 'fa fa-phone',
      url: `tel:0715414471`,
    },
    {
      text: 'info@funle.nl',
      icon: 'fa fa-envelope',
      url: `mailto:info@funle.nl`,
    },
  ];

  public isMobile$ = this.breakpointObserver
    .observe([Breakpoints.TabletPortrait, Breakpoints.Handset])
    .pipe(map(({ matches }) => matches));

  constructor(private breakpointObserver: BreakpointObserver) {}

}
