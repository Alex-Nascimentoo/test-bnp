import { useState } from 'react';

import { IToastMessage } from '@/types/toast-message.d';

import styles from './style.module.css';
import { useToastMessage } from '@/contexts/toastMessage';

type ToastMessageProps = {
	content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({ content: data }) => {
	
	// Import function to show toast message
	const { showMessage } = useToastMessage();

	return (
		<div className={styles.container} data-toast-type={data.type} data-toast-id={data.id}>
			<span data-content>{data.message}</span>

			<span data-close onClick={() => showMessage('')}>╳</span>

			{/* Div for bottom loading bar */}
			<div id={styles.loadbar} className={data.type === 'success' ? styles.bgSuccess : styles.bgError}></div>
		</div>
	);
};
