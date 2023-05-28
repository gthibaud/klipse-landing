import { StaticImage } from 'gatsby-plugin-image';
import { Card } from '../components/Card';
import { Body } from '../components/Container/Body';
import { Feature } from '../components/Feature';
import { Header } from '../components/Header';
import { CardSection } from '../components/Section/CardSection';
import { BigTitle } from '../components/Typography/BigTitle';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FEF7EF';

const Main = () => {
    return (
        <Body>
            <Header />
            <BigTitle>
                Vos <i>yeux</i> méritent d’être entraînés
            </BigTitle>
            <SubTitle>Les écrans fatiguent et assèchent nos yeux.</SubTitle>
            <SubTitle>Retrouvez le focus avec les exercices de Klipse.</SubTitle>
            <div className="flex justify-center px-4">
                <StaticImage
                    className="max-w-screen-lg"
                    src="../images/desktop.png"
                    alt="Desktop Klipse interface."
                />
            </div>
            <SectionTitle>Les écrans abîment nos yeux</SectionTitle>
            <SubTitle>
                Nos yeux sont les outils les plus sensibles et précieux. La surexposition aux écrans
                n’est pas sans conséquences sur notre vision.
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
                        height={380}
                        placeholder="none"
                        backgroundColor={BACKGROUND_DEFAULT}
                    />
                }
                title="Une app simple"
                description={
                    <>
                        Notre application disponible sur ordinateur, téléphone et tablette met à
                        votre disposition des exercices simples pour détendre vos yeux et retrouver
                        une clarté d’esprit.
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
                        height={380}
                        placeholder="none"
                        backgroundColor={BACKGROUND_DEFAULT}
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
                        height={380}
                        placeholder="none"
                        backgroundColor={BACKGROUND_DEFAULT}
                    />
                }
                title="Suivez votre évolution"
                description="Prenez du recul sur la santé de vos yeux avec les statistiques. Suivez l’évolution du nombre d’exercices dans le temps.
Les statistiques sont synchronisées entre tous vos appareils."
                additionalFooter={
                    <StaticImage
                        src="../../static/images/cat.png"
                        alt="cat"
                        width={160}
                        placeholder="none"
                        backgroundColor={BACKGROUND_DEFAULT}
                        layout="fixed"
                    />
                }
            />
            <SectionTitle>
                Klipse est bientôt disponible <u>gratuitement !</u>
            </SectionTitle>
            <SubTitle align="left">
                Soyez les premiers à être informés de la sortie de Klipse et à télécharger
                l’application <b>gratuitement</b> sur vos appareils.
            </SubTitle>
            <StaticImage
                src="../../static/images/yoga.png"
                alt="Yoga"
            />
        </Body>
    );
};

export default Main;
