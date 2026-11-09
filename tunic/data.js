// Contenu de la carte mentale. Modifie ce fichier (ou exporte-le depuis le mode Modifier du site).
window.CARTE = {
  "title": "Tunic · carte mentale",
  "subtitle": "D'après ton carnet d'exploration · mise à jour du 9 novembre 2026",
  "core": {
    "t": "TUNIC",
    "s": "carnet en cours"
  },
  "branches": [
    {
      "id": "lieux",
      "name": "Lieux explorés",
      "c": "blue",
      "side": "left",
      "items": [
        {
          "n": "Plage",
          "d": "Lieu du réveil ; passages qui la longent"
        },
        {
          "n": "Forêt",
          "d": "Gardes, statues de renards"
        },
        {
          "n": "Région Est",
          "d": "Cloche de l'Est"
        },
        {
          "n": "Biome plage-désert",
          "sub": [
            "Salles et pièces partiellement dissimulées",
            "Quatre tours",
            "Statue géante de la renarde et son portail"
          ]
        },
        {
          "n": "Souterrains des batraciens",
          "sub": [
            "Figure blanche au-dessus des créatures",
            "Salle aux portes dorées",
            "grappin des franc-maçons dans leur loge",
            "Passage découvert près du marécage / bassin où se baignent les grenouilles",
            "Salle autrefois inaccessible atteinte : Orbe magique récupérée"
          ]
        },
        {
          "n": "Puits",
          "d": "Zone souterraine liée à l'énergie rose-violette"
        },
        {
          "n": "Tombeau",
          "d": "Zones sombres, porte ouvrant sur la lumière rose-violette"
        },
        {
          "n": "Temple de la porte dorée",
          "d": "Sanctuaire, dispositif central"
        },
        {
          "n": "Sanctuaire de la forêt",
          "s": "ok",
          "l": "exploré"
        },
        {
          "n": "Sépulture de l'Avatar",
          "s": "open",
          "l": "incomplète",
          "d": "Sépulture suspendue dans un monde parallèle ; plusieurs accès découverts depuis des endroits différents",
          "sub": [
            "Entrées débouchant en divers points autour de la Sépulture",
            "Emplacements précis des accès non mémorisés"
          ]
        },
        {
          "n": "Espace parallèle",
          "d": "Relie les carrés jaunes"
        },
        {
          "n": "Pièce fermée à quatre murs",
          "d": "Pas de sortie immédiate"
        },
        {
          "n": "Château céleste",
          "s": "ok",
          "l": "accessible",
          "d": "Atteint depuis le portail de la statue géante grâce à l'Orbe magique et aux points d'accroche",
          "sub": [
            "Accès longtemps considéré impossible, puis découvert après un déclic nocturne",
            "Bibliothèque et laboratoire explorés",
            "Clé verte récupérée après le Bibliothécaire"
          ]
        },
        {
          "n": "Grande bibliothèque du château",
          "s": "ok",
          "l": "explorée",
          "d": "Livres de la taille du personnage, tasses et tables gigantesques : lieu vraisemblablement conçu pour de grands êtres",
          "sub": [
            "Représentations rappelant la renarde blanche et les grands renards",
            "Pièce qui paraît encore habitée ou récemment interrompue, peut-être grâce à l'éclairage",
            "Le Bibliothécaire, d'apparence singulière et plus grand que le personnage, détenait la clé verte"
          ]
        },
        {
          "n": "Laboratoire du château",
          "s": "ok",
          "l": "découvert",
          "d": "Des éléments déjà rencontrés au cours de l'aventure y sont réunis",
          "sub": [
            "Tourelles hostiles au personnage, mais pas à certaines autres créatures observées",
            "Pages du manuel, monstres et dispositifs familiers",
            "Impression d'activité interrompue plutôt que d'abandon ancien"
          ]
        },
        {
          "n": "Mine abandonnée de la montagne du Nord",
          "s": "open",
          "l": "zone approfondie",
          "d": "Explorée depuis l'entrée de la montagne et par le Passage interdit grâce à l'Orbe magique",
          "sub": [
            "L'énergie rose-violette semble y être extraite",
            "Certaines zones sont encore à explorer",
            "Plusieurs renards squelettiques retrouvés dans des capsules",
            "Capsules noires et grises observées : leur différence reste inconnue",
            "Une créature a été vue hurlant et se tordant au moment de l'enfermement"
          ]
        },
        {
          "n": "Passage interdit (NORD Contrées sauvages)",
          "d": "Accessible grâce à l'Orbe magique ; donne accès à la mine du Nord par un autre côté"
        },
        {
          "n": "Souterrains futuristes de la montagne du Nord",
          "sub": [
            "Nombreuses créatures à l'apparence de grands renards, enfermées dans des capsules",
            "Clé bleue récupérée après la victoire contre la Matriarche",
            "Interprétation : les capsules servent peut-être de batteries à un réseau d'énergie"
          ],
          "s": "ok",
          "l": "zone terminée",
          "d": "Zone technologique profonde avec robots surgissant des murs, installation de capsules et boss Matriarche des Charognards"
        },
        {
          "n": "Ancien cimetière du marécage",
          "s": "open",
          "l": "en partie exploré",
          "d": "Une nouvelle page du manuel décrit une région très dangereuse et évoque des terres intérieures réservées aux fantômes",
          "sub": [
            "Illustration d'une tête ressemblant au personnage, à l'apparence partiellement squelettique",
            "Le personnage a déjà parcouru une partie de cette région ; accès aux terres intérieures non établi"
          ]
        },
        {
          "n": "Cathédrale",
          "s": "no",
          "l": "piste du manuel",
          "d": "Lieu mentionné parmi les nouvelles pistes d'exploration, pas encore visité d'après le récit"
        }
      ]
    },
    {
      "id": "prog",
      "name": "Progression",
      "c": "gold",
      "side": "left",
      "items": [
        {
          "n": "Cloche Est",
          "s": "ok",
          "l": "activée"
        },
        {
          "n": "Cloche Ouest",
          "s": "ok",
          "l": "activée",
          "d": "Après un boss"
        },
        {
          "n": "Porte dorée",
          "s": "ok",
          "l": "ouverte"
        },
        {
          "k": "red",
          "n": "Clé rouge",
          "s": "ok",
          "l": "déposée",
          "d": "Temple dans la forêt · boss vaincu"
        },
        {
          "k": "green",
          "n": "Clé verte",
          "s": "ok",
          "l": "récupérée",
          "d": "Obtenue dans la bibliothèque du château céleste après le Bibliothécaire, qui l'avait dérobée selon les informations du joueur",
          "sub": [
            "Région du ciel atteinte grâce à l'Orbe magique"
          ]
        },
        {
          "k": "blue",
          "n": "Clé bleue",
          "s": "ok",
          "l": "récupérée",
          "d": "Obtenue après la défaite de la Matriarche des Charognards, au terme de l'exploration du sous-sol"
        },
        {
          "n": "Trois clés réunies",
          "s": "ok",
          "l": "3 sur 3",
          "d": "Les clés rouge, bleue et verte sont acquises ; la rouge a déjà été déposée au temple"
        },
        {
          "n": "Retour au dispositif doré",
          "s": "open",
          "l": "en cours",
          "d": "Le joueur est retourné avec enthousiasme vers la salle des clés ; il suppose que la troisième gemme pourrait libérer la renarde, sans avoir encore vérifié."
        },
        {
          "n": "Quatre tours du désert",
          "s": "ok",
          "l": "activées"
        },
        {
          "n": "Portail de la statue géante",
          "s": "ok",
          "l": "ouvert",
          "sub": [
            "qui te TP devant le chateau"
          ]
        }
      ]
    },
    {
      "id": "obj",
      "name": "Objets",
      "c": "red",
      "side": "left",
      "items": [
        {
          "n": "Lanterne",
          "s": "ok",
          "l": "récupérée",
          "d": "Explorer les passages obscurs"
        },
        {
          "n": "Sablier",
          "s": "ok",
          "l": "récupéré",
          "d": "Ralentit le temps"
        },
        {
          "n": "Poignard magique",
          "s": "ok",
          "l": "récupéré"
        },
        {
          "n": "Manuel",
          "d": "Langue en partie inconnue",
          "sub": [
            "Ancienne liste des pages possédées, à actualiser : 2-3, 6-7, 10-21, 24-37",
            "Ancienne liste des pages manquantes jusqu'à 37, à actualiser : 1, 4-5, 8-9, 22-23",
            "Page des trois clés et du dispositif central",
            "Page sur les soldats",
            "Moyen de défier la mort, lié à ce qui est derrière la porte dorée",
            "Pages supplémentaires récupérées dans la dernière session (numéros à préciser)",
            "Page sur le marécage de l'ancien cimetière, les fantômes et une tête partiellement squelettique",
            "Informations sur les Charognards et leur Matriarche",
            "Mention de la Cathédrale comme nouvelle piste d'exploration"
          ],
          "s": "open",
          "l": "nouvelles pages"
        },
        {
          "n": "Épée bleue flottante",
          "s": "open",
          "l": "aperçue",
          "d": "Aussi visible sur le menu du jeu"
        },
        {
          "n": "Objet derrière les batraciens",
          "s": "ok",
          "l": "récupéré",
          "d": "Il s'agissait de l'Orbe magique ; accès trouvé près du bassin des grenouilles"
        },
        {
          "n": "Orbe Magique",
          "d": "Sert de grappin, permet de s'accrocher aux points prévus et d'explorer d'autres endroits",
          "s": "ok",
          "l": "récupérée"
        }
      ]
    },
    {
      "id": "meca",
      "name": "Mécaniques",
      "c": "yellow",
      "side": "left",
      "items": [
        {
          "n": "Statues",
          "d": "Certaines permettent de se reposer"
        },
        {
          "n": "Offrandes",
          "d": "Améliorer les attributs"
        },
        {
          "n": "Barre de mana",
          "d": "Plusieurs objets utilisent la magie"
        },
        {
          "n": "Mort",
          "d": "Séquence particulière la première fois ; essence récupérable sur place"
        },
        {
          "n": "Prosternation",
          "d": "Active structures, tours, statues, carrés jaunes"
        },
        {
          "n": "Carrés jaunes",
          "d": "Voyage rapide ; certains sombres ou inutilisables"
        },
        {
          "n": "Grappin",
          "d": "L'Orbe magique sert à rejoindre des points d'accroche et franchir des passages auparavant inaccessibles",
          "sub": [
            "A ouvert le Passage interdit et de nouveaux chemins dans la mine",
            "Nouvelle piste non testée : atteindre le château céleste"
          ]
        },
        {
          "n": "Masques dans la mine",
          "d": "Le personnage et les Charognards portent des masques dans la zone des émanations",
          "sub": [
            "Leur vulnérabilité paraît comparable, sans prouver une parenté d'espèce"
          ]
        },
        {
          "n": "Tourelles et sélection des cibles",
          "d": "D'après les observations du joueur, les tourelles se déclenchent contre lui, mais ignorent certaines autres créatures",
          "sub": [
            "Hypothèses : mécanisme de défense, ciblage d'une espèce ou d'une catégorie de menace",
            "Leurs créateurs et leur programmation ne sont pas identifiés"
          ]
        }
      ]
    },
    {
      "id": "etres",
      "name": "Personnages et créatures",
      "c": "green",
      "side": "right",
      "items": [
        {
          "n": "Le personnage",
          "d": "Petit renard aux airs de fennec, réveillé sur la plage ; porte un masque pour se protéger des émanations de la mine",
          "sub": [
            "Taille et espèce encore incertaines : jeune grand renard, adulte plus petit ou autre espèce ?",
            "Représentation de sa tête sous un aspect partiellement squelettique dans une page sur le cimetière"
          ]
        },
        {
          "n": "Renarde blanche",
          "s": "open",
          "l": "identité inconnue",
          "sub": [
            "Vue au-dessus des batraciens",
            "Statue géante dans le désert",
            "Rencontrée dans l'espace parallèle : hochements de tête, applaudissements, approbation",
            "Le joueur lui fait confiance mais redoute qu'elle appartienne au groupe exploitant les renards",
            "Son identité, son peuple et son rôle exact restent inconnus",
            "Nouvelle hypothèse : elle serait peut-être la mère du personnage, en raison de sa taille, de leur ressemblance et de gestes perçus comme affectueux"
          ]
        },
        {
          "n": "Grands renards des capsules",
          "s": "open",
          "l": "identité inconnue",
          "d": "Créatures de grande taille, dont les têtes rappellent les statues ; plusieurs ont une apparence squelettique",
          "sub": [
            "Un très grand nombre de capsules observé sous la montagne",
            "Une créature hurle et se tord avant d'être enfermée : enfermement manifestement subi pour elle",
            "Hypothèse du joueur : leur énergie pourrait être exploitée",
            "Possible lien avec les grands occupants du château, non confirmé"
          ]
        },
        {
          "n": "Charognards",
          "d": "Nom de l'espèce présente dans les profondeurs de la montagne, d'après les pages récupérées",
          "sub": [
            "Présence auprès des installations minières et d'enfermement",
            "Masques portés, vraisemblablement pour se protéger des émanations",
            "Leur relation biologique avec le personnage et les grands renards reste inconnue"
          ]
        },
        {
          "n": "Gardes",
          "d": "Certains en cape verte, dont celui du pont"
        },
        {
          "n": "Soldats",
          "d": "Manuel : fantômes qui ne savent plus pourquoi ils combattent et suivent leurs derniers ordres"
        },
        {
          "n": "Batraciens",
          "d": "Présents dans des salles et près d'un bassin ; passage découvert vers l'Orbe magique auparavant inaccessible"
        },
        {
          "n": "L'Avatar",
          "d": "« Ci-gît l'Avatar » ; statue triste qui ressemble au personnage"
        },
        {
          "n": "Boss rencontrés",
          "d": "Boss de la cloche Ouest, boss du sanctuaire de la forêt, Matriarche des Charognards et Bibliothécaire"
        },
        {
          "n": "Matriarche des Charognards",
          "s": "ok",
          "l": "vaincue",
          "d": "Boss rencontré dans les profondeurs de la montagne ; protégeait la clé bleue"
        },
        {
          "n": "Bibliothécaire",
          "s": "ok",
          "l": "vaincu",
          "d": "Figure à l'apparence inhabituelle, plutôt grande, rencontrée dans le château ; détenait la clé verte volée"
        }
      ]
    },
    {
      "id": "energie",
      "name": "Énergie et structures",
      "c": "violet",
      "side": "right",
      "items": [
        {
          "n": "Énergie rose-violette",
          "d": "Énergie présente dans les installations et la mine ; les émanations hors conduits réduisent la jauge maximale de vie",
          "sub": [
            "Hors des conduits, en s'en approchant, la longueur maximale de la jauge de vie diminue",
            "La mine est un lieu d'extraction observé, pas une preuve de sa source originelle",
            "Nouvelles observations : renards enfermés dans de nombreuses capsules près des installations",
            "Le lien exact entre leur enfermement et l'alimentation énergétique reste hypothétique"
          ]
        },
        {
          "n": "Capsules noires et grises",
          "d": "Deux apparences de capsules observées dans la mine, où sont enfermées des créatures rappelant les grands renards",
          "sub": [
            "Hypothèse : stades successifs d'un même mécanisme",
            "Alternative : changement de technologie ou de source d'énergie",
            "Aucune explication confirmée de la différence de couleur"
          ]
        },
        {
          "n": "Enfermement des grands renards",
          "d": "Observation d'un grand nombre de créatures enfermées ; au moins une hurle et se tord avant son placement dans une capsule",
          "sub": [
            "Le joueur interprète le dispositif comme une exploitation à grande échelle",
            "Responsables, fonctionnement et finalité encore inconnus"
          ]
        },
        {
          "n": "Structures métalliques",
          "d": "Parallélépipèdes, certaines activables par prosternation"
        },
        {
          "n": "Conduits et tracés au sol",
          "d": "L'énergie y circule après activation"
        },
        {
          "n": "Trois couleurs",
          "d": "Rouge, vert, bleu : récurrentes, liées aux clés"
        },
        {
          "n": "Pièces dissimulées",
          "d": "Lumière et ambiance sonore particulières"
        }
      ]
    },
    {
      "id": "hyp",
      "name": "Hypothèses",
      "c": "violet",
      "side": "right",
      "plain": true,
      "items": [
        {
          "h": "H1",
          "n": "Le personnage était déjà mort à son réveil",
          "d": "Première intuition renforcée subjectivement par la Sépulture de l'Avatar, une illustration de tête squelettique et le texte du manuel sur les fantômes ; rien n'est encore prouvé"
        },
        {
          "h": "H2",
          "n": "La renarde l'a ramené à la vie pour une mission"
        },
        {
          "h": "H3",
          "n": "Mission : libérer la renarde, réunir les clés, ou les deux"
        },
        {
          "h": "H4",
          "n": "La renarde est une entité spirituelle"
        },
        {
          "h": "H5",
          "n": "L'énergie rose-violette vient de la mine du nord dans les montagnes",
          "d": "La mine semble exploiter l'énergie, mais on ne sait pas si elle la produit, la reçoit ou l'extrait d'êtres enfermés",
          "s": "open",
          "l": "origine incertaine"
        },
        {
          "h": "H6",
          "n": "Les structures exploitent cette énergie"
        },
        {
          "h": "H7",
          "n": "La Sépulture est liée à l'identité du personnage"
        },
        {
          "h": "H8",
          "n": "La mort est le thème central"
        },
        {
          "h": "H9",
          "n": "La porte dorée n'est qu'une première étape",
          "d": "Intuition persistante : la porte dorée, puis les trois clés, ne résument peut-être pas l'histoire ; de nombreuses questions demeurent"
        },
        {
          "h": "H10",
          "n": "Le château céleste a un autre accès",
          "s": "no",
          "l": "piste abandonnée",
          "d": "Hypothèse initiale désormais jugée fausse : des points d'accroche visibles devant le château pourraient permettre d'y accéder par le passage déjà découvert."
        },
        {
          "h": "H11",
          "n": "Le passage déjà découvert mène bien au château céleste",
          "s": "ok",
          "l": "confirmée",
          "d": "Le passage devant le château était bien le bon : l'Orbe magique a permis de franchir les points d'accroche et d'entrer"
        },
        {
          "h": "H12",
          "n": "L'énergie rose-violette provient de la renarde",
          "s": "open",
          "l": "reformulée",
          "d": "Hypothèse initialement abandonnée après découverte de la mine, puis reconsidérée après avoir vu des renards squelettiques enfermés dans des capsules. Une exploitation de leur énergie est soupçonnée, sans preuve du mécanisme ni lien certain avec la renarde blanche."
        },
        {
          "h": "H13",
          "n": "Mon personnage a perdu la mémoire",
          "s": "open",
          "l": "à vérifier",
          "d": "Il aurait vécu ou exploré ce monde avant son réveil sur la plage, sans s'en souvenir"
        },
        {
          "h": "H14",
          "n": "Les pages du manuel sont les fragments de mon propre carnet",
          "s": "open",
          "l": "à vérifier",
          "d": "Hypothèse d'une aventure antérieure dont les pages récupérées préserveraient les souvenirs"
        },
        {
          "h": "H15",
          "n": "Je pourrais appartenir au peuple des grands renards",
          "s": "open",
          "l": "à vérifier",
          "d": "Ma petite taille pourrait tenir à mon âge ou à une variation naturelle ; l'existence d'une troisième espèce demeure possible"
        },
        {
          "h": "H16",
          "n": "Les tourelles me considèrent comme une menace",
          "s": "open",
          "l": "à vérifier",
          "d": "Elles attaquent le personnage mais pas certaines autres créatures ; on ignore pourquoi et qui les a construites"
        },
        {
          "h": "H17",
          "n": "Le château aurait été construit pour le peuple des grands renards",
          "s": "open",
          "l": "à vérifier",
          "d": "Hypothèse fondée sur les proportions gigantesques du mobilier et la ressemblance des représentations avec les créatures des capsules"
        },
        {
          "h": "H18",
          "n": "La renarde blanche pourrait être ma mère",
          "s": "open",
          "l": "à vérifier",
          "d": "Après la rencontre dans l'espace parallèle, le joueur envisage un lien familial : ressemblance de renards, différence de taille compatible avec adulte et enfant, gestes interprétés comme affectueux. Aucun lien de parenté établi."
        },
        {
          "h": "H19",
          "n": "Déposer la troisième clé pourrait libérer la renarde blanche",
          "s": "open",
          "l": "à vérifier",
          "d": "Hypothèse formulée en retournant au temple avec les trois clés ; le dispositif n'a pas encore été activé dans le récit actuel."
        }
      ]
    },
    {
      "id": "q",
      "name": "Questions ouvertes",
      "c": "slate",
      "side": "right",
      "plain": true,
      "items": [
        {
          "n": "Que protègent les gardes ? D'où vient le personnage ?",
          "sub": [
            "Ce sont des fantômes qui executent en boucle le dernier ordre qu'ils ont reçu"
          ]
        },
        {
          "n": "Source de l'énergie : les structures la reçoivent ?",
          "sub": [
            "Les renards servent-ils de batteries ?",
            "Que distinguent les capsules noires et grises ?"
          ],
          "d": "La mine exploite l'énergie ; des renards sont enfermés dans des capsules, mais le mode d'extraction et la source initiale restent incertains"
        },
        {
          "n": "Pourquoi ces salles sont-elles dissimulées ?",
          "sub": [
            "énergie rose / violette"
          ]
        },
        {
          "n": "Faut-il améliorer les attributs pour se balader plus librement dans la sépulture ?"
        },
        {
          "n": "La Sépulture a-t-elle d'autres entrées ?",
          "s": "ok",
          "l": "fait",
          "d": "Oui : plusieurs accès découverts depuis différents endroits, débouchant autour de la Sépulture suspendue. Emplacements précis non mémorisés."
        },
        {
          "n": "Quel lien entre le personnage et l'Avatar ?",
          "sub": [
            "théorie : c'est notre prorpe sépulture"
          ]
        },
        {
          "n": "Où trouver les clés verte et bleue ?",
          "s": "ok",
          "l": "résolu",
          "d": "Bleue : profondeurs et Matriarche des Charognards. Verte : château céleste et Bibliothécaire."
        },
        {
          "n": "Comment atteindre le château céleste ?",
          "d": "Par le passage déjà repéré, grâce à l'Orbe magique utilisée sur des points d'accroche",
          "s": "ok",
          "l": "résolu"
        },
        {
          "n": "Qui est la renarde, quel est le rôle du personnage ?",
          "sub": [
            "Le joueur espère qu'elle est une victime ou une opposante, mais craint qu'elle participe à l'exploitation",
            "Espèce, intentions et raison de son enfermement inconnues",
            "Le personnage est-il un jeune grand renard, un individu d'une autre taille ou d'une autre espèce ?",
            "H18 : existe-t-il un lien mère-enfant entre la renarde blanche et le protagoniste ?"
          ]
        },
        {
          "n": "Qui enferme les grands renards, et pourquoi ?",
          "d": "Les Charognards participent-ils à l'ensemble du système ? Quel est le rôle des autres peuples ?"
        },
        {
          "n": "Pourquoi les tourelles ciblent-elles le personnage ?",
          "d": "Ciblage sélectif observé dans le laboratoire ; origine et critères inconnus"
        },
        {
          "n": "Pourquoi les capsules sont-elles noires ou grises ?",
          "d": "Évolution avec le temps, différents états ou modification de la technologie ?"
        },
        {
          "n": "Le manuel appartient-il au personnage ?",
          "d": "Et s'il avait perdu la mémoire d'une exploration précédente ?"
        },
        {
          "n": "Réunir les trois clés marque-t-il vraiment la fin de l'histoire ?",
          "d": "Impression persistante de mystères non résolus ; prochaine étape au temple doré"
        }
      ]
    },
    {
      "id": "amb",
      "name": "Ressentis",
      "c": "green",
      "side": "right",
      "items": [
        {
          "n": "Forêt",
          "d": "Familiarité, souvenirs d'enfance, lumière filtrée"
        },
        {
          "n": "Monde abandonné mais gardé",
          "d": "Curiosité, mystère"
        },
        {
          "n": "Salles cachées",
          "d": "Inquiétude ; sons graves comme dans une église"
        },
        {
          "n": "Tombeau, portails jaunes",
          "d": "Émerveillement"
        },
        {
          "n": "Lanterne, prosternation, porte dorée",
          "d": "Enthousiasme, forte excitation"
        },
        {
          "n": "Déclic nocturne sur le château céleste",
          "d": "Rêve consacré à Tunic ; souvenir des points d'accroche et intuition qu'il manquait seulement l'Orbe magique"
        },
        {
          "n": "Mine et capsules",
          "d": "Horreur devant le nombre de renards enfermés, envie de fuir les images ; empathie forte après les hurlements et la souffrance observés"
        },
        {
          "n": "Doutes sur la renarde blanche",
          "d": "Attachement malgré le mystère ; peur et tristesse à l'idée qu'elle soit du côté des exploiteurs"
        },
        {
          "n": "Bibliothèque gigantesque",
          "d": "Étonnement devant l'échelle du mobilier ; impression d'une pièce toujours vivante malgré l'absence des occupants, peut-être liée à la lumière"
        },
        {
          "n": "Trois clés réunies",
          "d": "Impression, et non pression, de passer à côté de quelque chose ; conviction personnelle que le récit comporte plusieurs couches"
        },
        {
          "n": "Hypothèse d'un lien mère-enfant",
          "d": "Émotion profonde, distincte de l'excitation intellectuelle ; frustration de ne pas y avoir pensé plus tôt ; désir intense de libérer la renarde, au point de courir vers le temple"
        }
      ]
    }
  ]
};
