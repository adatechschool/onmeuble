#!/bin/bash
#!NON FONCTIONNEL

# Chemins vers les dossiers contenant les package.json
CHEMIN_FRONT="./front"
CHEMIN_BACK="./back"

# Fonction pour ouvrir un terminal et lancer le serveur
lancer_serveur() {
    xterm -e "cd $1 && npm run $2; read -p 'Appuyez sur Entrée pour fermer ce terminal'"
}

# Ouvrir un terminal pour le serveur back
lancer_serveur "$CHEMIN_BACK" "dev" &

# Attendre quelques secondes avant d'ouvrir le terminal pour le serveur back
sleep 5

# Ouvrir un terminal pour le serveur front
lancer_serveur "$CHEMIN_FRONT" "start" &

# Attendre que les serveurs soient lancés avant de terminer le script
read -p "Tous les serveurs sont lancés. Appuyez sur Entrée pour quitter."
