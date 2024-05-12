import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { Icon } from '@/components/common/icon';

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
			</div>

			<div className="flex gap-6 py-8 flex-col sm:flex-row w-full items-center justify-center">
				<div className="gap-1 text-center w-full sm:w-60 h-52 border-2 border-blue-default rounded-xl flex items-center justify-center flex-col hover:transform hover:scale-105">
					<Icon.Frontend />
					<span className="text-base">+4 anos como</span>
					<span className=" text-3xl font-bold">Front-end</span>
				</div>
				<div className="gap-1 text-center bg-black w-full sm:w-60 h-52 border-2 border-blue-default rounded-xl flex items-center justify-center flex-col hover:transform hover:scale-105">
					<Icon.Job />
					<span className="text-base">+5 anos construindo</span>
					<span className=" text-3xl font-bold">Soluções</span>
				</div>
				<div className="gap-1 text-center w-full sm:w-60 h-52 border-2 border-blue-default rounded-xl flex items-center justify-center flex-col hover:transform hover:scale-105">
					<Icon.Backend />
					<span className="text-base">+3 anos como</span>
					<span className=" text-3xl font-bold">Back-end</span>
				</div>
			</div>

			<div className="flex gap-2 md:gap-8 cursor-pointer flex-col md:flex-row py-4 md:pb-8">
				<span className="text-green-default font-bold text-xl bg-dark-light py-3 px-4 rounded-3xl">
					Vamos conversar? 👋
				</span>
				<Link
					to="/about"
					className="flex gap-2 items-center justify-center border-2 border-transparent hover:border-green-default px-4 py-3 rounded-3xl hover:text-green-default font-bold"
				>
					<span className="text-xl">Saiba mais</span>
					<ArrowRight weight="bold" />
				</Link>
			</div>
		</main>
	);
}
