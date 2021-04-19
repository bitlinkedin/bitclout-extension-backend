import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Readable } from "stream";

@Controller()
export class AppController {
  constructor(private readonly profileService: ProfileService) {
  }

  @Get('/')
  getAllProfiles() {
    return this.profileService.getAll();
  }

  @Get('/:nick')
  getBitcloutProfileByLinkedInNick(@Param() { nick }) {
    return this.profileService.getBitcloutProfileByLinkedInNick(nick);
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  uploadCrFiles(@UploadedFile() file) {
    const stream = Readable.from(file.buffer.toString());
    return this.profileService.uploadCsv(stream);
  }
}
