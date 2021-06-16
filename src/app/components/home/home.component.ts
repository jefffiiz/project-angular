import { IjsonPlaceholder } from './../../interfaces/http-client.interface';
import { Service2Service } from './../../services/service2.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(
        private service2: Service2Service
    ) {
        this.initalLoadServiceData();
    }

    isShowWorkshop: boolean = this.service2.getShowWorkshop();
    items: IjsonPlaceholder[] = [];

    ngOnInit() {
        this.service2
            .getJsonPlaceholderAPI()
            .subscribe(items => {
                this.items = items;
            });
    }

    // เชื่อมต่อกับ Server ของ Workshop
    private initalLoadServiceData() {
        this.service2
            .isShowWorkshopSubject
            .subscribe(data => {
                this.isShowWorkshop = data;
            });
    }
}
