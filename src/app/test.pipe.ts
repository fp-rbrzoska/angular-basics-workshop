import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, suffix: string): unknown {
    return value + ' ' + suffix;
  }
  // myVar = 'xxx'
  //{{ myVar | test:'MySuffix'}} =>>> xxx_MySuffix
  // NIGDY TAK: {{ addSuffix(myVar, 'MySuffix') }}

}
