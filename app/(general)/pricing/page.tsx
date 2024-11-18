import { Metadata } from 'next';



export const metadata: Metadata={
	title: 'Pricing',
	description: 'Pricing description',
	keywords: ['price', 'products']
};

export default function PricingPage() {
	return (
		<>
			<span className='text-5xl'>Pricing Page</span>
		</>
	)
}
