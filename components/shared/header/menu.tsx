"use client";

import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import Link from 'next/link';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import _UserButton from './user-button';


const Menu = () => {
    const [open, setOpen] = useState(false);
    
    return ( 
        <div className='flex justify-end gap-3'>
            <nav className='hidden md:flex w-full max-w-xs gap-1'>
                <ModeToggle />
                <Button asChild variant='ghost'>
                    <Link href='/cart'>
                        <ShoppingCart /> Cart
                    </Link>
                </Button>
                <Button asChild >
                    <Link href='/sign-in'>
                        <UserIcon /> Cart
                    </Link>
                </Button>
            </nav>
            <nav className='md:hidden'>
                <Sheet open={open} onOpenChange={setOpen}>
                    {!open && (
                        <SheetTrigger className='align-middle'>
                            <EllipsisVertical />
                        </SheetTrigger>
                    )}
                    <SheetContent className="flex flex-col items-start p-6 pt-2 bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle />
                        <Button asChild variant='ghost'>
                            <Link href='/cart'>
                                <ShoppingCart /> Cart
                            </Link>
                        </Button>
                        <Button asChild >
                            <Link href='/sign-in'>
                                <UserIcon /> Sign in
                            </Link>
                        </Button>
                        {/* the UserButton component sometimes creates errors */}
                        {/* <UserButton /> */}
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
     );
}
 
export default Menu;