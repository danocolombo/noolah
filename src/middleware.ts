/* eslint-disable @typescript-eslint/no-unused-vars */
import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from 'next/server';

export default withAuth(
    async function middleware(request: NextRequest) {
        // You can use the request object here if needed
    },
    {
        isReturnToCurrentPage: true,
    }
);

export const config = {
    matcher: [
        /*
         * ****    THESE ARE NOT BLOCKED/RESTRICTED ROUTES    ****
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - auth
         * - favicon.ico (favicon file)
         * - robots.txt
         * - images
         * - login
         * - homepage (represented with $ after beginning /)
         */
        '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)',
    ],
};
