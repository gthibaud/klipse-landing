import { Button } from '../Button/text';
import { ButtonUnstyled } from '../Button/unstyled';
import { LogoText } from '../Logo/text';

export const Header = () => {
    return (
        <header>
            <nav className="flex mx-auto max-w-7xl items-center justify-between p-0 px-4 lg:px-8">
                <div className="flex flex-1">
                    <ButtonUnstyled
                        anchor
                        to="/"
                    >
                        <LogoText size="80" />
                    </ButtonUnstyled>
                </div>
                <div className="flex flex-1 justify-end">
                    <Button
                        anchor
                        to="/#test"
                    >
                        Inscription gratuite
                    </Button>
                </div>
            </nav>
        </header>
    );
};
