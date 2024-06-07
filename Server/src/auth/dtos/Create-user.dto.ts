export class CreateUserDto {
  email: string;
  phoneNumber: number;
  fullName: string;
  password: string;
  cardNumber?: number;
}