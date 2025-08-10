import { Button, Divider, List } from '@mantine/core'

export function AccountList() {
	return (
		<List listStyleType='none' flex='1' spacing='sm'>
			<List.Item>
				<Button
					variant='subtle'
					style={{ color: 'black' }}
				>
					Admin
				</Button>
			</List.Item>

			<Divider />

			<List.Item>
				<Button variant='subtle' style={{ color: 'black' }}>
					PROJECT_ADMIN
				</Button>
			</List.Item>

			<Divider />

			<List.Item>
				<Button variant='subtle' style={{ color: 'black' }}>
					WORKSPACE_ADMIN
				</Button>
			</List.Item>

			<Divider />

			<List.Item>
				<Button variant='subtle' style={{ color: 'black' }}>
					User
				</Button>
			</List.Item>

			<Divider />
		</List>
	)
}
