/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
*/

import { useForm, SubmitHandler } from 'react-hook-form';

import { TUserCreate } from '@/types/user';
import styles from '@/styles/formulario.module.css';

type TErrorMessageProps = {
	message: string | undefined;
}

function ErrorMessage({ message }: TErrorMessageProps) {
	return (
		<p>{message}</p>
	)
}

export default function Form() {
	const { register, handleSubmit, formState: {errors} } = useForm<TUserCreate>();

	const onSubmit: SubmitHandler<TUserCreate> = data => {
		fetch('/api/users/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input {...register("name")} type="text" placeholder="Name" required />
					<input
						{...register("email", {
							required: "Um email é necessário",
							pattern: {
								value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
								message: "Por favor, insira um email válido"
							}
						})}
						type="text"
						placeholder="E-mail"
					/>

					{errors?.email && <ErrorMessage message={errors?.email.message} />}

					<button type="submit" data-type="confirm">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
}
