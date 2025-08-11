import { Box, Container, Flex, Text } from '@mantine/core'

import { Title } from '@/shared/ui/Title'

import { AccountList } from '@/widgets/accountList/ui/AccountList'

import { Logo } from '@/shared/ui/Logo'

export function AuthPage() {
	return (
		<Container strategy='grid' h={{ base: '100dvh', sm: 'fit-content' }}>
			<Flex
				direction={{ base: 'column', sm: 'row' }}
				p={{ base: '1rem', xs: '2rem' }}
				style={{
					borderRadius: 'var(--mantine-radius-md)',
					boxShadow: '0 12px 30px rgba(2,22,36,0.08)',
					border: '1px solid rgba(2,22,36,0.04)',
									background: `
						linear-gradient(
							135deg,
							rgba(0,170,230,0.12) 0%,
							rgba(199,241,255,0.65) 60%,
							rgba(255,255,255,0.98) 100%
						)
					`,
				}}
				h='fit-content'
				my={{ base: 'auto', sm: 'none' }}
				mt={{ sm: '15%' }}
				gap={{ base: '1rem', sm: '0' }}
			>
				<Box flex='1' style={{alignSelf: 'center'}}>
					<Logo />
					<Title />
					<Text component='p'>Для перехода в приложение...</Text>
				</Box>
				<AccountList />
			</Flex>
		</Container>
	)
}
