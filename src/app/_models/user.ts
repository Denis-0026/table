export interface IUser {
    firstName?: string;
    lastName?: string;
}

export interface IUserData {
    data: Array<IUser>;
    length: number;
}