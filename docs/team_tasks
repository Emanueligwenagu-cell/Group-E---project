# 📋 Ibhotwe (WSU) Project — Team Task Handout & Execution Plan

**Module**: CSS37W2 — 3rd Year Capstone Project  
**Institution**: Walter Sisulu University (WSU)  
**System Name**: Ibhotwe Campus Food Ordering Platform  
**Team Size**: 7 Members (1 Project Manager + 6 Functional Leads)  

---

## 🎯 Meeting Objectives
1. Clearly assign individual responsibilities to all 7 members.
2. Establish API contracts between Frontend and Backend sub-teams to prevent integration blockers.
3. Define Git branch standards to ensure clean, conflict-free collaboration.
4. Agree on internal review milestones leading up to final submission.

---

## 👥 Role Assignments & Detailed Task Checklists

---

### 👑 Member 1: Project Manager & Integration Lead
**Assigned To**: _______________________  
**Branch**: `main` / `release/v1.0`  

#### Key Responsibilities:
- [ ] **Architecture & Repo Structure**: Ensure folder organization, virtual environments (`venv`), and environment variables (`.env`) are maintained.
- [ ] **Pull Request (PR) Reviews & Merging**: Review code from all 6 feature branches, test for regressions, and merge into `main`.
- [ ] **End-to-End Integration**: Verify seamless communication between the completed Frontend and the FastAPI Backend.
- [ ] **Run Script & Deployment Setup**: Create one-click startup scripts (`run_app.bat` / `start.ps1`) that initialize the database and run both frontend & backend.
- [ ] **Final Submission Package**: Compile source code, documentation, test reports, and presentation materials for CSS37W2 evaluation.

---

### 🎨 Member 2: Frontend Lead — Main Student UI & Catalog
**Assigned To**: _______________________  
**Branch**: `feat/frontend-student-ui`  
**Primary Files**: `frontend/js/pages/home.js`, `frontend/js/pages/browse.js`, `frontend/js/pages/cart.js`, `frontend/css/styles.css`

#### Checklist:
- [ ] **Home Page Enhancements (`home.js`)**:
  - [ ] Hero section with quick search and active promo banner.
  - [ ] Featured vendors cards showing open/closed status badges, ratings, and delivery times.
  - [ ] Popular campus dishes carousel / quick add-to-cart buttons.
- [ ] **Catalog & Filtering System (`browse.js`)**:
  - [ ] Search input with live debounced filtering across food names and descriptions.
  - [ ] Category tabs (*Traditional, Fast Food, Snacks, Drinks, Healthy*).
  - [ ] Filter controls: Price range slider, Vegetarian tag filter, Minimum rating sorting.
- [ ] **Cart & Checkout Experience (`cart.js`)**:
  - [ ] Increment, decrement, and delete item controls with instant total calculation.
  - [ ] Campus delivery pickup location selector (*Main Campus Cafeteria, Tech Hub, Library Lawn, Res Blocks*).
  - [ ] Promo code entry box with instant discount feedback (`MONDAY20`, `EXAMTIME`).
  - [ ] Order confirmation modal / receipt screen.

---

### 🔐 Member 3: Frontend Specialist — Authentication, User Profiles & Gamification
**Assigned To**: _______________________  
**Branch**: `feat/frontend-auth-profile`  
**Primary Files**: `frontend/js/pages/login.js`, `frontend/js/pages/game.js`, `frontend/js/state.js`, `frontend/js/nav.js`

#### Checklist:
- [ ] **Authentication Experience (`login.js`)**:
  - [ ] Tabbed Sign In / Register interface with sleek modern cards.
  - [ ] WSU student/staff email validation (`@wsu.ac.za` or `@student.wsu.ac.za`).
  - [ ] Password visibility toggle (Show/Hide 👁️) and client-side password strength validation.
  - [ ] Campus selection dropdown (*Main Campus, Health Sciences, Science & Engineering, etc.*).
  - [ ] Clear user-friendly error banners (e.g. "Invalid email/password combination").
- [ ] **User Profile & Navigation Header (`nav.js`, `state.js`)**:
  - [ ] Dynamic user avatar with initials and loyalty point balance display in navbar.
  - [ ] Profile dropdown menu with *Sign Out*, *My Orders*, and *Saved Campus*.
  - [ ] Session persistence via `localStorage` JWT token storage.
- [ ] **Gamification & Rewards (`game.js`)**:
  - [ ] Polish Tic-Tac-Toe minigame UI with sound/visual confetti effects upon winning.
  - [ ] Connect game victory to API reward endpoint (`/api/game/reward`) to add +15 loyalty points to user account.

---

### 👨‍🍳 Member 4: Frontend Specialist — Vendor Management & Order Tracking
**Assigned To**: _______________________  
**Branch**: `feat/frontend-vendor-portal`  
**Primary Files**: `frontend/js/pages/vendor.js`, `frontend/js/pages/orders.js`, `frontend/index.html`

