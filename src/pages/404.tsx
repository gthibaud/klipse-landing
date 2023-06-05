import { Button } from '../components/Button/text';
import { MainContainer } from '../components/Container/Main';
import { Header } from '../components/Header';
import { BigTitle } from '../components/Typography/BigTitle';
import { SubTitle } from '../components/Typography/SubTitle';

export default function NotFound() {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Désolé, cette page n'existe pas !</BigTitle>
                <SubTitle>
                    <Button to="/">Retourner à l'accueil</Button>
                </SubTitle>
                <br />
            </MainContainer>
        </div>
    );
}
