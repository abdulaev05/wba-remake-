export class AddressDto {
  city: string;
  street: string;
  home: string;
}

export class SendMailDto {
  readonly firstname: string;
  readonly lastname?: string;
  readonly email?: string;
  readonly phone: string;
  readonly address: Partial<AddressDto>;
  readonly description?: string;
}
