import { IsEmail, IsString, Length, IsBoolean, IsNotIn } from 'class-validator';
import { LoginDTO } from './login.dto';

export class RegisterDTO extends LoginDTO {
  @IsEmail({}, { message: 'Your username must be an email address...' })
  public email: string;

  @IsString({ message: 'Your password appears to be invalid, please try to reload the page...' })
  @Length(8, 32, { message: 'Your password must be between 8 and 32 characters long...' })
  public password: string;

  @IsBoolean({ message: 'Your must accept the terms of service before registering...' })
  @IsNotIn([false], { message: 'Your must accept the terms of service before registering...' })
  public termsOfService: boolean;
}
