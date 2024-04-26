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
		<React.Suspense fallback={<h1>Carregando...</h1>}>
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
