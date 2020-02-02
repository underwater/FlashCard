import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'empty'
})

export class EmptyPipe implements PipeTransform {
  transform(value: any, defaultString: string = 'empty'): string {
    if (value) {
      return value;
    } else {
      return defaultString;
    }
  }
}
