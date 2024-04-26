import type { HTMLProps } from 'react';
import { NavLink } from 'react-router-dom';

import { cn } from '@/lib/utils';

interface Props extends HTMLProps<HTMLLIElement> {
	to: string;
}

export function NavbarItem({
	className,
	children,
	to,
	...rest
}: Props): React.ReactElement {
	return (
		<li
			className={cn('min-w-20', className)}
			{...rest}
		>
			<NavLink
				to={to}
				className="py-1 px-2 flex-1 flex items-center justify-center aria-[current=page]:text-green-default aria-[current=page]:font-bold"
			>
				{children}
			</NavLink>
		</li>
	);
}
