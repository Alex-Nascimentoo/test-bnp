import { IUser, TUserCreate } from "@/types/user";

let usersList: IUser[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com'
  },
  {
    id: 2,
    name: 'One Person',
    email: 'oneperson@example.com'
  },
  {
    id: 3,
    name: 'Somebody Else',
    email: 'somebody@example.com'
  }
];

export function getUsers(): IUser[] {
  return usersList;
}

export function createUser(user: TUserCreate): IUser {
  const lastId: number = usersList[usersList.length - 1].id;
  
  const newUser: IUser = {
    id: lastId + 1,
    name: user.name,
    email: user.email
  }

  usersList.push(newUser);

  return newUser;
}
