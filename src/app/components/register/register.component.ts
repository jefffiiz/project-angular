import { MemberService } from './../../services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    /** เก็บข้อมูล Form data */
    form: FormGroup;

    /** โหลดข้อมูลเมื่อมีการกดสมัครสมาชิก */
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


    /** บันทึกข้อมูล */
    onSubmit() {
        this.form.get('firstname').markAsTouched();
        this.form.get('lastname').markAsTouched();
        this.form.get('username').markAsTouched();
        this.form.get('password').markAsTouched();
        if (this.form.invalid) return;
        this.loading = true;
        // ส่งข้อมูลไปบันทึก
        this.service
            .onRegister(this.form.value)
            .subscribe(
                member => {
                    this.router.navigate(['/', 'login']);
                    this.loading = false;
                },
                error => {
                    alert(error.message);
                    this.loading = false;
                });
    }

    /** สร้าง Form data */
    private createFormData() {
        this.form = this.builder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', [Validators.required, Validators.pattern(/^[A-z0-9]{3,10}$/)]],
            password: ['', [Validators.required, Validators.pattern(/^[A-z0-9]{3,10}$/)]],
            confirm: [false]
        });
    }

}
