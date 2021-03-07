import { Body, Container, Card, SubContainer, Title } from './styles';
import { useState } from 'react';
export default function Library() {

    var projects = [
        {
            banner: 'https://educacaoinfantil.aix.com.br/wp-content/uploads/2018/03/177959-desenvolvimento-cognitivo-9-praticas-para-a-sala-de-aula.jpg',
            company: 'Mcb',
            title: 'Mobile APP',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.16593016684055328&fundo_g=0.2154541015625&fundo_b=0.21337326396914089&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'LM',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.730712890625&fundo_g=1&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Loja do Desejo',
            title: 'Website',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=0&fundo_g=0.691650390625&fundo_b=1&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Movida',
            title: 'Website',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori555555',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori213',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori1332',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori4331',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori32324',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori3232',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori444442',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori222223',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori22222',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori444',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori333',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori222',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori111',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori11',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori33',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori22',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori1',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori2',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori332444',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori3',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori354334',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori2323',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori5453',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori312312',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori54353454233',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },

        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori5435354453',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },

        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori5435773453',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori543335773453',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },
        {
            banner: 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=800&txt_altura=600&extensao=png&fundo_r=1&fundo_g=0.542724609375&fundo_b=0&texto_r=0&texto_g=0&texto_b=0&texto=&tamanho_fonte=10',
            company: 'Rei do tebori541135773453',
            title: 'Mobile App',
            description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            images: [],
        },


    ];

    const [range, setRange] = useState(
        {
            first: 0,
            last: 8,
        }
    )


    const MAX_POSITION = 3;
    const MAX_ITEMS = 8;
    const FIRST_ITEMS = 8;

    const totalItems = projects.length;

    const count = Math.ceil(totalItems / MAX_ITEMS);

    var totalPages = [];

    const pages = () => (Math.ceil(Array.from({ length: count }).map((_, index) => (
        totalPages.push(index + 1)
    ))));

    console.log(totalPages);

    pages();

    const handleRangeLibrary = (page) => {
        if (page > 1) {
            setRange(
                {
                    first: FIRST_ITEMS * (page - 1),
                    last: MAX_ITEMS * page,
                }
            );
            console.log(page)
        } else {
            setRange(
                {
                    first: FIRST_ITEMS - 8,
                    last: MAX_ITEMS * page,
                }
            );
            console.log(page)
        }
    };

    return (
        <Body>
            <Container>
                <SubContainer>
                    {projects.slice(range.first, range.last).map(data => (
                        <Card key={data.company} image={data.banner}>
                            <Title>{data.company}</Title>
                        </Card>
                    ))}
                </SubContainer>
                <ul style={{ listStyle: 'none', display: 'flex' }}>
                    {totalPages.map((page) => (
                        <li key={page}>
                            <button onClick={() => handleRangeLibrary(page)}>{page}</button>
                        </li>
                    ))}
                </ul>
            </Container>
        </Body>
    );
}