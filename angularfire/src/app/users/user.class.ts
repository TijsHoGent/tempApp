export class User {
    email: string;
    roles: Roles
    constructor(userData){
        this.email = userData.email;
        this.roles = {
            regular: true,
            officials: {
                coach: true,
                admin: true,
                referee: false,
            }
        }
    }
}

export interface Roles{
    officials?: {
        coach: boolean,
        admin: boolean,
        referee: boolean
    }
    regular: boolean,
}