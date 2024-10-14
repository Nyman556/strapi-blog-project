# Fallstudie: Strapi Blog Project

## Inledning

Detta projekt är en del av en fallstudie som syftar till att jämföra headless CMS-lösningar, specifikt Strapi, med traditionella CMS-system. Genom att bygga en bloggapplikation med Strapi undersöker vi hur det påverkar utvecklingsprocessen, flexibiliteten och användarupplevelsen.

## Projektöversikt

Detta projekt har följande struktur:

/strapi-blog-project

├── /strapi-cms # Strapi headless CMS

└── /frontend # Frontend-applikation

- **/strapi-cms**: Innehåller bloggapplikationen byggd med Strapi som headless CMS.
- **/frontend**: Innehåller frontend-applikationen som interagerar med Strapi CMS.

## Syfte

Syftet med denna fallstudie är att:

1. Utvärdera hur användningen av ett headless CMS påverkar utvecklingsprocessen.
2. Identifiera fördelar och utmaningar med headless CMS i jämförelse med traditionella CMS-system.
3. Analysera hur headless CMS påverkar innehållshantering och användarupplevelse för slutanvändaren.

## Installation

Följ instruktionerna nedan för att ställa in projektet lokalt.

### Strapi CMS

1. Klona detta repository:
   ```bash
   git clone https://github.com/[ditt-github-användarnamn]/strapi-blog-project.git
   cd strapi-blog-project/strapi-cms

2. Installera nödvändiga paket:
   ```bash
   npm install
   
3. Starta Strapi:
   ```bash
   npm run develop

### Frontend

1. Starta en ny konsol och hoppa till frontend-mappen:
   ```bash
   cd strapi-blog-project/frontend

2. Installera nödvändiga paket:
   ```bash
   npm install
   
3. Starta frontend-applikationen:
   ```bash
   npm run dev

4. Öppna din webbläsare och gå till [http://localhost:5173](http://localhost:5173/) (eller den port som används) för att se frontend-applikationen.


## Användning
Följande funktioner finns i applikationen:

Skapa och hantera blogginlägg.
Hantera användare och roller.
Publicera och redigera innehåll i realtid.
