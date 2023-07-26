import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import User from "./users.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 20, unique: true })
  telefone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @CreateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | Date | null | undefined;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export default Contact;