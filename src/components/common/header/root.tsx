import type { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

interface Props extends HTMLProps<HTMLElement> {}

export function Root({
	className,
	children,
	...rest
}: Props): React.ReactElement {
	return (
		<header
			className={cn('flex w-full fixed top-0 left-0 py-10', className)}
			{...rest}
		>
			{children}
		</header>
	);
}
