/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser, TUserCreate } from '@/types/user.d';
import { createUser } from '@/db/users';

export default async (req: NextApiRequest, res: NextApiResponse) => {

	if (req.method !== 'POST') {
		return res.status(405).json({ ok: false, message: 'Method not allowed', ptMessage: 'Método não permitido' });
	}

	const { name, email }: TUserCreate = req.body;

	const newUser: IUser = createUser({
		name,
		email
	})

	return res.status(201).json(newUser);
};
