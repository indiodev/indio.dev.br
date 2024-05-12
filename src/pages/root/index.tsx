import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Root(): React.ReactElement {
	return (
		<main className="flex flex-1 h-full flex-col items-center justify-center md:gap-10">
			<div className="flex w-full flex-col items-center justify-center">
				<img
					src="/avatar.svg"
					alt="avatar"
					className="w-80 h-80"
					loading="lazy"
				/>

				<h1 className="font-extrabold text-center text-4xl md:text-5xl text-green-default">
					Marcos Jhollyfer
				</h1>
				<span className="text-lg md:text-xl text-center font-medium ">
					Engenheiro de Software e Instrutor de Tecnologia
				</span>

				<div className="flex flex-col w-full gap-4 max-w-xs py-8">
					<span className="text-lg md:text-xl text-center border border-green-default font-medium w-full py-2 rounded-xl text-green-default">
						5+ anos de XP
					</span>
					<span className="text-lg md:text-xl text-center border border-green-default font-medium w-full py-2 rounded-xl text-green-default">
						10K+ pessoas impactadas
					</span>
				</div>
			</div>

			<div className="flex gap-2 md:gap-8 cursor-pointer flex-col md:flex-row py-4">
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
