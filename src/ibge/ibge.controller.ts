import { Controller, Get } from '@nestjs/common';
import { IbgeService } from './ibge.service';

@Controller('ibge')
export class IbgeController {
  constructor(private readonly ibgeService: IbgeService) {}

  @Get('estados')
  async getEstados(): Promise<any[]> {
    return this.ibgeService.getEstados();
  }
}
