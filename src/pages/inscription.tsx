import { StaticImage } from 'gatsby-plugin-image';
import { Check } from 'gthibaud-icons-react';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { Header } from '../components/Header';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FEF7EF';

const Inscription = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Merci !</BigTitle>
                <SubTitle>
                    <span>
                        Vous avez été ajouté à la liste d'attente avec succès
                        <Check color="#3F7666" />
                    </span>
                </SubTitle>
                <br />
                <Columns columnsNumber={2}>
                    <div className="flex flex-col flex-1 gap-12">
                        <Body>
                            Vous devriez avoir reçu un mail de confirmation dans votre boîte mail.
                            Nous vous contacterons dès que l'application sera disponible pour la
                            télécharger gratuitement.
                            <br />À bientôt !
                        </Body>
                    </div>
                    <div className="flex-1">
                        <TiltingContainer>
                            <StaticImage
                                src="../../static/images/yoga.png"
                                alt="Yoga image"
                                width={460}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        </TiltingContainer>
                    </div>
                </Columns>
            </MainContainer>
        </div>
    );
};

export default Inscription;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="fr" />
        <title>Klipse – Merci pour votre inscription !</title>
        <meta
            name="description"
            content="Klipse est une application qui vous aide à prendre soin de vos yeux. Retrouvez le focus avec des exercices simples sur votre téléphone ou votre ordinateur."
        />
        <meta charSet="utf-8" />
    </>
);
