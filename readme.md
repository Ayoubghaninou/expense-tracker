# 📄 Expense Tracker - Guide d'Installation et Utilisation (FR)

## 📌 Dépôt Git

[https://github.com/Ayoubghaninou/expense-tracker](https://github.com/Ayoubghaninou/expense-tracker)

## 🗂️ Pré-requis

* Ubuntu 22+ ou 24+ avec Docker, Docker Compose, Minikube, Helm, kubectl
* Connexion Internet
* Accès sudo

## 📥 Clonage du projet

```bash
git clone https://github.com/Ayoubghaninou/expense-tracker.git
cd expense-tracker
```

## ⚙️ Installation (1ère fois)

```bash
sudo apt update && sudo apt install docker.io docker-compose kubectl minikube helm -y
```

```bash
minikube start --cpus=2 --memory=6000
eval "$(minikube docker-env)"
```

```bash
docker build -t expense-tracker-backend:latest -f backend/Dockerfile backend
docker build -t expense-tracker-frontend:latest -f frontend/Dockerfile frontend
```

```bash
kubectl apply -f k8s/
```

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add kubecost https://kubecost.github.io/cost-analyzer/
helm repo update
helm upgrade --install kube-prom-stack prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace
helm upgrade --install kubecost kubecost/cost-analyzer --namespace kubecost --create-namespace
```

## ▶️ Lancer & accéder

```bash
minikube service frontend
minikube service backend
kubectl -n kubecost port-forward svc/kubecost-cost-analyzer 9090:9090
kubectl -n monitoring port-forward svc/kube-prom-stack-grafana 3000:80
```

## ✅ Suivi FinOps

* Grafana : [http://localhost:3000](http://localhost:3000)
* Kubecost : [http://localhost:9090](http://localhost:9090)

📈 Surveillez l’usage, optimisez les coûts !
