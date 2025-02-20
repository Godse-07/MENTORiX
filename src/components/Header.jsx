import React from 'react'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from 'lucide-react'
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from './ui/dropdown-menu'

function Header() {
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
          <Image 
            src='/logo2.png'
            width={100}
            height={60}
            alt='logo'
            className='h-12 py-1 object-contain'
          />
        </Link>

        {/* Right-Side Menu */}
            <div className='flex items-center space-x-2 md:space-x-4'>
            <SignedIn>
                <Link href='/dashboard'>
                <Button variant="outline" className='flex items-center gap-2 mt-1'>
                    <LayoutDashboard className='h-4 w-4'/>
                    <span className='hidden md:block'>Industry Insights</span>
                </Button>
                </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button className='flex items-center gap-2 mt-1'>
                    <StarIcon className='h-4 w-4'/>
                    <span className='hidden md:block'>Growth Tools</span>
                    <ChevronDown className='h-4 w-4'/>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <Link href={"/resume"} className='flex items-center gap-2'>
                        <FileText className='h-4 w-4'/>
                        <span>Build Resume</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                        <PenBox className='h-4 w-4'/>
                        <span>Cover Letter</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                        <Link href={"/interview"} className='flex items-center gap-2'>
                        <GraduationCap className='h-4 w-4'/>
                        <span>Interview Prep</span>
                    </Link>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          
          </SignedIn>
          
          <SignedOut>
            <SignInButton>
                <Button variant="secondary">
                    Sign In
                </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={
                {
                    elements:{
                        avatarBox: "w-10 h-10",
                        userButtonPopoverCard: "shadow-xl",
                        userPreviewMainIdentifier: "font-semibold"
                    }
                }
            }
                afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
