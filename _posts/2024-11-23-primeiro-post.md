---
layout: default
title: "Criei um bot que envia minha agenda do dia diretamente no Telegram, extraída do Google Agendas"
date: 2024-12-01
categories: programação experimentos
---
# _Criei um bot no Telegram para organizar minha agenda (e ele tem nome!)_

Você já perdeu uma reunião importante por esquecer de checar sua agenda? Eu já. Para resolver isso, decidi criar algo simples e prático: um bot que envia meus compromissos do dia diretamente no Telegram.

Apesar do Google Agenda avisar sobre compromissos com 10 minutos de antecedência, às vezes é tarde demais. Além disso, sua interface não facilita uma visão geral: você precisa abrir compromisso por compromisso para ver os detalhes.

Então pensei que receber uma notificação no Telegram com todos os compromissos listados, contendo as descrições e horários, seria muito bem-vindo. E assim, parti para o código.

Utilizei as APIs do Google Agenda e Telegram para tornar isso possível.

## Por que Telegram e não WhatsApp?

Escolhi o Telegram por sua API acessível e flexível. Diferentemente do WhatsApp, que possui restrições e burocracias para integração, o Telegram oferece uma solução prática e robusta.

## Como ficou

<img src="https://raw.githubusercontent.com/IzaqueL95/IzaqueL95.github.io/refs/heads/master/assets/img/telegram.jpeg" alt="Descrição da Imagem" style="max-width: 70%; height: auto;">

_*O conteúdo da imagem acima foi extraído da minha agenda do Google. No entanto, criei os eventos de exemplo para demonstrar o funcionamento sem expor minha agenda real.*_

Como é possível notar, o nome do bot é Jarvis, uma homenagem ao Jarvis do MCU.

Os compromissos ficam apresentados de forma bem distribuída e simples. Com alguns emojis que orientam o olhar, podemos visualizar título, descrição, início e fim. Também configurei o bot para enviar as notificações no horário que eu preferir, por exemplo, às 7h da manhã, quando costumo estar tomando café. Assim, consigo ter um overview do dia logo no início.

Para mim, isso facilitou muito, pois posso alternar rapidamente entre os compromissos com um simples olhar, sem precisar abrir cada evento individualmente.

## PHP

Apesar de muitas pessoas preferirem Python para automatizar tarefas, e eu também gostar de Python para algumas coisas, neste caso preferi usar PHP. É minha linguagem principal e me permite fazer praticamente tudo.

Abaixo está o trecho de código em PHP que usei para construir o visual das mensagens que aparecem no Telegram. O formato definido do texto foi Markdown.

```php
$mensagem = "*Chefe, segue seus compromissos do dia:*\n\n"; 

foreach ($eventos->getItems() as $evento) {
    // Aqui eu obtenho os dados principais do evento que vem do Google, ou defino valores padrão.
    $titulo = $evento->getSummary() ?? 'Sem título';
    $descricao = $evento->getDescription() ?? 'Sem descrição';

    // Aqui eu faço a conversão das datas para o formato desejado.
    $inicioRaw = $evento->getStart()->getDateTime() ?? $evento->getStart()->getDate();
    $fimRaw = $evento->getEnd()->getDateTime() ?? $evento->getEnd()->getDate();
    $inicio = (new DateTime($inicioRaw))->format('d/m/Y H:i'); 
    $fim = (new DateTime($fimRaw))->format('d/m/Y H:i'); 

    // Aqui eu construo as mensagem do evento.
    $mensagem .= "⭐ *Título:* $titulo\n\n";
    $mensagem .= "📌 *Descrição:* _$descricao_\n\n";
    $mensagem .= "🗓️ *Início:* $inicio\n";
    $mensagem .= "🗓️ *Fim:* $fim\n\n";
    $mensagem .= "----------------------------------------\n\n";
}

```
_*Esse é apenas um trecho de construção da mensagem, o código como um todo é muito maior, contendo trechos de conexões com a API do Google Agendas, Telegram e demais regras*_

## O bot

<img src="https://raw.githubusercontent.com/IzaqueL95/IzaqueL95.github.io/refs/heads/master/assets/img/tlg.jpeg" 
     alt="Descrição da Imagem" 
     style="max-width: 100%; height: auto;">

<br>

O bot tem uma foto do Homem de Ferro e funciona como uma conversa comum no Telegram. Ele permite consultar os compromissos do dia novamente ou apagá-los, caso eu não queira manter a conversa. A ideia é que o Jarvis envie os compromissos diariamente, cabendo a mim decidir mantê-los ou não.

Etapas
- Conectar-se à API do Google Agenda e buscar os compromissos do dia.
- Listar os compromissos e montar uma mensagem de texto contendo todos.
- Conectar-se à API do Telegram, passando meu ID de usuário e enviando os compromissos.

<br>
Bom e com isso finalizo esse texto, com a criação da minha primeira automação pessoal, apesar de trabalhar a alguns anos como desenvolvedor 😅. 