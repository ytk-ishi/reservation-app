import { Component, Inject, Renderer2, ElementRef, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { NavberComponent } from '../app/common/navbar/navber.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavberComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private routerSub!: Subscription;

  @ViewChild(NavberComponent)
  navbar!: NavberComponent;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef,
    public location: Location
  ) {}

  ngOnInit(): void {
    const navbar: HTMLElement =
      this.element.nativeElement.children[0].children[0];

    this.renderer.listen('window', 'scroll', () => {
      const number = window.scrollY || window.pageYOffset;
      if (number > 150) {
        navbar.classList.remove('navbar-transparent');
      } else {
        navbar.classList.add('navbar-transparent');
      }
    });

    // IE 対応（Paper Kit 用）
    const ua = window.navigator.userAgent;
    const trident = ua.indexOf('Trident/');
    let version: number | undefined;

    if (trident > 0) {
      const rv = ua.indexOf('rv:');
      version = parseInt(
        ua.substring(rv + 3, ua.indexOf('.', rv)),
        10
      );
    }

    if (version) {
      document.body.classList.add('ie-background');
    }
  }

  ngAfterViewInit(): void {
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (window.outerWidth > 991) {
          document.documentElement.scrollTop = 0;
        } else {
          document.activeElement?.scrollTo(0, 0);
        }
        this.navbar.sidebarClose();
      });
  }

  ngOnDestroy(): void {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  removeFooter(): boolean {
    let title = this.location.prepareExternalUrl(this.location.path());
    title = title.slice(1);

    return !(title === 'signup' || title === 'nucleoicons');
  }
}