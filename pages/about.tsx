import { DarkLayout } from '../layouts/DarkLayout';
import { MainLayout } from '../layouts/MainLayout';

export default function AboutPage() {
	return (
		<>
			<h1 className="title">About Page</h1>
		</>
	);
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
	return (
		<MainLayout>
			<DarkLayout>{page}</DarkLayout>
		</MainLayout>
	);
};
