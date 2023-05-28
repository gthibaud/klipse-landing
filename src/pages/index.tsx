import { Header } from '../components/Header';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
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
        </Body>
    );
};

export default Main;
