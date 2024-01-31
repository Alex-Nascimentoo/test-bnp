export interface IUser {
	id: number;
	name: string;
	email: string;
}

export type TUserCreate = {
	name: string;
	email: string;
};
