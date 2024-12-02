import {
    HomeIcon,
    Blinds,
    Building,
    BookCopy,
    UsersRound,
    ArrowLeftRight,
    LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
//* ===============
//* icons === https://lucide.dev/icons/
//* ===============
import { NavButton } from '@/components/NavButton';
import { ModeToggle } from '@/components/ModeToggle';
export function Header() {
    return (
        <header className='animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20'>
            <div className='flex h-8 items-center justify-between w-full'>
                <div className='flex items-center gap-2'>
                    <NavButton icon={HomeIcon} label='Main' href='/main' />
                    <Link
                        href='/main'
                        className='flex justify-center items-center gap-2 ml=0'
                        title='Main'
                    >
                        <h1 className='hidden sm:block text-xl font-bold m-0 mt-1'>
                            Moolah
                        </h1>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <NavButton
                        icon={Building}
                        label='Institutions'
                        href='/institutions'
                    />
                    <NavButton
                        icon={BookCopy}
                        label='Accounts'
                        href='/accounts'
                    />
                    <NavButton
                        icon={ArrowLeftRight}
                        label='Tickets'
                        href='/transactions'
                    />
                    <NavButton
                        icon={Blinds}
                        label='Categories'
                        href='/categories'
                    />
                    <NavButton
                        icon={UsersRound}
                        label='Participants'
                        href='/participants'
                    />
                    <ModeToggle />

                    <Button
                        variant={'ghost'}
                        size='icon'
                        aria-label='LogOut'
                        title='LogOut'
                        className='rounded-full'
                        asChild
                    >
                        <LogoutLink>
                            <LogOut />
                        </LogoutLink>
                    </Button>
                </div>
            </div>
        </header>
    );
}
