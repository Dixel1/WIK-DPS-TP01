# WIK-DPS-TP01


**CONSIGNES :**

- Mettre en place son environnement de développement et les bases du projet avec le moins de dépendances possibles.
- Développer une API qui retourne au format JSON les headers de la requête quand il y une requête HTTP GET sur /ping.
- Le serveur doit écouter sur un port configurable via la variable d'environnement : PING_LISTEN_PORT ou par défaut sur un port au choix.
- Réponse vide avec code 404 si quoi que ça soit d'autre que GET /ping.
- Réalisation d'un README avec documentation sur le lancement du projet.

**Pour télécharger le projet :**
- Aller dans la rubrique "*code*" puis "*Download ZIP*"

![image](https://user-images.githubusercontent.com/63664894/202861559-eb435014-3a09-44e4-a7b2-658488756f2b.png)

**Pour préparer et lancer le projet :**

- Installer node.js + npm (installation Windows depuis https://nodejs.org/en/)
- Une fois téléchargé, extraire le projet 

![image](https://user-images.githubusercontent.com/63664894/202861915-9d61c3c9-d04e-4609-8cea-536d93606013.png)
![image](https://user-images.githubusercontent.com/63664894/202861960-73fc61a1-37e8-4828-a594-351f7b8829e1.png)

- Ouvrir le dossier extrait dans le Terminal 

![image](https://user-images.githubusercontent.com/63664894/202862913-6c356fc9-bf23-444e-989e-190fa309c136.png)

- Configurer le compilateur TypeScript avec les commandes :

  - *npm install --save-dev typescript*

![image](https://user-images.githubusercontent.com/63664894/202863027-67d7e8ce-3377-4157-b7ae-004803686be0.png)

  - *npx tsc*
  - *node dist/app.js*
 
 ![image](https://user-images.githubusercontent.com/63664894/202864389-72059774-4edd-43d8-99ad-7bd929c04ca2.png)
Le port 3000 est ici celui configuré par défaut.

  - Le projet est dorénavent accessible depuis l'adresse affichée dans le Terminal (par défaut http://localhost:3000)



**Résultats :**

- Une requête HTTP GET sur /ping permet de récuperer et d'afficher au format JSON les headers de la requête.

![image](https://user-images.githubusercontent.com/63664894/202863474-6ddfb27d-a46c-460f-a7aa-163cf6a4ba9c.png)

- Une réponse vide avec code erreur 404 est affichée si quoi que ça soit d'autre que GET /ping est tenté

![image](https://user-images.githubusercontent.com/63664894/202863556-dea0106e-50b8-487c-a002-9b1ed01a1ac5.png)

**La configuration personnalisée du port peut-être effectuée grace à la variable PING_LISTEN_PORT dont la valeur est modifiable.**
 
  - Pour ce faire, ouvrir le dossier du projet et aller dans le dossier de chemin *\WIK-DPS-TP01-main\src*
 
 ![image](https://user-images.githubusercontent.com/63664894/202863748-ec10ef63-916b-4879-a36a-3aa5b36314b7.png)

  - Ouvrir le fichier *app.ts* avec n'importe quel éditur de fichier (ici "Visual Studio Code") et modifier la valeur de la variable ***PING_LISTEN_PORT***

 ![image](https://user-images.githubusercontent.com/63664894/202863909-458bc2af-daf6-4a82-a2ba-f8c2320f6172.png)

 ![image](https://user-images.githubusercontent.com/63664894/202863919-b04d0457-9db5-4c3d-8d88-1d0427a0153c.png)

  - Enregistrer et relancer l'API suivant la partie **Pour préparer et lancer le projet :** , le serveur écoute désormais sur le port personnalisé que vous avez défini.
 
 ![image](https://user-images.githubusercontent.com/63664894/202864087-ea682ab0-2707-48e8-aa05-260ef7df221a.png)

**NOTE : Des commentaires sont inclus dans le fichier *app.ts***
