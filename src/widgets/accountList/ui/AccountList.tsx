import { Button, Divider, Stack } from '@mantine/core'

export function AccountList() {
	const roles = ['Admin', 'PROJECT_ADMIN', 'WORKSPACE_ADMIN', 'User']

	return (
		<Stack flex={1}>
			{roles.map((role, index) => (
				<Stack key={role} >
					<Button variant='subtle' color='black' fullWidth size='md' radius='sm' >
						{role}
					</Button>
					{index < roles.length - 1 && <Divider />}
				</Stack>
			))}
		</Stack>
	)
}
