import { ArrowUp } from '@phosphor-icons/react';
import React from 'react';

export function App(): React.ReactElement {
	return (
		<React.Fragment>
			<section className="h-screen  gap-4 bg-dark-default text-white">
				<div className="container flex flex-col items-center justify-center h-full w-full">
					<span>📬 Contatos</span>
					<h2 className="text-5xl">Vamos conversar!</h2>

					{/* <Link></Link> */}
					<a
						href="/"
						className="flex gap-1 items-center"
					>
						<span>Voltar ao topo</span>
						<ArrowUp />
					</a>
				</div>
			</section>

			<footer className="w-full bg-dark-light text-white py-4">
				<section className="container flex items-center justify-center ">
					<span>Copyright © Marcos Jhollyfer · 2022</span>
				</section>
			</footer>
		</React.Fragment>
	);
}
