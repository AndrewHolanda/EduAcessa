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
