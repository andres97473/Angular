import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster: string|null ): string | null {

    if(!poster || null ){
      return './assets/no-image.jpg';
    } else{
      return `https://image.tmdb.org/t/p/w500${ poster }`;
    }
  }

}
