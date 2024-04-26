import type { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

interface Props extends HTMLProps<HTMLElement> {}

export function Navbar({
	className,
	children,
	...rest
}: Props): React.ReactElement {
	return (
		<nav
			className={cn(
				'container flex flex-1 w-full items-center justify-center',
				className,
			)}
			{...rest}
		>
			<ul className="flex gap-4">{children}</ul>
		</nav>
	);
}
