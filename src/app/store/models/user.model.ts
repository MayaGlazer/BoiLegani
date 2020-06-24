export interface User {
    id?: number; // auto-increment
    email: string;
    username: string;
    firstname: string;
    lastname: string
    password: string
    phone: string
    created_at: Date
    salt: string
    isAdmin: boolean
    countryId: number
    cityId: number
  }

  