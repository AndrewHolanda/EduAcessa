# 1. EduAcessa

EduAcessa is an educational platform (app and website) developed to address the educational gaps in the state of Amazonas. The project uses technology as a bridge to connect students in the final years of elementary school at public schools with college students who serve as volunteer tutors, offering supplemental and personalized academic support.

## 2. The Problem (Justification)

The state of Amazonas has one of the highest levels of educational learning gaps in Brazil. During the requirements gathering process (interviews with local teachers), the following critical challenges were identified:

- **Disorganized Learning Materials:** Students lack structured access to educational content. Materials are shared through messaging groups (scattered PDF files), leading to a lack of interest.

- **Lack of Infrastructure:** Limited access to personal mobile devices and poor internet connectivity at home, particularly in underserved urban areas and rural communities.

- **Problematic Mobile Phone Usage:** Difficulty maintaining students' focus, as they use their devices almost exclusively for entertainment.

---

## 3. The Proposed Solution

To address these barriers, EduAcessa was designed as a technology-based intervention focused on personalized education:

- **Targeted Community:** The pilot project serves three educational institutions with different levels of vulnerability (EE Senador João Bosco, EE Prof. Ruth Prestes, and EE Sagrada Família).

- **Strategic Alignment (UN):** The project is aligned with Sustainable Development Goal (SDG) 4 (Quality Education), SDG 10 (Reduced Inequalities), and SDG 17 (Partnerships for the Goals).

---

## 4. The User Journey (How It Works)

The student's experience was designed around the following logical steps:

1. **Registration and Initial Assessment:** The student completes a diagnostic assessment to identify specific knowledge gaps (e.g., difficulties with fractions).

2. **Personalized Learning Paths:** The algorithm generates a unique learning path with exercises tailored to the student's learning pace.

3. **Volunteer Tutoring:** The system allows students to schedule remote tutoring sessions with university student volunteers.

4. **Progress Dashboard:** Visual reports allow students to track their progress rate in real time.

---

## 5. Technical Architecture (Client-Server)

To securely process educational data and address infrastructure limitations, the system uses:

- **Back-end (Cloud Server):** Stores user profiles, processes business rules, calculates student performance, and returns structured learning paths.

- **Front-end (Web/Mobile Interface):** The application serves solely as the user interaction point. The web version allows students without mobile phones to access the platform through school computer labs.

---

## 6. Connectivity Solution: Offline Mode

Considering the lack of reliable internet access as a major barrier, the platform includes an asynchronous synchronization mechanism:

- **Local Synchronization:** When students connect to their school's Wi-Fi network, the application downloads the week's lessons.

- **Offline Learning:** Students can study and complete exercises at home entirely without an internet connection.

- **Automatic Updates:** Once connectivity is restored, the application automatically synchronizes student progress with the cloud in the background.

---

## 7. Getting Started (Running the Project)

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (LTS version) — npm comes with it
- [Expo Go](https://expo.dev/go) on your phone (optional, to test on a real device)

### Installation

```bash
git clone https://github.com/AndrewHolanda/EduAcessa.git
cd EduAcessa
git checkout development
cd my-app
npm install
```

### Running

```bash
npm start
```

Then:

- Scan the QR code with **Expo Go** to open the app on your phone
- Press `a` to open on an Android emulator
- Press `w` to open in the browser (Expo may ask to install extra web dependencies — accept)

> Your phone and computer must be on the same Wi-Fi network for the QR code to work.

---

## 8. Git Workflow

### Branches

| Branch | Purpose |
|---|---|
| `main` | Stable version. Only receives merges from `development`. |
| `development` | Integration branch. All work is merged here first. |
| `feature/<name>` | New features (e.g. `feature/login-screen`) |
| `fix/<name>` | Bug fixes |
| `docs/<name>` | Documentation changes |

**Never commit directly to `main` or `development`.**

### Step by step

1. Update your local `development` before starting:

```bash
   git checkout development
   git pull
```

2. Create your branch from `development`:

```bash
   git checkout -b feature/your-feature-name
```

3. Work and commit in small steps:

```bash
   git add .
   git commit -m "feat: short description of the change"
```

4. Push your branch:

```bash
   git push -u origin feature/your-feature-name
```

5. On GitHub, open a **Pull Request** from your branch into **`development`** (not `main`).

6. The repository maintainer reviews and merges the Pull Request.

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) pattern:

| Prefix | When to use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | Formatting or styling, no logic change |
| `refactor:` | Code change that is neither a fix nor a feature |
| `chore:` | Configuration, dependencies, maintenance |

Example: `feat: add login screen layout`

### Keeping Your Branch Up to Date

If `development` received new changes while you were working:

```bash
git checkout development
git pull
git checkout feature/your-feature-name
git merge development
```

If a conflict appears, resolve it before pushing. When in doubt, ask the team.