import { MemberService } from 'src/app/services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    /** สร้างฟอร์ม */
    form: FormGroup;

    /** โหลดข้อมูลตอนกด Submit form */
    loading: boolean;

    constructor(
        private builder: FormBuilder,
        private service: MemberService,
        private router: Router
    ) {
        this.createFormData();
    }

    ngOnInit() {
    }

    /** ส่งข้อมูลเข้าสู่ระบบ */
    onSubmit() {
        this.form.get("username").markAsTouched();
        this.form.get("password").markAsTouched();
        if (this.form.invalid) return;

        this.loading = true;
        this.service
            .onLogin(this.form.value)
            .subscribe(
                member => {
                    this.loading = false;
                    this.router.navigate(['/', 'profile']);
                },
                error => {
                    alert(error.message);
                    this.loading = false;
                }
            );
    }

    /** สร้าง Form data */
    private createFormData() {
        this.form = this.builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}