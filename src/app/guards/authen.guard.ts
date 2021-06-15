import { MemberService } from 'src/app/services/member.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenGuard implements CanActivate {
    constructor(private service: MemberService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return new Observable(observ => {
            this.service
                .getMemberLogon()
                .subscribe(memberLogin => {
                    if (memberLogin) return observ.next(true);
                    observ.next(false);
                });
        });
    }
}
