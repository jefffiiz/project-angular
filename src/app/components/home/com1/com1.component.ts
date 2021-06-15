import { Service2Service } from './../../../services/service2.service';
import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { IForm } from "src/app/interfaces/form.interface";

@Component({
    selector: 'app-com1',
    templateUrl: './com1.component.html',
    styleUrls: ['./com1.component.css']
})
export class Com1Component implements OnInit {
    formData: IForm;

    constructor(private service2: Service2Service) { }

    async ngOnInit() {

        try {
            this.formData = await this.service2.getPromiseFormData();
        }
        catch (error) { alert(error.message); }

        // this.service2.getPromiseFormData()
        //     .then(data => {
        //         this.formData = data;
        //     })
        //     .catch(error => {
        //         alert(error.message);
        //     });
    }
}