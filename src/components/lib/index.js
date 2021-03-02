
import { Body, Container, Card, SubContainer } from './styles';
export default function Library() {
       
    var projects = [
        {
            banner:'https://educacaoinfantil.aix.com.br/wp-content/uploads/2018/03/177959-desenvolvimento-cognitivo-9-praticas-para-a-sala-de-aula.jpg',
            title:'My First Project',
            description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images:[],
        },
        {
            banner:'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10',
            title:'My Second Project',
            description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images:[],
        },
        {
            banner:'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.16593016684055328&fundo_g=0.2154541015625&fundo_b=0.21337326396914089&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10',
            title:'My third Project',
            description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images:[],
        }
    ];

    return (
        <Body>
            <Container>
                <SubContainer>
                    {projects.map(data =>(
                        <Card image={data.banner}>
                            <Title>{data.title}</Title>
                            <Description>{data.description}</Description>
                        </Card>      
                    ))}                       
                </SubContainer>
            </Container>
        </Body>
    );
} 