import { IMember } from './../../interfaces/member.interface';
import { MemberService } from 'src/app/services/member.service';
import { Service2Service } from './../../services/service2.service';
import { Service1Service } from './../../services/service1.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css'],
    providers: [Service1Service]
})
export class DataComponent {
    memberItems: IMember[];

    constructor(private service: MemberService) {
        this.service
            .getMembers()
            .subscribe(memberItems => this.memberItems = memberItems);
    }

}
