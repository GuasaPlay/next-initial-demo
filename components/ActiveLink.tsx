import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
	textDecoration: 'underline',
	color: '#0070f3',
};

interface Props {
	href: string;
	text: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
	const { asPath } = useRouter();
	return (
		<Link href={href}>
			<a style={href === asPath ? style : undefined}>{text}</a>
		</Link>
	);
};
