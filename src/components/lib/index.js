import {
    BodyGalery,
    Container,
    Card,
    SubContainer,
    Title,
    ButtonIndex,
    ButtonPage,
    NavigateDiv,
    ArrowPage,
    BtnCLose,
    BoxContent,
    BoxContentItems,
    // Divider,
    JavaScriptIco,
    ReactIco,
    HtmlIco,
    WordpressIco,
    CssIco,
    GaleryText,
    ContainerTitle,
} from './styles';

import Modal from 'react-modal';

import { useState } from 'react';

//Icos imports
import CssIcoUrl from './img/css.png';
import HtmlIcoUrl from './img/html.png';
import JsIcoUrl from './img/js.png';
import WordpressIcoUrl from './img/wordpress.png';
import ReactIcoUrl from './img/react.png';


export default function Library() {

    var projects = [];

    for (var i = 0; i < 1000; i++) {
        projects.push({
            id: `${i + 1}`,
            type: `MOBILE ${i + 1}`,
            banner: 'https://i.pinimg.com/564x/76/5f/59/765f59075f3ba1e9623d2c9e9d6ca67e.jpg',
            company: `MCB ${i + 1}`,
            title: `WEBSITE ${i + 1}`,
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
            tecnology: [],
        })
    }


    const [PARPAGE, setPARPAGE] = useState(1);

    let ACTUAL_PAGE = 1; //VARIAVEL QUE DETERMINA O INDEX DO PAGINA
    const MAX_ITEMS_PERPAGE = 6; // VARIAVEL QUE DETERMINA A QUANTIDADE DE ELEMENTOS RENDERIZADOS 
    const TOTAL_PAGES = Math.ceil(projects.length / MAX_ITEMS_PERPAGE); // VARIAVEL QUE CALCULA O NUMERO DE PAGINAS COM BASE NO NUMERO DE ELEMENTOS ARREDONDANDO PARA CIMA CASO HAJA UM CONDIÇÃO ONDE A DIVISÃO SEJA QUEBRADA É CRIAR UMA NOVA PÁGINA PARA OS ELEMENTOS RESTANTES. 
    const MAX_VISIBLE_BUTTONS = 5;


    let PAGE_BUTTON = [];

    Array.from({ length: TOTAL_PAGES }).map((_, index) => (
        PAGE_BUTTON.push(index)
    ));

    const [renderList, setRenderList] = useState(projects.slice(0, 6));

    const [modalStatus, setModalStatus] = useState(false);
    const [objectModal, setObjectModal] = useState(
        {
            id: '',
            type: '',
            banner: '',
            company: '',
            title: '',
            description: '',
            images: [],
        }
    );
    const [renderButtons, setRenderButtons] = useState(PAGE_BUTTON.slice(0, 5));

    console.log(objectModal);


    // //FUNÇÃO PROXIMO QUE IDENTIFICA A POSICAÇÃO ATUAL DO ELEMENTO E ACRESCENTA UMA NOVO POSIÇÃO ++
    // const handleNextPage = () => {
    //     ACTUAL_PAGE++
    //     if (ACTUAL_PAGE > TOTAL_PAGES) { // CASO TENTE AVANÇAR PARA UM VALOR MAIOR QUE O TOTAL DE ITEMS ELE MANTEN NA ULTIMA POSIÇÃO
    //         ACTUAL_PAGE-- //RECUA 1 PÁGINA
    //         console.log(ACTUAL_PAGE)
    //     } else {
    //         console.log(ACTUAL_PAGE)
    //     }

    // }

    // const handlePrevPage = () => {
    //     ACTUAL_PAGE--;
    //     if (ACTUAL_PAGE < 1) { // CASO TENTE RECUAR UM ELEMENTO MENOR QUE A PRIMEIRA PÁGINA ELE ACRESCENTA UMA POSIÇÃO MANTENDO NA PRIMEIRA PÁGINA.
    //         ACTUAL_PAGE++ //ACRESCENTA 1 PAGINA. 
    //         console.log(ACTUAL_PAGE)
    //     } else {
    //         console.log(ACTUAL_PAGE)
    //     }  
    // }

    const handleGoToPage = (page) => { //PARAMETRO PASSADO NA PÁGINA E ATRIBUIDO A VARIAVEL QUE CONTROLA A PÁGINA ATUAL DETERMINANDO ASSIM O INDEX A SER EXIBIDO
        ACTUAL_PAGE = page; // ATRIBUIÇÃO DE VALOR DA VARIAVEL PAGE PARA A PAGINA ATUAL.

        if (page > TOTAL_PAGES) {  // SE PAGINA SELECIONADA FOR MAIOR QUE TOTAL DE PÁGINAS ELE MANTEM NA ULTIMA PÁGINA.
            ACTUAL_PAGE = TOTAL_PAGES;
            handleUpdateList();
        } else if (page < 1) { // SE A PÁGINA SELECIONADA FOR MENOR QUE PRMEIRA PÁGINA ELE MANTEM NA PRMEIRA PÁGINA.
            ACTUAL_PAGE = 1
            handleUpdateList();
        }
        else {
            handleUpdateList();
        };
    }

    const handleFirstPage = () => {
        ACTUAL_PAGE = 1;
        handleUpdateList();
        handleUptadeIndexButton();

    }
    const handleLastPage = () => {
        ACTUAL_PAGE = TOTAL_PAGES;
        handleUpdateList();
        handleUptadeIndexButton();
    }

    const handleUpdateList = () => {
        let INDEX = ACTUAL_PAGE - 1;
        let INIT = INDEX * MAX_ITEMS_PERPAGE;
        let LAST = INIT + MAX_ITEMS_PERPAGE;
        setRenderList(projects.slice(INIT, LAST));
        setPARPAGE(ACTUAL_PAGE);
        console.log(PARPAGE);
    }

    const handleUptadeIndexButton = () => {
        let MAX_LEFT = ACTUAL_PAGE - Math.floor(MAX_VISIBLE_BUTTONS / 2);
        let MAX_RIGHT = ACTUAL_PAGE + Math.floor(MAX_VISIBLE_BUTTONS / 2);

        if (MAX_LEFT < 1) {
            MAX_LEFT = 1
            MAX_RIGHT = MAX_VISIBLE_BUTTONS
        }

        if (MAX_RIGHT > TOTAL_PAGES) {
            MAX_LEFT = TOTAL_PAGES - (MAX_VISIBLE_BUTTONS - 1)
            MAX_RIGHT = TOTAL_PAGES;
            if (MAX_LEFT < 1) {
                MAX_LEFT = 1;
            }
        }
        setRenderButtons(PAGE_BUTTON.slice(MAX_LEFT - 1, MAX_RIGHT))
    }

    const handleUpdateButtonPage = (data) => {
        handleGoToPage(data);
        handleUptadeIndexButton();
    }

    const handleModalComponent = (att) => {
        console.log(att)
        if (modalStatus === false) {
            setObjectModal(
                {
                    id: att.id,
                    type: att.type,
                    banner: att.banner,
                    company: att.company,
                    title: att.title,
                    description: att.description,
                    images: att.images,
                }
            );
            setModalStatus(true);
        } else {
            setModalStatus(false);
        }
    }

    return (
        <>
            <BodyGalery>
                <Modal
                    isOpen={modalStatus}
                    style={{
                        overlay: {
                            backgroundColor: "#242424b5",
                        },
                        content: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "10px",
                            padding: '0',
                            height: '100vh',
                            width: '100%',
                            backgroundColor: "#24242400",
                            transition: 'display 1.8s',
                            backgroundOpacity: '0.5',
                            border: 'none',
                        },
                    }}
                >
                    <BtnCLose onClick={() => handleModalComponent()}>X</BtnCLose>

                </Modal>
                <ContainerTitle>
                    <GaleryText>Trabalhos</GaleryText>
                </ContainerTitle>
                <BoxContent>
                    <BoxContentItems> 
                       <CssIco src={CssIcoUrl}/>       
                       <JavaScriptIco src={JsIcoUrl}/>       
                       <ReactIco src={ReactIcoUrl}/>       
                       <WordpressIco src={WordpressIcoUrl}/>       
                       <HtmlIco src={HtmlIcoUrl}/>       
                    </BoxContentItems>
                </BoxContent>
                <Container>
                    <SubContainer>
                        {renderList.map(data => (
                            <Card onClick={() => handleModalComponent(data)} key={data.company} image={data.banner}>
                                <Title>{data.company}</Title>
                            </Card>
                        ))}
                    </SubContainer>
                    <NavigateDiv>
                        <ArrowPage onClick={() => handleFirstPage()}>&#9664;&#9664;</ArrowPage>
                        {/* <button onClick={() => handlePrevPage()}>Antes</button> */}

                        {renderButtons.map((index) => (
                            PARPAGE === index + 1 ?
                                <ButtonIndex onClick={() => handleUpdateButtonPage(index + 1)}>{index + 1}</ButtonIndex>
                                :
                                <ButtonPage onClick={() => handleUpdateButtonPage(index + 1)}>{index + 1}</ButtonPage>
                        ))}

                        {/* <button onClick={() => handleNextPage()}>Proxima</button> */}
                        <ArrowPage onClick={() => handleLastPage()}>&#9654;&#9654;</ArrowPage>
                    </NavigateDiv>
                </Container>
            </BodyGalery>
            <div style={{backgroundColor:'#f2f2f2', width:'100%', height:'300px',}}></div>
        </>
    );
}