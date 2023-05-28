export const Header = () => {
    return (
        <header>
            <nav className="flex mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">klipse</div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Inscription gratuite
                    </a>
                </div>
            </nav>
        </header>
    );
};
