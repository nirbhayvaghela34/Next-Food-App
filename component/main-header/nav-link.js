'use client'
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css';
import Link from "next/link";

export default function NavLink ({ href ,children}) {
    const path = usePathname();

    return (
        <Link className={path.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link} href={href}>{children}</Link>
    );
}