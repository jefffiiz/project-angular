import { Service1Service } from './../../services/service1.service';
import { Service2Service } from './../../services/service2.service';
import { IForm } from './../../interfaces/form.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private service2: Service2Service) {
        this.service2
            .isShowWorkshopSubject
            .subscribe(data => {
                this.isShowWorkshop = data;
            });
    }

    isShowWorkshop: boolean = this.service2.getShowWorkshop();

    ngOnInit() { }
}
