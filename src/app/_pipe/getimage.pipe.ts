import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment'

@Pipe({ name: 'getImage' })
export class GetImagePipe implements PipeTransform {
    types = [
        "avatars/",
        "Loaicongviecs/",
        "Vieclams/",
    ];

    transform(name: string, type: number = 0) {
        if(!name) {
            return environment.imageUrl + "spinner.gif";
        }
        return environment.imageUrl + this.types[type] + name;
    }
}