import { Route, Routes } from 'react-router-dom';

import { Contact } from './contact';

import { Root } from './';

export function Router(): React.ReactElement {
	return (
		<Routes>
			<Route
				index
				element={<Root />}
			/>
			<Route
				path="/contact"
				element={<Contact />}
			/>
		</Routes>
	);
}
