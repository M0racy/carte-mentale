// Contenu de la carte mentale. Modifie ce fichier (ou exporte-le depuis le mode Modifier du site).
window.CARTE = {
  "title": "Tunic · carte mentale",
  "subtitle": "D'après ton carnet d'exploration · après 8 h de jeu · 9 novembre 2026",
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
          "s": "open",
          "l": "accès à tester",
          "d": "Le portail de la statue géante mène devant le château ; la traversée semble possible grâce à des points d'accroche",
          "sub": [
            "Hypothèse : l'Orbe magique permettrait de franchir la séparation",
            "Hypothèse non encore vérifiée"
          ]
        },
        {
          "n": "Mine abandonnée de la montagne du Nord",
          "s": "open",
          "l": "partiellement explorée",
          "d": "Explorée depuis l'entrée de la montagne et par le Passage interdit grâce à l'Orbe magique",
          "sub": [
            "L'énergie rose-violette semble y être extraite",
            "Certaines zones sont encore à explorer"
          ]
        },
        {
          "n": "Passage interdit (NORD Contrées sauvages)",
          "d": "Accessible grâce à l'Orbe magique ; donne accès à la mine du Nord par un autre côté"
        },
        {
          "n": "Souterrains futuristes de la montagne du Nord",
          "sub": [
            "Piste personnelle liée aux « racines du monde » ; le manuel associe cette indication à la clé bleue, pas à la verte"
          ],
          "s": "open",
          "l": "exploration inachevée",
          "d": "Salle technologique très profonde ; nombreux robots surgissant des murs et attaquant ; exploration interrompue après s'y être perdu"
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
          "s": "no",
          "l": "non récupérée",
          "d": "Manuel : régions les plus élevées du ciel",
          "sub": [
            "chateau dans le ciel (pas ghibli)"
          ]
        },
        {
          "k": "blue",
          "n": "Clé bleue",
          "s": "no",
          "l": "non récupérée",
          "d": "Manuel : racines du monde"
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
            "Pages possédées : 2-3, 6-7, 10-21, 24-37",
            "Pages manquantes jusqu'à 37 : 1, 4-5, 8-9, 22-23",
            "Page des trois clés et du dispositif central",
            "Page sur les soldats",
            "Moyen de défier la mort, lié à ce qui est derrière la porte dorée"
          ],
          "s": "open",
          "l": "30 pages"
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
          "d": "Petit renard aux airs de fennec, réveillé sur la plage"
        },
        {
          "n": "Renarde blanche",
          "s": "open",
          "l": "identité inconnue",
          "sub": [
            "Vue au-dessus des batraciens",
            "Statue géante dans le désert",
            "Rencontrée dans l'espace parallèle : hochements de tête, applaudissements, approbation"
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
          "n": "Deux boss",
          "d": "Vers la cloche Ouest · sanctuaire de la forêt"
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
          "d": "Vue dans plusieurs régions ; semble extraite dans la mine de la montagne du Nord",
          "sub": [
            "Hors des conduits, en s'en approchant, la longueur maximale de la jauge de vie diminue",
            "La mine est un lieu d'extraction observé, pas une preuve de sa source originelle"
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
          "n": "Le personnage était déjà mort à son réveil"
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
          "d": "Présence de gisements et d'extraction observée au Nord ; l'origine première de l'énergie reste inconnue"
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
          "n": "La porte dorée n'est qu'une première étape"
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
          "s": "open",
          "l": "à vérifier",
          "d": "Après un rêve sur Tunic, souvenir de points d'accroche devant le château : l'Orbe magique pourrait permettre de traverser. Pas encore essayé."
        },
        {
          "h": "H12",
          "n": "L'énergie rose-violette provient de la renarde",
          "s": "open",
          "l": "hypothèse fragilisée",
          "d": "Ancienne piste affaiblie par la découverte d'une mine ; la découverte ne suffit pas à établir l'origine ultime de l'énergie."
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
            "Extraction apparente dans la mine du Nord ; origine première encore inconnue"
          ]
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
          "n": "Où trouver les clés verte et bleue ?"
        },
        {
          "n": "Comment atteindre le château céleste ?",
          "d": "Piste à tester : utiliser l'Orbe magique sur les points d'accroche près de l'accès déjà découvert"
        },
        {
          "n": "Qui est la renarde, quel est le rôle du personnage ?",
          "sub": [
            "Je pense que j'ai été ramené à la vie par la renarde pour la sauver"
          ]
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
        }
      ]
    }
  ]
};
