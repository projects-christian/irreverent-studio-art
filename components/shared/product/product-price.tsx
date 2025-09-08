import { cn } from '@/lib/utils';

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
    // Ensure two decimal places
    const stringValue = value.toFixed(2);
    // Get the int/float
    const [intValue, floatValue] = stringValue.split('.');

    return ( 
        <>
            <p className={cn('text-2xl', className)}>
                <span className=''>$</span>
                {intValue}
                <span className=''>.{floatValue}</span>
            </p>
            <span>impuestos inc.</span>
        </>
    );
}
 
export default ProductPrice;