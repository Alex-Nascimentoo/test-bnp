/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { Modal } from '@/components/Modal';

export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	
	// Could receive content from props or URL or import custom function
	function renderModalContent() {
		return (
			<div data-modal-content onClick={e => e.stopPropagation()}>
				<h2>This is the modal content</h2>
				<p>P.S: I hope you're having a nice day ;)</p>
			</div>
		);
	}

	function handleModalConfirm() {
		alert('This is the confirmation function');
		setModalIsOpen(false);
	}

	return (
		<>
			<main className={styles.container}>
				<button type="button" onClick={() => setModalIsOpen(true)}>
					Abrir modal de confirmação
				</button>
			</main>

			{/* Renderizar modal de confirmação */}
			<Modal
				isOpen={modalIsOpen}
				title='Confirmação'
				onClose={() => setModalIsOpen(false)}
				onConfirm={handleModalConfirm}
				footer={{ confirmText: 'Confirm' }}
			>
				{ renderModalContent() }
			</Modal>
		</>
	);
}
