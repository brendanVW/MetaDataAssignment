import { ApiModelProperty } from '@nestjs/swagger';
import {Plane} from './plane.interface';



export class CreatePlaneDto {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly age: number;

  @ApiModelProperty()
  readonly breed: string;
}