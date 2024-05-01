import { CircleNotch } from '@phosphor-icons/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '@/layout';

const RouteRoute = React.lazy(() =>
	import('@/pages/root/router').then((module) => ({
		default: module.Router,
	})),
);

export function Router(): React.ReactElement {
	return (
		<React.Suspense
			fallback={
				<div className="flex h-screen w-screen items-center justify-center">
					<CircleNotch
						size={64}
						weight="bold"
						className="animate-spin"
					/>
				</div>
			}
		>
			<Routes>
				<Route element={<Layout.Root.Public />}>
					<Route
						path="/*"
						element={<RouteRoute />}
					/>
				</Route>
			</Routes>
		</React.Suspense>
	);
}
