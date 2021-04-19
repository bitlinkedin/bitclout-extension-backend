import { Injectable } from '@nestjs/common';
import { ProfileEntity } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Readable } from 'stream';
import { CsvService } from './csv/csv.service';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly repository: Repository<ProfileEntity>,
    private readonly csvService: CsvService,
  ) {
  }

  getAll() {
    return this.repository.find({});
  }

  private async convertCsvToDto(stream: Readable): Promise<any> {
    const headers = ['linkedinUrl', 'bitcloutUrl'];

    return this.csvService.uploadFromCsv<any>(stream, headers);
  }

  async getBitcloutProfileByLinkedInNick(nick: string) {
    const profile = await this.repository
      .createQueryBuilder('profile')
      .where('profile.linkedinUrl like :linkedinUrl', {
        linkedinUrl: `%${nick}%`,
      })
      .getOne();
    return profile ? profile.bitcloutUrl : '';
  }

  private getUniqFields = (array: any[], field?: string) => {
    return [...new Set(array.map((item) => (field ? item[field] : item)))];
  };

  async uploadCsv(stream: Readable) {
    let dto = await this.convertCsvToDto(stream);
    const uniqLinkedinUrl = this.getUniqFields(dto, 'linkedinUrl');
    const uniqBitcloutUrl = this.getUniqFields(dto, 'bitcloutUrl');
    const existProfiles = await this.repository.find({
      where: [
        { linkedinUrl: In(uniqLinkedinUrl) },
        { bitcloutUrl: In(uniqBitcloutUrl) },
      ],
    });
    dto = dto.filter(d => !existProfiles.some(profile => profile.bitcloutUrl === d.bitcloutUrl || profile.linkedinUrl === d.linkedinUrl));

    return this.repository.save(dto.map((d) => ProfileEntity.create(d)));
  }
}
