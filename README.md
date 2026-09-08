# CRM Application — Microservices Architecture

Enterprise-level Customer Relationship Management system built with **Java 8** and **Spring Boot 2.7.x**.

## ️ Architecture

| # | Service | Port | Description |
|---|---|---|---|
| 1 | **Discovery Server** | `8761` | Eureka Service Registry |
| 2 | **API Gateway** | `8080` | Single entry point, routing |
| 3 | **Auth Service** | `8081` | Users, Roles, JWT Security |
| 4 | **Customer Service** | `8082` | Leads, Contacts, Activities, Notes |
| 5 | **Sales Service** | `8083` | Deals, Opportunities, Followups |
| 6 | **Marketing Service** | `8084` | Campaigns, Templates, Segments |
| 7 | **Support Service** | `8085` | Tickets, Threaded Responses |
| 8 | **Analytics Service** | `8086` | Dashboard, Reports |
| 9 | **Workflow Service** | `8087` | Workflow Rules, Event-Driven Automation |
| 10 | **Integration Service** | `8088` | Email, Webhooks, External APIs |
| 11 | **Notification Service** | `8089` | In-app alerts, Email templates |
| 12 | **Frontend App** | `5173` | React + Vite UI |

##  Key Features
- **Microservices Architecture**: Independently deployable services.
- **Service Discovery**: Automatic registration with Eureka.
- **API Gateway**: Centralized routing and cross-cutting concerns.
- **Role-Based Access Control**: Secure endpoints with JWT.
- **Customer Assignment**: Assign Leads/Customers to Sales Reps with instant notifications.
- **In-App Notifications**: Real-time alerts for assignments and updates.
- **Dashboard Analytics**: Visual insights into sales performance.

## ️ Tech Stack

- **Backend**: Java 8, Spring Boot 2.7.x
- **Frontend**: React, Vite, TailwindCSS
- **Database**: MySQL (database-per-service)
- **Service Discovery**: Netflix Eureka
- **API Gateway**: Spring Cloud Gateway
- **Inter-Service Communication**: OpenFeign
- **Security**: Spring Security + JWT
- **Build**: Maven Multi-Module
- **Code Quality**: SpotBugs (FindBugs), SonarQube


##  API Endpoints (via Gateway at `localhost:8080`)

| Service | Endpoints |
|---|---|
| Auth | `POST /api/auth/register`, `POST /api/auth/login` |
| Customers | `/api/customers/**`, `/api/leads/**`, `/api/activities/**`, `/api/notes/**` |
| Sales | `/api/deals/**`, `/api/opportunities/**`, `/api/followups/**` |
| Marketing | `/api/campaigns/**`, `/api/campaigns/templates` |
| Support | `/api/tickets/**`, `/api/tickets/{id}/responses` |
| Analytics | `/api/analytics/dashboard`, `/api/analytics/reports/**` |
| Notifications | `/api/notifications/**`, `/api/notifications/mark-read/**` |

##  Standard Package Structure
```
com.crm.{serviceName}
├── config/         # Security, App config
├── controller/     # REST Endpoints
├── service/        # Business Logic
├── repository/     # Data Access (JPA)
├── entity/         # JPA Entities
├── dto/            # Request/Response objects
├── client/         # Feign Clients
└── exception/      # Exception Handling
```