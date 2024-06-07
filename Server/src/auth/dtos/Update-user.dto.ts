export class UpdateUserDto {
  email: string;
  password: string;
  phoneNumber?: number;
  fullName?: string;
  cardNumber?: number;
}