# 📄 Expense Tracker - Guide Complet (FR)

## 📌 Dépôt Git

👉 [Lien vers le Repo](https://github.com/Ayoubghaninou/expense-tracker)

---

## Membres du groupe

- Ghaninou Ayoub
- Chelloufi Anas
- Boumziza Anas

## 🚀 Fonctionnalités

- ✅ Ajout / modification / suppression de dépenses
- 📅 Filtrage par mois & année
- 🔑 Authentification utilisateur
- 🧩 API REST Express + React Frontend
- 📊 Monitoring FinOps avec **Prometheus**, **Grafana**, **Kubecost**

---

## 📋 Pré-requis

- **Ubuntu** 22+ ou 24+
- **Docker**, **docker-compose**, **kubectl**, **minikube**, **helm**
- Droits `sudo`
- Connexion Internet stable

---

## 🗂️ Clonage du projet

```bash
git clone https://github.com/Ayoubghaninou/expense-tracker.git
cd expense-tracker
````

---

## ⚙️ Installation **(mode Node.js classique)**

### 🔗 Backend

```bash
cd backend
npm install

# Créez le fichier .env :
echo "MONGO_URI=YOUR_MONGO_URI" >> .env
echo "JWT_SECRET=YOUR_SECRET" >> .env

# Lancez :
npm start
```

### 🌐 Frontend

```bash
cd frontend
npm install
npm start
```

Accès ➜ [http://localhost:3000](http://localhost:3000)

---

## 🐳 Dockerisation + Kubernetes

### ✅ Préparer l’environnement

```bash
sudo apt update && sudo apt install docker.io docker-compose kubectl minikube helm -y
minikube start --cpus=2 --memory=6000
eval "$(minikube docker-env)"
```

---

### 🔨 Builder les images

```bash
docker build -t expense-tracker-backend:latest -f backend/Dockerfile backend
docker build -t expense-tracker-frontend:latest -f frontend/Dockerfile frontend
```

---

### 🚢 Déployer sur K8s

```bash
kubectl apply -f k8s/
```

---

## 📈 Monitoring FinOps

### 📦 Installer Prometheus & Kubecost

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add kubecost https://kubecost.github.io/cost-analyzer/
helm repo update

helm upgrade --install kube-prom-stack prometheus-community/kube-prometheus-stack \
  --namespace monitoring --create-namespace

helm upgrade --install kubecost kubecost/cost-analyzer \
  --namespace kubecost --create-namespace
```

---

### 🔐 Récupérer le mot de passe admin **Grafana**

```bash
kubectl get secret --namespace monitoring kube-prom-stack-grafana \
  -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

---

## ▶️ Lancer & accéder

```bash
# Frontend
minikube service frontend

# Backend
minikube service backend

# Kubecost
kubectl -n kubecost port-forward svc/kubecost-cost-analyzer 9090:9090

# Grafana
kubectl -n monitoring port-forward svc/kube-prom-stack-grafana 3000:80
```

---

## 🔗 URLs & Accès

| Service  | URL                                            | Login              |
| -------- | ---------------------------------------------- | ------------------ |
| Frontend | [http://localhost:3000](http://localhost:3000) | -                  |
| Backend  | via `minikube service backend`                 | -                  |
| Grafana  | [http://localhost:3000](http://localhost:3000) | admin / <password> |
| Kubecost | [http://localhost:9090](http://localhost:9090) | -                  |

---

## ✅ Contribution

1. Fork du repo
2. Nouvelle branche : `git checkout -b feature-...`
3. Dév, commit, push
4. Pull Request 🚀

---

## 📊 FinOps

* **Kubecost** : analyse coûts & optimisations.
* **Prometheus** : collecte métriques.
* **Grafana** : dashboards & visualisations.

