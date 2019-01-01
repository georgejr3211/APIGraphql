import { MigrationInterface, QueryRunner } from 'typeorm';
export class UserMigration implements MigrationInterface{
  
  async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`"ALTER TABLE "users" ALTER COLUMN "name" RENAME TO "nome"`);
  }
  
  async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`"ALTER TABLE "users" ALTER COLUMN "nome" RENAME TO "name"`);
  }

}