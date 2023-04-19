export enum UserRoles {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRoles[];
}

export interface UserSchema {
    authData?: User;
    // Флаг, который будет зависеть от инициализации данных пользователя
    _inited: boolean;
}