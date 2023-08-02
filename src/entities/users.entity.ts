import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DeleteDateColumn, CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import Contact from "./contacts.entity";
import { getRounds, hashSync } from 'bcryptjs';

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 20, unique: true })
  telefone: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  avatar: string | null;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @CreateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | Date | null | undefined;

  @BeforeInsert()
  @BeforeUpdate()
  hashPasssword() {
    if (this.password) {
      const isEncripted = getRounds(this.password);
      
      if (!isEncripted) {
        this.password = hashSync(this.password, 10);
      }
    }
  }

  @OneToMany(() => Contact, contact => contact.user)
  contacts: Contact[];
}

export default User;