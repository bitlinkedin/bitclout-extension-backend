import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Service {

  upload(hotelId, type, file): Promise<S3.ManagedUpload.SendData> {
    const parts = file.originalname.split('.');
    const fileExtension = parts[parts.length - 1];
    return this.uploadS3(file.buffer, process.env.AWS_S3_BUCKET, `${hotelId}-${type}.${fileExtension}`);
  }

  async uploadS3(file, bucket, name): Promise<S3.ManagedUpload.SendData> {
    const s3 = this.getS3();
    const params: S3.Types.PutObjectRequest = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: 'public-read'
    };
    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          Logger.error(err);
          reject(err.message);
        }
        Logger.log(data);
        resolve(data);
        // s3.getSignedUrl()
      });
    });
  }

  getS3() {
    return new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }
}
