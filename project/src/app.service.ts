import { Injectable } from '@nestjs/common';
import {Cat} from './cat.interface';
import {Plane} from './plane.interface';


@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';  
  }
  private readonly cats:Cat[] = [{'age':420,'breed':'maymay','name':'Rick Astley'}];
  private readonly planes:Plane[] = []; 

  createCat(cat:Cat){
    this.cats.push(cat);
  }

  findAll(): Cat[]{
    return this.cats;
  }

  createPlane(plane:Plane){
    this.planes.push(plane);
  }

  findAllPlanes(): Plane[]{
    return this.planes;
  }
}
