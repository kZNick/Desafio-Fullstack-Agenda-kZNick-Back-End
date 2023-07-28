import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovingSingleContacts1690475530520 implements MigrationInterface {
    name = 'RemovingSingleContacts1690475530520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_3e8ba81fb64ba00f644d6a22435"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_3e8ba81fb64ba00f644d6a22435" UNIQUE ("telefone")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
    }

}
