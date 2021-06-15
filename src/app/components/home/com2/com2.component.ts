import { Service2Service } from './../../../services/service2.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-com2',
    templateUrl: './com2.component.html',
    styleUrls: ['./com2.component.css']
})
export class Com2Component {

    constructor(
        private builder: FormBuilder,
        private service2: Service2Service
    ) {
        this.createFormData();
    }

    /** สำหรับเก็บค่าฟอร์ม */
    form: FormGroup;

    /** ทำให้ปุ่มเปลี่ยนเป็นกำลังโหลดหากว่ามีการบันทึกข้อมูล */
    submitLoading: boolean = false;

    /** ฟังชั่นปิดหน้า Workshop */
    onClose() {
        this.service2.setShowWorkshop(false);
    }

    /** เพิ่มเบอร์โทรใหม่ */
    onAddPhone() {
        const phoneArray = this.getPhonesForm;
        phoneArray.push(this.createPhoneControl());
    }

    /** ลบเบอร์โทร */
    onRemovePhone() {
        const phoneArray = this.getPhonesForm;
        if (phoneArray.length <= 1) return;
        phoneArray.removeAt(phoneArray.length - 1);
    }

    /** บันทึกข้อมูล */
    async onSubmit() {
        this.form.get('sex').markAsTouched();
        this.form.get('firstname').markAsTouched();
        this.form.get('lastname').markAsTouched();
        this.getPhonesForm.controls.forEach(control => control.markAsTouched());

        if (this.form.invalid) return;

        this.submitLoading = true;
        try {
            await this.service2.onPromiseSaveFormData(this.form.value);
            console.log('Save successful.');
        }
        catch (error) {
            alert(error.message);
        }
        this.submitLoading = false;

        // this.submitLoading = true;
        // this.service2
        //     .onPromiseSaveFormData(this.form.value)
        //     .then(() => {
        //         console.log('Save successful.');
        //     })
        //     .catch(error => {
        //         alert(error.message);
        //     })
        //     .finally(() => {
        //         this.submitLoading = false;
        //     });
    }

    /** ดึงข้อมูลเบอร์โทรที่อยู่ใน FormArray */
    get getPhonesForm() {
        const formArray = this.form.get('phones') as FormArray;
        return formArray;
    }

    /** สร้างฟอร์ม */
    private createFormData() {
        this.form = this.builder.group({
            sex: [null, Validators.required],
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            phones: this.builder.array([this.createPhoneControl()])
        });
    }

    /** สร้าง Phone Control Form */
    private createPhoneControl() {
        return this.builder.control(null, [
            Validators.required,
            Validators.pattern(/^[0-9]{10}$/)
        ]);
    }

}