import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';
import CategoryDrawerTest from '@/components/shared/header/category-drawer-test';

// import Search from './search';

const Header = () => {
    return (
        <header className='w-full border-b'>
            <nav className="w-full bg-background-greenForest dark:text-text-dark py-1">
                <div className="w-[70%] mx-auto flex justify-between items-center">
                    <span className="text-sm font-medium dark:text-text-dark">Inicio</span>
                    <span className="text-sm font-medium dark:text-text-dark">Servicios</span>
                    <span className="text-sm font-medium dark:text-text-dark">Contacto</span>
                </div>
            </nav>
            <div className='wrapper flex-between'>
                <div className='flex-start'>
                <CategoryDrawerTest />
                <Link href='/' className='flex-start ml-4'>
                    <Image
                    src='/images/logo.svg'
                    alt={`${APP_NAME} logo`}
                    height={48}
                    width={48}
                    priority={true}
                    />
                    <span className='hidden lg:block font-bold text-2xl ml-3'>
                    {APP_NAME}
                    </span>
                </Link>
                </div>
                <div className='hidden md:block'>
                {/* <Search /> */}
                </div>
                <Menu />
            </div>
        </header>
    );
};

export default Header;