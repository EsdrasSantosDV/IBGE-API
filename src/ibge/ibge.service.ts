import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class IbgeService {
  async getEstados(): Promise<any[]> {
    const response = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
    );
    return response.data;
  }
}
