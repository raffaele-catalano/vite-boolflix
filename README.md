# Boolflix
In questo esercizio si vuole replicare la logica che sta dietro a tantissimi siti che permettono la visione di film e telefilm.
Per fare questo, come fanno siti molto più rinomati, si utilizza una API che permette di avere un insieme di risultati congrui alla ricerca.

### Requirements
- Iscriversi al sito https://www.themoviedb.org. 
- Richiedere la `API_KEY`, la quale verrà utilizzata in tutte le nostre chiamate.
- Una volta generata, la si troverà in Impostazioni e sarà indispensabile per le nostre chiamate.

### Documentation 
A questo url https://developers.themoviedb.org/3 si trovano le indicazioni per tutte le chiamate possibili all’API. Focalizzarsi inizialmente su `Search > Movies`.   
Con questa chiamata è possibile cercare tutti i film associati ad una ricerca (query).  Si passino come parametri `query` e `api_key` per vedere i risultati. Volendo è possibile passare anche `language=it-IT` per filtrare i risultati in lingua italiana.

## Milestone 0:
Progettare la struttura del global state.

## Milestone 1:
Creare un layout base con una *searchbar* (una input e un button) in cui è possibile scrivere, completamente o parzialmente, il nome di un film. Cliccando il  bottone sarà possibile cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
In seguito alla risposta dell’API si devono visualizzare a schermo i seguenti valori per ogni film trovato: 
- Titolo
- Titolo Originale
- Lingua
- Voto

## Milestone 2:
Trasformare la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API.

Allargare poi la ricerca anche alle Serie Tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)

## Milestone 3:
In questa milestone come prima cosa aggiungere la copertina del film o della serie all'elenco.

Trasformare poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da poter stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote.

## Milestone 4:
Trasformare quanto fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
- Un header che contiene logo e search bar;
- Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio la poster_path con w342);
- Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview.
