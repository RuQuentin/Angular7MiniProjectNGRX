import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userData'
})
export class UserDataPipe implements PipeTransform {
  transform(usersList, id, property) {
    return usersList[id][property]
  }
}