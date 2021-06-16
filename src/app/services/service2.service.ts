import { IjsonPlaceholder } from './../interfaces/http-client.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IForm } from '../interfaces/form.interface';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class Service2Service {
    name: string = "Data by service 2.";
    private formData: IForm = new formData();
    private isShowWorkshop: boolean = false;
    public isShowWorkshopSubject = new Subject<boolean>();

    constructor(
        private httpClient: HttpClient
    ) { }


    /** ดึงข้อมูลจาก API (jsonplaceholder) */
    getJsonPlaceholderAPI() {
        return this.httpClient
            .get<IjsonPlaceholder[]>('https://jsonplaceholder.typicode.com/albums')
            .pipe(map(values => {
                return values;
            }))
    }

    /** ดึงข้อมูลสถานะการแสดงหน้า Workshop */
    getShowWorkshop(): boolean {
        return this.isShowWorkshop;
    }

    /** กำหนดค่าการแสดงหน้า Workshop */
    setShowWorkshop(status: boolean): void {
        this.isShowWorkshop = status;
        this.isShowWorkshopSubject.next(this.isShowWorkshop);
    }

    /** บันทึกข้อมูลใส่ตัวแปร formData */
    private onSaveFormData(form: IForm) {
        this.formData.firstname = form.firstname;
        this.formData.lastname = form.lastname;
        this.formData.sex = form.sex;
        this.formData.phones = form.phones;
    }

    /** ดึงข้อมูล FormData ผ่าน Observable */
    getObservFormData() {
        return new Observable<IForm>(observ => {
            setTimeout(() => {
                observ.next(this.formData);
            }, 100);
        });
    }

    /** บันทึกข้อมูล FormData ผ่าน Observable */
    onObservSaveFormData(form: IForm) {
        return new Observable(observ => {
            setTimeout(() => {
                if (form.firstname == 'Testing')
                    return observ.error({ message: 'ห้ามกรอกคำว่า "Testing"' });

                this.onSaveFormData(form);
                observ.next();
            }, 1000);
        });
    }

    /** ดึงข้อมูล FormData ผ่าน Promise */
    getPromiseFormData() {
        return new Promise<IForm>((resolve, reject) => {
            setTimeout(() => {
                resolve(this.formData);
            }, 100);
        });
    }

    /** บันทึกข้อมูล FormData ผ่าน Promise */
    onPromiseSaveFormData(form: IForm) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (form.firstname == 'Testing')
                    return reject({ message: 'ห้ามกรอกคำว่า "Testing"' });

                this.onSaveFormData(form);
                resolve();
            }, 2000);
        });
    }
}

class formData implements IForm {
    sex: string = 'ไม่มีข้อมูล !';
    firstname: string = 'ไม่มีข้อมูล !';
    lastname: string = 'ไม่มีข้อมูล !';
    phones: string[];
}
