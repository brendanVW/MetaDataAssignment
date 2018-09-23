import { Get, Controller, Post, Body, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { request } from 'http';
import {CreateCatDto} from './create-cat.dto';
import {CreatePlaneDto} from './create-plane.dto';
import {Cat} from './cat.interface';
import {Plane} from './plane.interface';



@Controller('plane')
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly planes: string[] = ['antonov an-225', 'Antonov AN-2']

  @Get('cat')
  getCats(): Cat[] {
    return this.appService.findAll();
  }
  @Post('createcat')
  async createCat(@Body() createCatDto: CreateCatDto) {
    this.appService.createCat(createCatDto);
  }
  
  @Get()
  getPlanes(): string {
    return this.planes[0];
  }
  @Post()
  async createPlane(@Body() createPlaneDto: CreatePlaneDto){
    this.appService.createPlane(createPlaneDto);
  }
}
