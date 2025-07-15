ayoub_gh
ayoub_gh
Online

ayoub_gh — 16/06/2025 12:16
Objectifs stratégiques re-classés et enrichis (détaillés + contraintes + exemples concrets)

1. Augmentation des gains financiers
Pour dynamiser la rentabilité, les distributeurs cherchent à augmenter leurs volumes et à dégager de nouvelles sources de marge sans relever les prix faciaux.
Monter la part des MDD : Carrefour place les marques propres au cœur de son modèle et veut qu’elles représentent 40 % des ventes alimentaires d’ici 2026, améliorant la marge commerciale tout en offrant des prix bas. (carrefour.com)
Capitaliser sur le e-commerce et le drive : E.Leclerc détient déjà 46 % de part de marché sur les courses drive/livraison en France, générant 5,5 Mds € de CA et captant des paniers plus élevés. (bfmtv.com)
Expand
message.txt
7 KB
pcz — 16/06/2025 12:17
Image
ayoub_gh — 13/07/2025 19:20
yooo
ayoub_gh — 10:10
Image
Image
Image
pcz — 10:15

# 📄 Rapport FinOps – Optimisation des coûts Kubernetes

## 🧑💻 Projet : Déploiement d'une application conteneurisée sur Kubernetes  
**Stack technique :** Frontend, Backend, Prometheus, Grafana, Kubecost  
**Cluster utilisé :** Minikube – cluster-one  
Expand
rapport-finops.md
4 KB
﻿
pcz
micky9117
 

# 📄 Rapport FinOps – Optimisation des coûts Kubernetes

## 🧑‍💻 Projet : Déploiement d'une application conteneurisée sur Kubernetes  
**Stack technique :** Frontend, Backend, Prometheus, Grafana, Kubecost  
**Cluster utilisé :** Minikube – cluster-one  
**Date :** 15/07/2025

---

## 1. 🎯 Objectif

Ce rapport vise à analyser les coûts générés par le déploiement de notre application sur Kubernetes à l’aide de **Kubecost**, et à identifier des pistes d’optimisation FinOps. Nous avons également utilisé **Grafana** pour le monitoring des métriques système.

---

## 2. ⚙️ Architecture et outils utilisés

- **Frontend** : Application React
- **Backend** : API Node.js
- **Orchestration** : Kubernetes (Minikube local)
- **Monitoring** : Prometheus + Grafana
- **Suivi des coûts** : Kubecost

---

## 3. 📊 Analyse des coûts (Kubecost)

Sur la période observée (2 jours) :

| Ressource        | Détail             | Coût total ($) |
|------------------|--------------------|----------------|
| Node             | 0.1 vCPU / 521 MiB | 0.24           |
| Disque           | 7.5 GiB            | 0.02           |
| Réseau           | -                  | 0.00           |
| **Total**        |                    | **0.25**       |

> 💡 Le nœud consomme la majorité des coûts, avec très peu d’usage disque et réseau.

---

## 4. 📈 Monitoring (Grafana)

Les métriques visibles sur Grafana indiquent :

- Utilisation mémoire disponible (`node_memory_MemAvailable_bytes:sum`) stable autour de 3.8–4.1 Go.
- Aucune alerte critique (Alertmanager stable).
- Activité d’agrégation (`aggregator_discovery_aggregation_count_total`) régulière, reflétant une charge légère du cluster.

Ces données confirment que la plateforme reste stable et peu consommatrice, ce qui est cohérent avec le faible coût mesuré par Kubecost.

---

## 5. ✅ Optimisations mises en place

- 📉 Réduction de la fréquence de scraping Prometheus pour limiter le bruit.
- 🧽 Nettoyage des pods inutilisés.
- ⚙️ Ajout de `resources.requests` et `resources.limits` dans les manifestes Kubernetes.

---

## 6. 💡 Recommandations FinOps

| Recommandation                            | Impact attendu                         |
|------------------------------------------|----------------------------------------|
| Activer le **Horizontal Pod Autoscaler** | Adapter dynamiquement la charge réelle |
| **Supprimer les services inutiles**      | Réduire les pods et consommation       |
| Optimiser la **granularité des métriques** | Moins de données, moins de coût CPU    |
| Planifier l’**arrêt automatique** des environnements hors production | Économies en veille                     |
| Utiliser des **tailles de nœuds plus fines** en cloud public | Plus économique pour production réelle |

---

## 7. ✅ Conclusion

Grâce à Kubecost et Grafana, nous avons pu observer en détail l’impact des ressources utilisées dans notre cluster Kubernetes. Bien que les coûts soient faibles (environ **0.25$ sur 2 jours**), les **bonnes pratiques FinOps mises en place** garantissent une gestion scalable, propre et économe en environnement cloud futur.
rapport-finops.md
4 KB
