/**
 * Página estática
 *
 * - Atualmente o conteúdo é gerado no momento em que a requisição é feita
 * - Você deve transformar essa página em uma página estática
 * - A página deve ser gerada no momento da build
 * - A página deve ser atualizada a cada 1 minuto
 */

import { useEffect, useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

import styles from '@/styles/lista.module.css';
import { ICity } from '@/types/city.d';

type TListaProps = {
	data: ICity[];
}

// Get data during componentMount stage
export const getStaticProps = (async () => {
	let props: TListaProps = {} as TListaProps;

	try {
		const response = await fetch('http://localhost:8080/api/cities/10');
		const data: ICity[] = await response.json();

		if (!response.ok) throw new Error('Erro ao obter os dados');

		props = { data }
	} catch (error) {
		console.error(error);
	}

	return {
		props
	}
}) satisfies GetStaticProps<{ data: ICity[]}>

export default function Lista({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [list, setList] = useState<Array<ICity>>([
		{
			id: new Date().getTime().toString(),
			name: 'São Paulo',
		},
	]);

	useEffect(() => {

		// Refresh page every 60 seconds
		const intervalId = setInterval(() => {
			setList(data);
		}, 60000);

		// Clear de interval so it can run again
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h2>Lista de cidades</h2>

				<div data-list-container>
					{list.map((city) => (
						<div data-list-item key={city.id}>
							{city.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
