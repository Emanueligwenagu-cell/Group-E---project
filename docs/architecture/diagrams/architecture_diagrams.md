# Architecture Diagrams

## UML Component Diagram

![UML Component Diagram](UML_component_diagram.drawio.png)

The UML Component Diagram shows the major components of the Ibhotwe Food Ordering Platform. Students, vendors, and administrators access the system through the frontend web application. The frontend communicates with the Python backend, which manages authentication, profiles, food catalogue browsing, cart and checkout, orders, payments, and notifications. The MySQL database stores all important system data.

## Data Flow Diagram

![Data Flow Diagram](dfd_diagram.drawio.png)

The Data Flow Diagram shows how information moves through the Ibhotwe platform. Students log in, browse meals, and place orders. Vendors manage menu items and update order statuses. Administrators manage users and monitor orders. Data is stored in user, menu, and order databases, while notifications inform students about order updates.

## Deployment Diagram

![Deployment Diagram](deployment_diagram.drawio.png)

The Deployment Diagram shows how the Ibhotwe platform is deployed. Users access the system through a web browser. The frontend layer sends API requests to the Python backend, which processes application logic and communicates with the MySQL database. GitHub is used for version control, collaboration, and Agile project tracking.
