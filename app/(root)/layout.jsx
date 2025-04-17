import React from 'react'

const Layout = async ({ children }) => {
    return(
        <div>
            {/* <nav>
                <Link href="/" className="flex items-center gap-2">
                 <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32}/>
                 <h2 className="text-primary-100">InterviewPrep</h2>
                </Link>
            </nav> */}
            {children}
        </div>
    )
};

export default Layout;

