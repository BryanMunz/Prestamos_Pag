import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'

const AppLayoutRegister = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <link
                    href="/images/logo/logo_x_bio.png"
                    rel="icon"
                />
            </Head>
            <Navigation></Navigation>
            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayoutRegister;
