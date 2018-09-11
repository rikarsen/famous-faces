import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the KeyboardRowFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'keyboardRowFilter',
})
export class KeyboardRowFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform (keys, args: any) {
    return keys.filter(key => key.row === args.row);
  }
}
