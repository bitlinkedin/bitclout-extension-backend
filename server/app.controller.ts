import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile, UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Readable } from 'stream';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly profileService: ProfileService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  getAllProfiles() {
    return this.profileService.getAll();
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Body() data) {
    return this.authService.login(data);
  }

  @Get('/:nick')
  getBitcloutProfileByLinkedInNick(@Param() { nick }) {
    return this.profileService.getBitcloutProfileByLinkedInNick(nick);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  uploadCrFiles(@UploadedFile() file) {
    const stream = Readable.from(file.buffer.toString());
    return this.profileService.uploadCsv(stream);
  }
}
