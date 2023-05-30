import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Toaster } from 'react-hot-toast';
import { Card } from '../components/Card';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { EmailForm } from '../components/EmailForm';
import { FAQ } from '../components/FAQ';
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
                    <TiltingContainer>
                        <StaticImage
                            className="max-w-screen-lg"
                            src="../../static/images/desktop.png"
                            alt="Desktop Klipse interface."
                        />
                    </TiltingContainer>
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
                                Vous avez les yeux secs, souffrez de fatigue visuelle ? Entrez votre
                                email et soyez les premiers à être informés de la sortie de Klipse.
                                Nous vous enverrons un email pour télécharger l’application.
                            </Body>
                            <EmailForm />
                        </div>
                        <div className="flex-1">
                            <TiltingContainer glare>
                                <StaticImage
                                    src="../../static/images/yoga.png"
                                    alt="Yoga"
                                    width={460}
                                    placeholder="none"
                                    backgroundColor={BACKGROUND_DEFAULT}
                                />
                            </TiltingContainer>
                        </div>
                    </Columns>
                </div>
                <SectionTitle>Plus d'informations</SectionTitle>
                <FAQ
                    question="Quels types d'exercices propose Klipse ?"
                    answer="Klipse offre des exercices rapides (< 5 minutes) basés sur le yoga des yeux. Ces exercices permettent de réduire la fatigue oculaire, hydrater les yeux et de retrouver une clarté d'esprit. Ils peuvent être pratiqués à tout moment de la journée (au réveil, au milieu d'une session de travail, le soir, etc.)."
                />
                <FAQ
                    question="Est-ce que Klipse peut améliorer ma vue ?"
                    answer="Non, Klipse ne peut pas améliorer votre vue, mais les exercices détendent vos yeux et entraînent vos muscles. Si vous souffrez de troubles visuels, consultez un ophtalmologue ou un orthoptiste."
                />
                <FAQ
                    question="Comment télécharger l'application ?"
                    answer={
                        <>
                            L'application est en cours de développement. Inscrivez-vous à notre{' '}
                            <u>
                                <Link to="/#telecharger">liste d'attente</Link>
                            </u>{' '}
                            pour être informé de sa sortie.
                        </>
                    }
                />
                <FAQ
                    question="Combien coûte Klipse ?"
                    answer="Klipse est une application totalement gratuite. Nous prévoyons d'ajouter des fonctionnalités payantes à l'avenir (synchronisation de comptes, etc.)."
                />
                <FAQ
                    question="Qui se cache derrière le projet ?"
                    answer={
                        <>
                            Klipse est développé par Creastel Labs, un projet mené par Grégoire
                            Thibaud et Jean Haberer. N'hésitez pas à nous{' '}
                            <u>
                                <a href="mailto:gregoire@creastel.com">contacter</a>
                            </u>{' '}
                            pour en savoir plus.
                        </>
                    }
                />
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
