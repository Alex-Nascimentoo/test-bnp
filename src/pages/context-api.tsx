/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import styles from '@/styles/context-api.module.css';
import { IToastMessage } from '@/types/toast-message';
import { ToastMessage } from '@/components/ToastMessage';
import { useToastMessage } from '@/contexts/toastMessage';

export default function ContextApi() {
	// Import status and function to show toast messages
	const { status, showMessage } = useToastMessage();

	const messages: Array<IToastMessage> = [
		{
			id: '1',
			message: 'Mensagem de sucesso',
			type: 'success',
		},
		{
			id: '2',
			message: 'Mensagem de erro',
			type: 'error',
		},
	];

	function handleSuccessButtonClick() {
		showMessage('success');
	}

	function handleErrorButtonClick() {
		showMessage('error');
	}

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>

			<div className={styles['toast-container']}>
				{
					// If status is different from '' (success or error), show toast message
					status !== '' &&
						<ToastMessage
							// Get message info according to status
							content={messages.filter(m => m.type === status)[0]}
						/>
				}
			</div>
		</>
	);
}
