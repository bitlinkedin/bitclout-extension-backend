import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles')
export class ProfileEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  linkedinUrl: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  bitcloutUrl: string;
}