#### Checklist:
- [ ] **Vendor Portal Dashboard (`vendor.js`)**:
  - [ ] Real-time incoming orders queue grouped by status (*Pending, Preparing, Ready, Completed*).
  - [ ] Quick-action status update buttons (*Accept Order*, *Mark as Preparing*, *Mark Ready for Collection*).
  - [ ] Vendor Open/Closed toggle switch with immediate UI badge updates.
  - [ ] Daily analytics cards: Total Sales (ZAR), Order Volume, and Top-Selling Dish.
- [ ] **Menu Management Modals (`index.html`, `vendor.js`)**:
  - [ ] "Add New Menu Item" modal with input fields: Dish Name, Price (R), Description, Category, Prep Time.
  - [ ] "Delete Item" and "Toggle Availability" (In Stock / Sold Out) actions per dish.
- [ ] **Student Order Tracking (`orders.js`)**:
  - [ ] Active order progress bar (Visual 4-step stepper).
  - [ ] Order history list with date, total price, vendor name, and item breakdown.
  - [ ] Star-rating & review modal for completed orders.

---

### 🛡️ Member 5: Backend Lead — Authentication, Security & Core API
**Assigned To**: _______________________  
**Branch**: `feat/backend-auth-security`  
**Primary Files**: `backend/app/main.py`, `backend/app/core/`, `backend/app/routes/auth.py`, `backend/app/schemas/auth.py`

#### Checklist:
- [ ] **Application Core & Middleware (`backend/app/main.py`, `core/config.py`)**:
  - [ ] FastAPI instance configuration with CORS middleware allowing frontend origins.
  - [ ] Global exception handlers returning clean JSON error responses (`{ "detail": "message" }`).
- [ ] **Security & Cryptography (`core/security.py`)**:
  - [ ] Secure password hashing using Bcrypt (`passlib[bcrypt]` / `bcrypt`).
  - [ ] JWT token generation with expiration (`python-jose` / `PyJWT`).
  - [ ] Authentication dependency `get_current_user` to validate incoming `Bearer <token>`.
  - [ ] Role-based access control helper `require_role(["student", "vendor", "admin"])`.
