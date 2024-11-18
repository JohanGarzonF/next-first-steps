import { Metadata } from 'next';


export const metadata: Metadata={
	title: 'Contact Page',
	description: 'Here you can find our information',
	keywords: ['contact', 'email', 'phone', 'address', '...']
};

export default function ContactPage() {
	return (
		<>
			<span className='text-5xl'>Contact Page</span>
		</>
	)
}
