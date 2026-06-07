Om Somm@Home te draaien moet de volgende software geïnstalleerd worden.
• Een browser, bij voorkeur Chrome
• Een front-end IDE(Intgrated Development Environment), bij voorkeur WebStorm
• Node.js
• Npm
• Een back-end IDE, bij voorkeur IntelliJ
o Java 21 of een andere (longtime support) versie
o Dependencies
• JDK (Java Development Kit)
• Git(hub-account)
• Postman
• PostgreSQL/PgAdmin
Hieronder wordt stap voor stap uitgelegd hoe de software geïnstalleerd moet worden.
2.1 Browser
Gebruik bij voorkeur Chrome, deze is te downloaden via Google Chrome-webbrowser
2.2 Webstorm
Dit programma is gebruikt voor de front-end code van de applicatie.
1. Download Webstorm via officiele website van JetBrains via
   https://www.jetbrains.com/webstorm/
2. Klik op de download knop.
3. Ga naar je downloadsmap en klik op het WebStorm bestand om de installatie te
   starten.
4. Start WebStorm op.
5. Open het project door via File > Open de projectmap van Somm@Home te openen of
   kies File>New>Project from version control om de github repo te klonen.
6. Open de terminal in WebStorm links onderaan je scherm of via View>Tool Window
>Terminal.
4
2.3 Node.js & npm
1. Download Node.js (incl npm) via de officiële website: Node.js — Download Node.js®
2. Open de downloads map en dubbelklik op het node-bestand.
3. Volg de installatie wizard om door de verschillende stappen van de installatie te
   gaan. Hierbij kun je de standaard opties aanhouden en vervolgens op ‘Install’ klikken.
4. Herstart Webstorm
5. Controleer via de terminal in WebStorm of de juiste Node versie is geïnstalleerd door
   te typen: ‘node -v’ en op enter te drukken. Als er een versienummer verschijnt is de
   installatie goed gegaan.
6. Controleer via de terminal in WebStorm of de juiste npm versie is geïnstalleerd door
   ‘npm -v’ te typen en op enter te drukken.
   2.4 IntelliJ
1. Ga naar de officiële JetBrains website om IntelliJ te installeren
   https://www.jetbrains.com/idea/
2. Klik op de download knop.
3. Ga naar je downloadsmap en klik op het IntelliJ bestand om de installatie te starten.
4. Start IntelliJ op.
5. Open het project door via File > Open de projectmap van Somm@Home te openen of
   kies File>New>Project from version control om de github repo te klonen.
6. Open de terminal in IntelliJ links onderaan je scherm of via View>Tool Window
>Terminal.
2.5 JDK
Om IntelliJ te kunnen runnen en de applicatie te laten draaien, moet er ook een JDK
geïnstalleerd worden. Bijvoorbeeld versie 21 of een andere longtime support versie.
1. Ga naar de officiële Oracle website
   https://www.oracle.com/java/technologies/downloads/#java21
2. Klik op het tabje met de versie die je wilt installeren en kies voor de Installer
3. Ga naar de downloads map en run de installatie
4. Open je IntelliJ en ga naar File>Project Structure.
   5
5. Klik op het dropdownmenu naast SDK en selecteer de geïnstalleerde JDK. Klik
   vervolgens op Apply en Ok om de wijzigingen op te slaan.
6. Controleer via je terminal of JDK goed is geïnstalleerd door ‘java-version’ te typen.
   2.6 Postman
   Via Postman kan de backend van de applicatie getest worden, zonder dat een frontend
   applicatie nodig is.
1. Ga naar de officiële Postman website https://www.postman.com/downloads/
2. Klik op de Windows x64 knop om de Postman te downloaden.
3. Ga naar je downloadsmap en start de installatie.
4. Start Postman, log in of maak een nieuw account aan.
5. Importeer de Somm@Home collectie (te vinden in de bijlage Somm@Home.JSON)
   door op ‘Import’ te klikken en de Somm@Home collectie te importeren.
6. Vervolgens is de Somm@Home collectie via de zijbalk onder ‘Collections’ terug te
   vinden en te gebruiken.
   2.7 PostgreSQL/PgAdmin
1. Ga naar de officiële PostgreSQL website https://www.postgresql.org/download/
2. Klik op de Windows knop om de Windows versie te downloaden.
3. Ga naar je download map en installeer PostgreSQL. Er wordt gevraagd om een
   wachtwoord in te stellen (ik heb Diesel!167 gebruikt) voor de user (‘postgres’).
   Onthoudt dit wachtwoord goed, je hebt het later nodig. De standaardpoort die wordt
   gebruikt is 5432, zorg dat deze vrij is of stel een andere poort in. De overige
   instellingen kunnen standaard blijven staan.
4. Na de installatie van PostgreSQL kan je pgAdmin bij je programma’s vinden. Start
   pgAdmin op.
5. Klik met de rechtermuisknop op ‘Servers’ in de linkerbalk en selecteer
   ‘Register>Server’ om een nieuwe serververbinding toe te voegen. En vul de volgende
   gegevens in:
   General
   Name: Eindopdr_Sommelier@home
   Connection
   6
   Host name/adress: localhost
   Port: 5432 (of een andere als je die hebt ingesteld)
   Maintenance database: postgres
   Username: de gebruikersnaam die je hebt ingesteld tijdens de installatie
   (meestal ‘postgres’)
   Password: het wachtwoord dat je hebt ingesteld bij de installatie (bij mij
   Diesel!167)
   Klik op ‘Save’ om de instellingen op te slaan. pgAdmin zal nu verbinding proberen te
   maken met de ingestelde PostgreSQL server.
6. Maak een database aan door met de rechtermuisknop op Databases (in je servers) te
   klikken en selecteer Create>Database. Zet hier de instellingen die hierboven
   genoemd zijn. In de IntelliJ applicatie zijn in het bestand application.properties alle
   verdere instellingen te vinden. Pas deze zo nodig aan.
7. Herstart de applicatie als je dingen hebt gewijzigd.
   Als alle bovenstaande stappen succesvol zijn doorlopen, kan de applicatie gedraaid worden
   door zowel in WebStorm als IntelliJ op de groene ‘play’ knop te klikken. Vervolgens kan de
   webapplicatie via SOMM@Home (localhost:5173, of een andere ingestelde poort) geopend
   worden