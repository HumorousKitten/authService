import { RouterProvider } from 'react-router-dom'

import { MantineProvider, createTheme } from '@mantine/core'

import '@mantine/core/styles.css'

import '@app/styles/index.css'

import { router } from '../router/router'

const theme = createTheme({
	fontFamily: 'ALSHauss-regular',
	headings: {
		fontFamily: 'ALSHauss-medium',
	},
})

export function App() {
	return (
		<MantineProvider theme={theme}>
			<RouterProvider router={router} />
		</MantineProvider>
	)
}
