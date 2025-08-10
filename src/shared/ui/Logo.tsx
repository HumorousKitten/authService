import { Image, Box } from '@mantine/core'

import LogoIcon from '@/shared/assets/images/logo/logo.svg'

export function Logo() {
	return (
		<Box w={{base: '64px'}} >
			<Image src={LogoIcon} />
		</Box>
	)
}
