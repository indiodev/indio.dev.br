import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Root(): React.ReactElement {
	return (
		<main className="flex flex-1 h-full flex-col items-center justify-center gap-16">
			<div className="flex w-full flex-col items-center justify-center">
				<img
					src="/avatar.svg"
					alt="avatar"
					className="w-80 h-80"
					loading="lazy"
				/>

				<h1 className="font-extrabold text-[3.25rem] text-green-default">
					Marcos Jhollyfer
				</h1>
				<span className="text-xl">
					Engenheiro de Software e Instrutor de Tecnologia
				</span>
			</div>

			<div className="flex gap-8 cursor-pointer">
				<span className="text-green-default font-bold text-xl bg-dark-light py-3 px-4 rounded-3xl">
					Hello World 👋
				</span>
				<Link
					to="/about"
					className="flex gap-2 items-center justify-center"
				>
					<span className="text-xl">veja mais</span>
					<ArrowRight />
				</Link>
			</div>
		</main>
	);
}
