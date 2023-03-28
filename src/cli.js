#!/usr/bin/env node

import chalk from "chalk";
import fs from "fs";
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, indentificador) {
    if(valida) {
        console.log(
            chalk.yellow('Lista validada'), 
            chalk.black.bgGreen(indentificador = ''), 
            await listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow('Lista de Links'), 
            chalk.black.bgGreen(indentificador = ''), 
            resultado);
    }
}

async function processaTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === 'valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === "ENOENT") {
            console.log('arquivo ou diretório não existe');
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(valida, resultado);

    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`);
            imprimeLista(valida, lista, nomeDoArquivo);

        })
    }

}

processaTexto(caminho);