import { Injectable } from '@nestjs/common';

@Injectable()
export class ListProductService {
    execute(): any[] {
        return [
            {
                name: "Bolacha",
                value: 2.59,
                brand: "Trakinas",
                weight: 100,
            }
        ]
    }
}
