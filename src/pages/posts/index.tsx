import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './style.module.scss';

export default function Posts(){
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Titulo do post</strong>
                        <p>Parágrafo do texto</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Titulo do post</strong>
                        <p>Parágrafo do texto</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Titulo do post</strong>
                        <p>Parágrafo do texto</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async() => {
    const prismic = getPrismicClient()
    
    const response = await prismic.query([
        Prismic.predicates.at('document.type','publica')
    ],{
        fetch: ['publica.title', 'publica.content'],
        pageSize: 100,
    })

    console.log(response)

    return {
        props: {}
    }
}