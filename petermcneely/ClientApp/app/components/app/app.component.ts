import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    private defaultPageTitle: string = 'Home';
    private endPageTitle: string = 'petermcneely';

    private routerSub$: Subscription;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private title: Title
    ) { }

    ngOnInit() {
        this.changeTitleOnNavigation();
    }

    ngOnDestroy() {
        this.routerSub$.unsubscribe();
    }

    private changeTitleOnNavigation() {
        this.routerSub$ = this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === 'primary')
            .mergeMap(route => route.data)
            .subscribe((event) => {
                const title = event['title']
                    ? `${event['title']} - ${this.endPageTitle}`
                    : `${this.defaultPageTitle} - ${this.endPageTitle}`;

                this.title.setTitle(title);
            });
    }
}
