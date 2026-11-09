// Contenu de la carte mentale. Modifie ce fichier (ou exporte-le depuis le mode Modifier du site).
window.CARTE = {
  "title": "Tunic · carte mentale",
  "subtitle": "D'après ton carnet d'exploration · 8 h de jeu · 8 novembre 2026",
  "core": {
    "t": "TUNIC",
    "s": "9 h · carnet"
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
            "grappin des franc-maçons dans leur loge"
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
          "l": "incomplète"
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
          "s": "no",
          "l": "accès non trouvé"
        },
        {
          "n": "Passage interdit (NORD Contrées sauvages)",
          "d": "Grâce au grappin"
        },
        {
          "n": "Sous sol futuriste sous la montagne du nord avec des petits robots murs partout (je suis perdu dans cette partie de l'exploration)",
          "sub": [
            "Me fait penser à la phrase qui concerne la clé verte (au plus profond dans les racines de la terre)"
          ]
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
          "s": "no",
          "l": "non récupéré"
        },
        {
          "n": "Orbe Magique",
          "d": "Permet de s'accrocher sur les grappins"
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
          "d": "Permet de s'accrocher aux crochets (et autre) permet d'explorer plus d'endroits"
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
          "d": "Gardent un objet inaccessible"
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
          "d": "Plusieurs régions, souterrains, tombeau"
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
          "n": "L'énergie rose-violette vient de la mine du nord dans les montagnes"
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
          "n": "Le château céleste a un autre accès"
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
            "Au nord, dans les montagnes, il y a une sorte de mine. L'énergie semble provenir de cet endroit"
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
          "d": "réponse : OUI"
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
          "n": "Comment atteindre le château céleste ?"
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
        }
      ]
    }
  ]
};
