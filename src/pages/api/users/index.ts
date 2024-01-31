/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next/types';

import { IUser } from '@/types/user.d';
import usersList from '@/db/users';

export default (req: NextApiRequest, res: NextApiResponse) => {
	const users: Array<IUser> = usersList;

	if (req.method !== 'GET') {
		return res.status(405).json({ ok: false, message: 'Method not allowed', ptMessage: 'Método não permitido' });
	}

	return res.status(200).json(users)
};
