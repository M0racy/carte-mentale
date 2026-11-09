# Mon site perso

Site statique publié avec GitHub Pages. Aucune compilation : ce sont des fichiers HTML, CSS et JS.

## Contenu

```
index.html          Page d'accueil (liste des pages du site)
tunic/
  index.html        Carte mentale Tunic
  style.css         Mise en forme (thèmes clair et sombre)
  app.js            Affichage, mode Modifier, export
  data.js           Contenu de la carte : c'est le seul fichier à modifier
.nojekyll           Demande à GitHub Pages de servir les fichiers tels quels
```

## Publier sur GitHub Pages

1. Crée un dépôt sur GitHub. Si tu le nommes `<ton-pseudo>.github.io`, le site sera à la racine : `https://<ton-pseudo>.github.io/`. Avec un autre nom, il sera à `https://<ton-pseudo>.github.io/<nom-du-depot>/`.
2. Envoie le contenu de ce dossier à la racine du dépôt :
   ```bash
   git init
   git add .
   git commit -m "Premier commit du site"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/<nom-du-depot>.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment**, source **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une minute ou deux, la carte est visible à `…/tunic/`.

## Mettre à jour la carte

Deux façons :

- **Depuis le site** : ouvre la carte, clique sur **Modifier**, fais tes changements (ils restent enregistrés dans ton navigateur), puis **Télécharger data.js**. Remplace `tunic/data.js` dans le dépôt par ce fichier, commit, push.
- **À la main** : modifie directement `tunic/data.js`.

Les modifications faites sur le site par un visiteur restent dans son propre navigateur : seul un commit change la version publiée.

### Format de `data.js`

Chaque branche (`branches`) a un nom (`name`), une couleur (`c` : `blue`, `gold`, `red`, `yellow`, `green`, `violet`, `slate`), un côté (`side` : `left` ou `right`) et des éléments (`items`). Un élément peut avoir :

| Clé   | Rôle                                                        |
| ----- | ----------------------------------------------------------- |
| `n`   | Nom (obligatoire)                                           |
| `d`   | Précision affichée sous le nom                              |
| `s`   | État : `ok` (fait), `open` (en cours), `no` (non trouvé)    |
| `l`   | Libellé de la pastille d'état                               |
| `sub` | Liste de sous-éléments                                      |
| `k`   | Losange de couleur devant le nom (clés)                     |
| `h`   | Numéro d'hypothèse (H1, H2…)                                |

## Tester en local

Ouvre `index.html` dans un navigateur, ou lance `python3 -m http.server` dans ce dossier puis va sur http://localhost:8000.
