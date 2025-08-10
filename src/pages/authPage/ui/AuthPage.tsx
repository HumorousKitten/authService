import { Box, Container, Flex, Text, Center } from '@mantine/core'

import { Title } from '@/shared/ui/Title'

import { AccountList } from '@/widgets/accountList/ui/AccountList'

import { Logo } from '@/shared/ui/Logo'

export function AuthPage() {
	return (
		<Container strategy='grid' h={{base: '100dvh', sm: 'fit-content'}}>
			<Flex
				direction={{ base: 'column', sm: 'row' }}
				p={{base: '1rem', xs: '2rem'}}
				bg='var(--mantine-color-body)'
				style={{
					borderRadius: 'var(--mantine-radius-md)',
					boxShadow: 'var(--mantine-shadow-sm)',
				}}
				h='fit-content'
				my={{base: 'auto', sm: 'none'}}
				mt={{sm: '15%'}}
				gap={{base: '1rem', sm: '0'}}
			>
				<Box flex='1'>
					<Logo />
					<Title />
					<Text component='p'>Для перехода в приложение...</Text>
				</Box>
				<AccountList />
			</Flex>
		</Container>
	)
}
