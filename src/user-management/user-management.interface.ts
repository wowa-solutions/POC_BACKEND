export interface UserManagement {
  email?: string;
  userName?: string;
  password: string;
  postcode: string;
  firstName: string;
  lastName: string;
  street: string;
  streetnumber: string;
  country: string;
  loggedin: boolean;
  confirmed: boolean;
  role: 'user' | 'admin';
}
