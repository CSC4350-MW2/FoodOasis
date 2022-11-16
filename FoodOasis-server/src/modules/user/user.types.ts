import { IUser } from "./interface/user.interface";

export type User = IUser

export type FullUser = User & DateInfo

export type UpdateUser = Partial<User>

export type FilterUser = Partial<FullUser>