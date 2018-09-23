import { ApiModelProperty } from '@nestjs/swagger';
import {Cat} from './cat.interface';


export class CreateCatDto {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly age: number;

  @ApiModelProperty()
  readonly breed: string;
}