- [ ] **Auth Endpoints (`routes/auth.py`)**:
  - [ ] `POST /api/auth/register` (Registers user, hashes password, grants 50 initial loyalty points).
  - [ ] `POST /api/auth/login` (Validates credentials, returns JWT token + user metadata).
  - [ ] `GET /api/auth/me` (Returns current user's profile and loyalty points balance).

---

### 📦 Member 6: Backend & Database Specialist — Orders, Vendor API & Database
**Assigned To**: _______________________  
**Branch**: `feat/backend-orders-db`  
**Primary Files**: `backend/app/models/`, `backend/app/routes/orders.py`, `backend/app/routes/vendor_admin.py`, `backend/seed.py`

#### Checklist:
- [ ] **Database Models & ORM (`backend/app/models/`)**:
  - [ ] `User`: id, student_number, name, email, password_hash, role, campus, loyalty_points.
  - [ ] `Vendor`: id, name, campus_location, image_url, is_open, rating, total_reviews.
  - [ ] `MenuItem`: id, vendor_id, category_id, name, description, price, prep_time, is_available.
  - [ ] `Order` & `OrderItem`: id, order_code, user_id, vendor_id, status, total_amount, delivery_location, created_at.
  - [ ] `PromoCode`: id, code, discount_percent, is_active.
- [ ] **Orders & Promo API (`routes/orders.py`, `routes/promos.py`)**:
  - [ ] `POST /api/orders` (Validates cart, deducts promo discount, creates order code `WSU-XXXX`, awards +10 loyalty points).
  - [ ] `GET /api/orders/my-orders` (Returns current user's past and ongoing orders).
  - [ ] `POST /api/promos/validate` (Validates promo codes like `MONDAY20`, `EXAMTIME`).
- [ ] **Vendor Management API (`routes/vendor_admin.py`)**:
  - [ ] `GET /api/vendor/orders` (Lists live orders for vendor).
  - [ ] `PATCH /api/vendor/orders/{id}/status` (Updates order status).
  - [ ] `POST /api/vendor/menu-items` (Creates new dish).
  - [ ] `DELETE /api/vendor/menu-items/{id}` (Deletes dish).
- [ ] **Database Seeder (`seed.py` / `schema.sql`)**:
  - [ ] Populate database with WSU vendors (*Mama's Kitchen, Campus Bites, Samoosa Palace, Slice & Dice*), categories, meals, and test accounts.

---

### 📊 Member 7: QA, UML Diagrams, Testing & Academic Report Lead
**Assigned To**: _______________________  
**Branch**: `docs/uml-testing-report`  
**Primary Deliverables**: Academic Project Report (PDF/Word), UML Diagrams, Postman Test Suite, Presentation Slides

#### Checklist:
- [ ] **API Testing & Quality Assurance**:
  - [ ] Create a comprehensive Postman / Thunder Client collection covering all endpoints.
  - [ ] Test edge cases: invalid email format, incorrect passwords, expired promos, out-of-stock items.
  - [ ] Cross-browser UI testing (Chrome, Edge, Firefox, Mobile viewports).
- [ ] **Academic UML Diagrams (CSS37W2 Standards)**:
  - [ ] **Entity Relationship Diagram (ERD)** with table attributes, primary keys, and foreign key cardinalities.
  - [ ] **Use Case Diagram** demarcating Student, Vendor, and Admin actors.
  - [ ] **Sequence Diagram** showing the end-to-end Order Placement & Vendor Fulfillment lifecycle.
  - [ ] **System Architecture Diagram** (Frontend SPA ➔ FastAPI Gateway ➔ SQLAlchemy ORM ➔ Database).
- [ ] **Academic Report & Presentation**:
  - [ ] Write Project Overview, Requirements Specification, and System Implementation chapters.
  - [ ] Compile User Manual with step-by-step screenshots.
  - [ ] Prepare 10-12 presentation slides for the team's final project defense.

---

## 🔌 API Contract Specifications (Frontend ⟷ Backend)

To ensure frontend and backend work without friction, both teams must adhere to these standard payloads:

### 1. User Registration (`POST /api/auth/register`)
**Request Body**:
```json
{
  "name": "Sipho Ndlovu",
  "email": "220145892@student.wsu.ac.za",
  "password": "SecurePassword123!",
  "student_number": "220145892",
  "campus": "Main Campus"
}
```
**Response (200 OK)**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "name": "Sipho Ndlovu",
    "email": "220145892@student.wsu.ac.za",
    "student_number": "220145892",
    "campus": "Main Campus",
    "role": "student",
    "loyalty_points": 50
  }
}
```

### 2. User Login (`POST /api/auth/login`)
**Request Body**:
```json
{
  "email": "220145892@student.wsu.ac.za",
  "password": "SecurePassword123!"
}
```
**Response (200 OK)**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "user": {
    "id": 1,
    "name": "Sipho Ndlovu",
    "email": "220145892@student.wsu.ac.za",
    "campus": "Main Campus",
    "role": "student",
    "loyalty_points": 50
  }
}
```

### 3. Create Order (`POST /api/orders`)
**Headers**: `Authorization: Bearer <token>`  
**Request Body**:
```json
{
  "vendor_id": 1,
  "items": [
    { "menu_item_id": 3, "quantity": 2, "unit_price": 45.00 },
    { "menu_item_id": 7, "quantity": 1, "unit_price": 18.00 }
  ],
  "delivery_location": "Main Campus - Library Quad",
  "payment_method": "cash_on_collection",
  "promo_code": "MONDAY20"
}
```
**Response (201 Created)**:
```json
{
  "order_code": "WSU-9842",
  "status": "pending",
  "subtotal": 108.00,
  "discount": 21.60,
  "total": 86.40,
  "earned_loyalty_points": 10,
  "created_at": "2026-08-31T12:30:00"
}
```

### 4. Update Order Status (`PATCH /api/vendor/orders/{order_code}/status`)
**Headers**: `Authorization: Bearer <token>`  
**Request Body**:
```json
{
  "status": "preparing"
}
```
*(Valid statuses: `pending`, `preparing`, `ready`, `completed`, `cancelled`)*

---

## 🌿 Git Collaboration Rules

1. **Never commit directly to `main`**.
2. **Branch Naming Standard**:
   - `feat/frontend-student-ui`
   - `feat/frontend-auth-profile`
   - `feat/frontend-vendor-portal`
   - `feat/backend-auth-security`
   - `feat/backend-orders-db`
   - `docs/uml-testing-report`
3. **Pull Request Workflow**:
   ```bash
   git add .
   git commit -m "feat(auth): implement student register and login validation"
   git push origin feat/frontend-auth-profile
   ```
4. Once pushed, create a Pull Request on GitHub and notify the Project Manager for review and merging.

---

## 🚀 Execution Timeline & Milestones

| Stage | Duration | Target Goal |
| :--- | :--- | :--- |
| **Sprint 1: Task Kickoff** | Hours 1–2 | Repo cloned, branches created, environment setup (`pip install -r requirements.txt`). |
| **Sprint 2: Core Development** | Hours 3–6 | Frontend UI completed; Backend routes & database models implemented. |
| **Sprint 3: API Integration** | Hours 7–8 | Frontend hooked to backend endpoints; auth & order flows tested end-to-end. |
| **Sprint 4: QA & Documentation**| Hours 9–10 | Bug fixing, UML diagrams generated, academic report finalized, demo dry run. |
