import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

    transform(message: string, limit: number = 50) {
        return this.onCutMessage(message, limit);
    }


    // ฟังก์ชั่นตัดข้อความ
    private onCutMessage(message: string, limit: number) {
        if (message.length <= limit)
            return message;
        return `${message.substr(0, limit)} [...]`;
    }

}