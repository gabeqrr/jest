// ISP (Interface segregation principle): clientes não devem
// ser forçados a depender de interfaces que não utilizam

import { CustomerProtocol } from './interfaces/customer-protocol';

export class IndividualCustomer implements CustomerProtocol {
  firstName: string;
  lastname: string;
  cpf: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.cpf = cpf;
    this.cnpj = '';
  }
}
export class EnterpriseCustomer implements CustomerProtocol {
  firstName: string; //
  lastname: string; //
  cpf: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cnpj: string) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.cpf = '';
    this.cnpj = cnpj;
  }
}
