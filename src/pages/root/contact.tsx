import { ArrowUp } from '@phosphor-icons/react';

export function Contact(): React.ReactElement {
	return (
		<section className="h-screen  gap-4">
			<div className="container flex flex-col items-center justify-center h-full w-full">
				<span>📬 Contatos</span>
				<h2 className="text-5xl">Vamos conversar!</h2>

				<a
					href="/"
					className="flex gap-1 items-center"
				>
					<span>Voltar ao topo</span>
					<ArrowUp />
				</a>
			</div>
		</section>
	);
}
