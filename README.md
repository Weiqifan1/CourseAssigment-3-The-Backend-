# CourseAssigment-3
CA3 making a seed for our group

# Vejledning i at sætte seedet op
Vejledning består af 3 dele.
* Sæt jwtBackend op 
* Sæt frontend op (SPA)
* sæt seedMobilApp op (Mobile App)

# jwtBackend
Guiden tager udgangspunkt i at du bruger Netbeans, Visual Studio Code og et kommandline program. For at sætte jwtBackend op starter du med at downloade projektet fra Github. Dette kan gøres fra Netbeans eller med git clone {repositorylink} i kommandolinjen.

* Lav et schema i din lokale database, og husk schema navnet. (Dette gøres kun en gang).
* Åben projektet i Netbeans og gå til Other Sources/src/main/resources/META_INF. Slet persistence.xml filen.
* Højre klik på projektet og lav en ny persistence unit som **SKAL** hedde **pu**. (Vær sikker på at du kan forbinde til din database. Brug det schema, du lige har lavet. **Dette trin behøver du ikke at gøre, hvis du vil arbejde med backenden, der er deployet på Benediktes server. Når du cloner projektet er der en persistence unit med som virker med backend serveren**).
* Opret databasen(skal **KUN** gøres hvis det er første gang projektet køres lokalt). Åben Source Packages/Utils og kør **SetupTestUsers.java**. Dette opretter en test database.
* Åben Web Pages i Netbeans. Derefter højre klikker du på index.html og trykker på run file. Dette starter tomcat serveren, og en index side vises nu i browseren. Gem urlen uden /index.html dvs. den url du gemmer kan f.eks. se sådan ud: http://localhost:8084/jwtbackend (OBS dit link kan se anderledes ud en det viste link).

jwtBackend er nu sat op, og klar til brug :neckbeard:

# Frontend
* Gå til roden af frontend-delen i kommandline. Det gøres ved at gå til folderen, hvor du har clonede projektet. Derefter **cd CourseAssigment-3-The-Backend-\frontend** 
* Install dependencies. Hvis du bruger npm: **npm install** - Bruger du yarn: **yarn install**
* Åben projektet i din favorit editor
* Start projektet. Hvis du bruger npm: **npm start**. Bruger du yarn: **yarn start**
* I din editor åbner du **apiFacade.js**. I toppen af filen **tjekker du URL variablen**, er den samme som din lokale server(urlen du kopierede i jwtBackend vejledningen **(Dette gøres kun, hvis du ønsker at arbejde lokalt. Når du har clonet projektet er persistence unit og url sat til at forbinde med en deployed server)**.
* Hvis du vil køre med en **deployed database** skal urlen være: **https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT**

Du er nu klar til at kode i frontend delen :man:

# SeedMobileApp
* Gå til roden af frontend-delen i kommandline. Det gøres ved at gå til folderen, hvor du har clonede projektet. Derefter **cd CourseAssigment-3-The-Backend-\SeedMobileApp** 
* Install dependencies. Hvis du bruger npm: **npm install** - Bruger du yarn: **yarn install**
* Åben projektet i din favorit editor
* I din editor åbner du **apiFacade.js**. I toppen af filen **tjekker du URL variablen**, er den samme som din lokale server(urlen du kopierede i jwtBackend vejledningen.
* Hvis du vil køre med en **deployed database** skal urlen være: **https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT**
* Start projektet. Hvis du bruger npm: **npm start**. Bruger du yarn: **yarn start**
* Sørg for at der er strøm på din mobil, og sæt den til at lade op mens du koder.
* Åben Expo appen i din smartphone.
* Scan den firkantet barcode på skærmen, som blev lavet, da du startede projektet. (Sørg for at computeren og mobilen er på samme netværk).

Du er nu klar til at kode i mobil appen :feelsgood:

God fornøjelse :shipit:
