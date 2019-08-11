import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class CustPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return value.split('').reverse().join('');
  }
}
