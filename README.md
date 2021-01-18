# 2021WebFrameworks1

https://github.com/NabilEMAP/2021WebFrameworks1.git

Vraag 1 - deel 1 (10 punten)

Gebruik bijgevoegd bestand ('movies.txt', rechtsklik en save link as) en implementeer volgende functionaliteiten als een Express.js app met EJS als template engine :

1/ zet de films in bijlage in een CouchDB database met naam 'movies'. Maak van elke film een apart document met twee velden : name (naam vd film) en actors (een array van acteurs), bv :

    {

      "_id": "505873ae5adc85198d0576176f006f3c",

      "name": "Bad times at the El Royale",

      "actors": ["Jeff Bridges", "Jon Hamm", "Dakota Johnson"]

    }

2/ voorzie een CouchDB view en zoekscherm dat toelaat om te zoeken op naam van de film. Als resultaat worden de acteurs in HTML getoond. (4 punten).

3/ voorzie een CouchDB view en zoekscherm dat toelaat om te zoeken op acteur. Als resultaat worden de films waar de acteur in speelt in HTML getoond (6 punten). Tip: emit alle actors in de array, samen met de filmnaam om deze view te maken. 

!!! Kopiëer de code van de views in een apart tekstbestand, genaamd 'CouchDB_views.txt' en voeg die toe aan je oplossing zodat ik ze kopiëren in mijn database.

Vraag 2 - deel 2 (10 punten)

Gebruik bijgevoegd bestand ('overtredingen.json', rechtsklik en save link as) en implementeer volgende functionaliteiten als ReactJS app met  Express.js middleware :

1/ importeer 'overtredingen.json' in MongoDB (db : 'examen', collectie : 'overtredingen') zodat elke overtreding een apart document wordt. Gebruik dit commando in een terminal : 'mongoimport --jsonArray --db examen --collection overtredingen --file overtredingen.json'.

2/ voorzie een zoekscherm dat toelaat om te zoeken op 'opnameplaats_straat' (2 punten) OF 'aantal_overtredingen_snelheid' (3 punten). Bij de eerste zoekopdracht wordt de exacte term gebruikt, bij de tweede wordt een minimum gebruikt (dus meer dan of gelijk aan).

3/ voorzie een overzicht van alle overtredingen in HTML formaat (3 punten).

4/ voorzie routing in App.js voor de functionaliteiten in 2 en 3 (2 punten).

Getoonde velden voor de twee functionaliteiten : 'datum_vaststelling', 'opnameplaats_straat', 'aantal_overtredingen_snelheid'.