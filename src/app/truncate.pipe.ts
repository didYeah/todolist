import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: unknown[]): string {
    let transformedValue: string = value.slice(0, 10) + '...';
    return transformedValue;
  }
}