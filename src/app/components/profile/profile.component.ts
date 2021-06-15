import { IMember } from './../../interfaces/member.interface';
import { MemberService } from 'src/app/services/member.service';
import { Component, OnInit } from '@angular/core';
import { IDeactivate } from 'src/app/guards/deactivate.guard';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    /** เก็บค่าผู้ใช้ที่ Login */
    member: IMember;
    /** เก็บค่าโหลดข้อมูลเมื่อมีการคลิกปุ่ม Logout */
    loading: boolean;

    constructor(
        private service: MemberService,
        private router: Router
    ) {
        this.initialLoadData();
    }

    /** ออกจากระบบ */
    onLogout() {
        this.loading = true;
        this.service
            .onLogout()
            .subscribe(() => {
                this.loading = false;
                this.router.navigate(['/', 'login']);
            });
    }

    /** โหลดข้อมูลเริ่มต้น */
    private initialLoadData() {
        this.service
            .getMemberLogon()
            .subscribe(memberLogin => {
                this.member = memberLogin;
            });
    }
}
