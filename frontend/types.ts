export interface User {
    id:        number;
    username:  string;
    email:     string;
    first_name: string;
    last_name: string;
    token: string;
}

export interface isLoggedIn {
    email: string;
    password: string;
    accessToken: string;
}