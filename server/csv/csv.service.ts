import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import * as CSVToJSON from 'csvtojson';

@Injectable()
export class CsvService {
  async uploadFromCsv<T>(
    stream: Readable,
    headers: string[],
    delimiter = ',',
  ): Promise<T[]> {
    return CSVToJSON({
      headers,
      delimiter,
    }).fromStream(stream);
  }

  isValidCSVRow = (orderItem, headers): boolean => {
    const keys = Object.keys(orderItem);
    return headers
      .filter((header) => !!header)
      .every((header) => keys.includes(header));
  };
}
