import { StaticImage } from 'gatsby-plugin-image';
import { Toaster } from 'react-hot-toast';
import { Card } from '../components/Card';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { EmailForm } from '../components/EmailForm';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CardSection } from '../components/Section/CardSection';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FEF7EF';

const Main = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>
                    Vos <i>yeux</i> méritent d’être entraînés
                </BigTitle>
                <SubTitle>Les écrans fatiguent et assèchent nos yeux.</SubTitle>
                <SubTitle>
                    Retrouvez le <i>focus</i> avec les exercices de Klipse.
                </SubTitle>
                <div className="flex justify-center px-4 mt-12">
                    <StaticImage
                        className="max-w-screen-lg"
                        src="../../static/images/desktop.png"
                        alt="Desktop Klipse interface."
                    />
                </div>
                <SectionTitle>Les écrans abîment nos yeux</SectionTitle>
                <SubTitle>
                    Nos yeux sont les outils les plus sensibles et précieux.
                    <br />
                    La surexposition aux écrans n’est pas sans conséquences sur notre vision.
                </SubTitle>
                <CardSection>
                    <Card
                        image={
                            <StaticImage
                                src="../../static/images/problem-1.png"
                                alt="problem-1"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Sécheresses oculaire"
                        description="En moyenne, nous clignons 5 fois moins des yeux devant un écran."
                    />
                    <Card
                        image={
                            <StaticImage
                                src="../../static/images/problem-2.png"
                                alt="problem-2"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Fatigue"
                        description="Les écrans fatiguent nos yeux et peuvent provoquer des maux de tête."
                    />
                    <Card
                        image={
                            <StaticImage
                                src="../../static/images/problem-3.png"
                                alt="problem-3"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Perte de concentration"
                        description="Les écrans provenquent des effets tunnels qui résultent en des pertes d'attention et de productivité."
                    />
                </CardSection>
                <SectionTitle>Klipse, des exercices pour prendre soin de ses yeux</SectionTitle>
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/feature-1.png"
                            alt="hello"
                            width={300}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Une app simple"
                    description={
                        <>
                            Notre application disponible sur ordinateur, téléphone et tablette met à
                            votre disposition des exercices simples pour détendre vos yeux et
                            retrouver une clarté d’esprit.
                            <br />
                            <br />
                            La section conseils comporte une liste de recommandations simples pour
                            limiter l’impact des écrans sur nos yeux.
                        </>
                    }
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/feature-2.png"
                            alt="hello"
                            width={300}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Libérez votre charge mentale"
                    description="Klipse vous envoie des notifications pour vous rappeler de faire une pause tout au long de la journée. Paramétrez vos alertes."
                    inversedDirection
                    additionalFooter={
                        <p className="text-sm text-gray-500">
                            Les notifications peuvent être désactivées.
                        </p>
                    }
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/feature-3.png"
                            alt="hello"
                            width={300}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Suivez votre évolution"
                    description="Prenez du recul sur la santé de vos yeux avec les statistiques. Suivez l’évolution du nombre d’exercices dans le temps.
Les statistiques sont synchronisées entre tous vos appareils."
                    additionalFooter={
                        <StaticImage
                            src="../../static/images/cat.png"
                            alt="cat"
                            width={200}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                />
                <SectionTitle>
                    Klipse est bientôt disponible <u>gratuitement !</u>
                </SectionTitle>
                <div id="telecharger">
                    <Columns columnsNumber={2}>
                        <div className="flex flex-col flex-1 gap-6">
                            <Body>
                                Soyez les premiers à être informés de la sortie de Klipse. Nous vous
                                enverrons un email pour télécharger l’application{' '}
                                <b>gratuitement</b> sur vos appareils.
                            </Body>
                            <EmailForm />
                        </div>
                        <div className="flex-1">
                            <StaticImage
                                src="../../static/images/yoga.png"
                                alt="Yoga"
                                width={460}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        </div>
                    </Columns>
                </div>
            </MainContainer>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
};

export default Main;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="fr" />
        <title>Klipse – Vos yeux méritent d'être entraînés</title>
        <meta
            name="description"
            content="Klipse est une application qui vous aide à prendre soin de vos yeux. Retrouvez le focus avec des exercices simples sur votre téléphone ou votre ordinateur."
        />
    </>
);
