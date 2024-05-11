import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameTables1715455983484 implements MigrationInterface {
    name = "RenameTables1715455983484";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable("user", "users");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable("users", "user");
    }
}
