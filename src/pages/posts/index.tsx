import Head from 'next/head';
import React from 'react';
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