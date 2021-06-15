import { MemberService } from './../services/member.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UnauthenGuard implements CanActivate {
    constructor(private service: MemberService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return new Promise(resolve => {
            this.service
                .getMemberLogon()
                .subscribe(memberLogin => {
                    if (!memberLogin) return resolve(true);
                    resolve(false);
                });
        });
    }
}
