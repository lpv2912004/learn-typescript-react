import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Helmet } from 'react-helmet';

const metadata = {
    title: 'Phuoc Vinh Dev Typescript tutorial',
    description: 'Learn Typescript'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Helmet>
                <title>{metadata.title}</title>
                <meta name={metadata.title} content={metadata.description}></meta>
                <head></head>
            </Helmet>

            <ThemeProvider>
                <Navbar />
                <main>{children}</main>
            </ThemeProvider>
        </>
    );
}
