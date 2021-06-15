import { Observable } from 'rxjs';
import { IMember, RegisterModel, LoginModel } from './../interfaces/member.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    constructor() { }

    private memberItems: IMember[] = [];
    private memberLogin: IMember;

    /** สำหรับแสดงข้อมูลสมาชิกทั้งหมด */
    getMembers() {
        return new Observable<IMember[]>(observ => {
            observ.next(this.memberItems);
        });
    }

    /** สำหรับสมัครสมาชิก */
    onRegister(value: RegisterModel) {
        return new Observable(observ => {
            setTimeout(() => {
                // เช็คค่าซ้ำ
                if (this.memberItems.find(m => m.username == value.username))
                    return observ.error({ message: 'มีผู้ใช้งานนี้ในระบบแล้ว!' });

                // สร้าง Model ใหม่
                const model: IMember = {
                    id: Math.random(),
                    firstname: value.firstname,
                    lastname: value.lastname,
                    username: value.username,
                    password: value.password
                };

                // เก็บไว้ใน Array
                this.memberItems.push(model);
                // callback ออกไป
                observ.next(model);
            }, 500);
        });
    }

    /** สำหรับการเข้าสู่ระบบ */
    onLogin(value: LoginModel) {
        return new Observable(observ => {
            setTimeout(() => {

                const memberLogin = this.memberItems.find(member => {
                    return member.username == value.username && member.password == value.password;
                });

                if (!memberLogin) return observ.error({ message: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง !!!' });
                this.memberLogin = memberLogin;
                observ.next(this.memberLogin);

            }, 500);
        });
    }

    /** ดึงข้อมูลสมาชิกที่เข้าสู่ระบบ */
    getMemberLogon(): Observable<IMember> {
        return new Observable<IMember>(observ => {
            setTimeout(() => {
                observ.next(this.memberLogin);
            }, 500);
        });
    }

    /** ออกจากระบบ เคลียค่า memberLogin */
    onLogout() {
        return new Observable(observ => {
            setTimeout(() => {
                this.memberLogin = null;
                observ.next(this.memberLogin);
            }, 500);
        });
    }
}
