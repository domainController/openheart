📝 MOA - Sauvegarde profil simulé via API

📅 Date : 2025-03-25  
👨‍💻 Auteur : Patrice  
🧪 Statut : Fonctionnel (simulation, sans Supabase)

## 🎯 Objectif

Créer une première fonctionnalité qui permet d’envoyer les informations saisies dans un formulaire vers une route API en POST.

## ✅ Étapes réalisées

1. Création du formulaire dans `page.tsx`
2. Ajout d’un champ `hasChildren` conditionnant l’apparition de `Parental Status`
3. Récupération des options dynamiques depuis Algolia pour 3 menus
4. Création d’un bouton `Save` qui appelle une route API locale
5. Création de la route `app/api/save_profile/route.ts`
6. Simulation d’un enregistrement avec `console.log(data)` dans le terminal

## 🔄 Données testées

- Nom : Khalil Ben Dekiche
- Date de naissance : 2002-11-10
- Statuts relationnel, engagement et parental : choisis dynamiquement
- Résultat affiché : payload complet dans le terminal

## 📍 Prochaines étapes

- Connexion à Supabase réelle (insertion SQL)
- Affichage du `user_id` retourné
- Séparation des styles Tailwind dans un fichier dédié
- Ajout de la sauvegarde persistante dans une table dédiée

---
