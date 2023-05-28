import { StaticImage } from 'gatsby-plugin-image';
import { Card } from '../components/Card';
import { Body } from '../components/Container/Body';
import { Feature } from '../components/Feature';
import { Header } from '../components/Header';
import { CardSection } from '../components/Section/CardSection';
import { BigTitle } from '../components/Typography/BigTitle';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { SubTitle } from '../components/Typography/SubTitle';

const Main = () => {
    return (
        <Body>
            <Header />
            <BigTitle>
                Vos <i>yeux</i> méritent d’être entraînés
            </BigTitle>
            <SubTitle>Les écrans fatiguent et assèchent nos yeux.</SubTitle>
            <SubTitle>Retrouvez le focus avec les exercices de Klipse.</SubTitle>
            <StaticImage
                className="max-w-4xl"
                src="../../static/images/desktop.png"
                alt="Desktop Klipse interface."
            />
            <SectionTitle>Les écrans abîment nos yeux</SectionTitle>
            <SubTitle>
                Nos yeux sont les outils les plus sensibles et précieux. La surexposition aux écrans
                n’est pas sans conséquences sur notre vision.
            </SubTitle>
            <CardSection>
                <Card
                    image="../../static/images/problem-1.png"
                    title="Sécheresses oculaire"
                    description="En moyenne, nous clignons 5 fois moins des yeux devant un écran."
                />
                <Card
                    image="../../static/images/problem-2.png"
                    title="Fatigue"
                    description="Les écrans fatiguent nos yeux et peuvent provoquer des maux de tête."
                />
                <Card
                    image="../../static/images/problem-3.png"
                    title="Perte de concentration"
                    description="Les écrans provenquent des effets tunnels qui résultent en des pertes d'attention et de productivité."
                />
            </CardSection>
            <SectionTitle>Klipse, des exercices simples pour prendre soin de ses yeux</SectionTitle>
            <Feature
                image="../../static/images/feature-1.png"
                title="Une app simple"
                description="Notre application disponible sur ordinateur, téléphone et tablette met à votre disposition des exercices simples pour détendre vos yeux et retrouver une clarté d’esprit.\n\nLa section conseils comporte une liste de recommandations simples pour limiter l’impact des écrans sur nos yeux."
            />
            <Feature
                image="../../static/images/feature-2.png"
                title="Libérez votre charge mentale"
                description="Klipse vous envoie des notifications pour vous rappeler de faire une pause tout au long de la journée. Paramétrez vos alertes."
                inversedDirection
            />
            <Feature
                image="../../static/images/feature-3.png"
                title="Suivez votre évolution"
                description="Prenez du recul sur la santé de vos yeux avec les statistiques. Suivez l’évolution du nombre d’exercices dans le temps.
Les statistiques sont synchronisées entre tous vos appareils."
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
