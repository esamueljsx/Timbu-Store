import Link from 'next/link';
import Icon from './Icons';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="mb-5 breadcrumb">
            <ol className="text-base font-medium flex gap-1 text-white">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        {index > 0 && <span className="text-blue-200">
                            <Icon type="arrow-right" size={14} />
                        </span>}
                        {item.href ? (
                            <Link href={item.href}>
                                <span className="hover:underline text-blue-200">{item.label}</span>
                            </Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
