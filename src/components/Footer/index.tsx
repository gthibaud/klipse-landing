import { Link } from 'gatsby';

export const Footer = () => {
    return (
        <footer className="bg-primary flex w-full mx-auto items-center justify-between p-0 px-4 lg:px-8 py-8 text-white flex-col gap-4 sm:flex-row">
            <div className="flex flex-1">@ Creastel – 2023</div>
            <div className="flex gap-6 items-center">
                <Link to="mailto:gregoire@creastel.com">Contact</Link>
                <Link to="/">Politique de confidentialité</Link>
                <Link to="https://creastel.com">Creastel</Link>
            </div>
        </footer>
    );
};