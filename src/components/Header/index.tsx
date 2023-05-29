import { Button } from '../Button/text';
import { ButtonUnstyled } from '../Button/unstyled';
import { LogoText } from '../Logo/text';

export const Header = () => {
    return (
        <header>
            <nav className="flex w-full mx-auto items-center justify-between p-0 px-4 lg:px-8">
                <div className="flex flex-1">
                    <ButtonUnstyled
                        to="/"
                        ariaLabel="Retourner à l'accueil"
                    >
                        <LogoText size="80" />
                    </ButtonUnstyled>
                </div>
                <div className="flex flex-1 justify-end">
                    <Button to="/#telecharger">Inscription gratuite</Button>
                </div>
            </nav>
        </header>
    );
};
