import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth', wizard: true })
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <link
                    href="/images/logo/logo_x_bio.png"
                    rel="icon"
                />
            </Head>
            <Navigation user={user}></Navigation>
            {/* Page Heading */}
            <header>
                
                    {header}
                
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
