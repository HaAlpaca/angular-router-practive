import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { map, Observable, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { CheckDeactivate } from "../check-deactivate";

@Injectable({
  providedIn: "root",
})
export class ArticlesGuard
  implements
    CanActivate,
    CanActivateChild,
    CanLoad,
    CanDeactivate<CheckDeactivate>
{
  constructor(private readonly authService: AuthService) {}
  canDeactivate(
    component: CheckDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> {
    return component.checkDeactivate(currentRoute, currentState, nextState);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.currentUser.pipe(map((user) => !!user));
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const targetSlug = childRoute.paramMap.get("slug");
    if (!targetSlug) return of(false);
    return this.authService.currentUser.pipe(
      map((user) => user?.articles.includes(targetSlug))
    );
  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return of(false);
  }
}
