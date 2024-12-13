export interface UserData {
  _id: string;
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
export interface UserSettings {
  id: string;
  userId: string;
  theme: string;
  notifications: boolean;
  emailNotifications: boolean;
}
export interface UserTokenData {
  id: number;
  userId: number;
  tokenValue: string;
  // status: "active" | "inactive";
  expires: string;
}

export interface UserComment {
  id: number;
  text: string;
  userId: string;
}


// roles
export interface Employee {
  username: number;
  status: string;
  work_area: string;
  roles: number;
}
export interface Admin {
  username: number;
  status: string;
  work_area: string;
  roles: number;
}