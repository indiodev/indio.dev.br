import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';

export function Public(): React.ReactElement {
	return (
		<div className="w-full flex flex-col bg-dark-default text-white relative">
			<Header.Root className="hidden sm:flex bg-dark-default">
				<Header.Navbar>
					<Header.NavbarItem to="/">Home</Header.NavbarItem>
					<Header.NavbarItem to="/about">Sobre</Header.NavbarItem>
					<Header.NavbarItem to="/portfolio">Portfólio</Header.NavbarItem>
					<Header.NavbarItem to="/skills">Skills</Header.NavbarItem>
					<Header.NavbarItem to="/career">Carreira</Header.NavbarItem>
					<Header.NavbarItem to="/contact">Contato</Header.NavbarItem>
				</Header.Navbar>
			</Header.Root>
			<div className="container flex flex-1 flex-col min-h-screen pt-32">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
