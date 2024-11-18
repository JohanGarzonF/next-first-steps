import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center">
			<span className='text-5xl'>Hola Mundo</span>

			<Link href={'/about'}>About Page</Link>
		</div>
	);
}
