import { ChevronDown, Mail, Phone } from "lucide-react";
import "./App.scss";

function App() {
  return (
    <>
      <header>
        <img src="antonio.png" />
        <div className="header-info">
          <div>
            <h1>Antonio Abdo</h1>
            <p>Lebanon, Jbeil, Breij</p>
          </div>
          <div>
            <h2>Contact me</h2>

            <a className="link" href="tel:+96176692293">
              <Phone />
              76 692 293
            </a>
            <a className="link" href="mailto:antonio.abdopt@gmail.com">
              <Mail />
              antonio.abdopt@gmail.com
            </a>
          </div>
          <div className="header-buttons">
            <a href="#cl">
              <button className="button">Cover Letter</button>
            </a>
            <a href="#cv">
              <button className="button">Curriculum Vitae</button>
            </a>
          </div>
          <div className="scroll-further">
            Learn More
            <ChevronDown />
          </div>
        </div>
      </header>

      <section id="cl">
        <h2>Cover Letter</h2>
        <p>Dear Dr.,</p>
        <p>
          I am writing to express my strong interest in the Physical Therapist
          position at your clinic, as recently advertised. With a solid academic
          foundation, extensive clinical experience, and a relentless commitment
          to enhancing patients' well-being, I am eager to join your esteemed
          team and make a meaningful impact on the health and vitality of your
          clients.
        </p>
        <p>
          My professional journey has equipped me with a diverse array of skills
          in physical therapy. From acute injury management to chronic condition
          rehabilitation, I have successfully handled a wide range of cases
          across different age groups and medical complexities. My approach
          involves conducting comprehensive assessments, developing tailored
          treatment regimens, and utilizing evidence-based methodologies to
          drive optimal recovery and functional autonomy.
        </p>
        <p>
          A hallmark of my practice is the establishment of trust and rapport
          with patients, creating an environment conducive to active engagement
          in their therapeutic journey. I am deeply committed to delivering
          empathetic care while empowering individuals to take charge of their
          health and mobility. Furthermore, my strong communication skills
          enable seamless collaboration with interdisciplinary teams, ensuring
          cohesive care delivery and maximizing patient outcomes.
        </p>
        <p>
          I am eager to bring my wealth of experience and passion for innovation
          to your esteemed organization, poised to play a pivotal role in
          advancing its mission of holistic wellness. Moreover, I am keen on
          embracing opportunities for continuous professional growth and staying
          abreast of emerging trends in the dynamic landscape of physical
          therapy.
        </p>
        <p>
          Enclosed herewith is my resume, offering a more comprehensive overview
          of my qualifications and achievements. I am eager to further discuss
          how my background aligns with the unique needs and aspirations of your
          team.
        </p>
        <p>
          Thank you for considering my application. I am eagerly anticipating
          the opportunity to contribute to the exceptional care you offer.
        </p>
        <p>Warm regards,</p>
        <p>Antonio Abdo</p>
      </section>

      <section id="cv">
        <h2>Curriculum Vitae</h2>
        <h3>Education</h3>
        <div className="content-block">
          <p>
            <strong>Université Sainte Famille Batroun-Lebanon</strong>
          </p>
          <p className="subtext">
            Bachelor of Science in Physical Therapy, Expected 2024
          </p>
          <p className="subtext">GPA: 4.0</p>
        </div>
        <div className="content-block">
          <p>
            <strong>Collège des Soeurs du Rosaire Blat, Jbeil</strong>
          </p>
          <p className="subtext">
            Lebanese Baccalaureate | Sociology & Economy
          </p>
        </div>
        <h3>Internships</h3>
        <div className="content-block">
          <p>
            <strong>ST. Joseph Hospital DAOURA-Lebanon</strong>
          </p>
          <p className="subtext">
            Cardiorespiratory department under the supervision of Dr. Gregoire
            Kassabian for a duration of 3 months
          </p>
          <ul>
            <li>
              Interned as a Cardiorespiratory Physical Therapist, gaining
              hands-on experience in assessing, treating, and rehabilitating 30+
              patients with cardiovascular and respiratory conditions.
            </li>
            <li>
              Assisted in developing individualized treatment plans,
              administering interventions including exercise programs and
              breathing retraining, and monitoring patient progress.
            </li>
            <li>
              Collaborated with interdisciplinary healthcare teams to ensure
              comprehensive care.
            </li>
            <li>
              Developed strong skills in assessment techniques, treatment
              planning, and patient education while contributing to positive
              patient outcomes.
            </li>
          </ul>
        </div>
        <div className="content-block">
          <p>
            <strong>Revive Clinic JBEIL-LEBANON</strong>
          </p>
          <p className="subtext">
            Under the supervision of Gearges Jawad and Rami Moujaes for a
            duration of 2 months
          </p>
          <ul>
            <li>
              Interned as a Sports Physical Therapist, gaining experience in
              evaluating and treating athletes across diverse sports
              disciplines.
            </li>
            <li>
              Developed and implemented customized rehabilitation programs
              focusing on injury prevention, performance enhancement, and safe
              return to sport.
            </li>
            <li>
              Collaborated closely with coaches and athletic trainers, employing
              manual therapy techniques, therapeutic exercises, and modalities
              to optimize athlete recovery and performance.
            </li>
            <li>
              Honed skills in sports-specific assessment, treatment, and
              interdisciplinary collaboration, demonstrating a commitment to
              promoting athlete health and wellness.
            </li>
          </ul>
        </div>

        <h3>Work Experience</h3>
        <div className="content-block">
          <p>
            <strong>
              Certified Basketball Coach at Brainers Academy Jbeil-Lebanon
            </strong>
          </p>
          <ul>
            <li>
              Integrated clinical expertise with coaching principles to optimize
              athlete performance and mitigate injury risks.
            </li>
            <li>
              With a focus on basketball-specific conditioning and injury
              prevention protocols, designed and implemented individualized
              training regimens tailored to enhance players' strength, agility,
              and endurance.
            </li>
          </ul>
        </div>
        <h3>Skills, Activities & Interests</h3>
        <div className="content-block">
          <p>
            <strong>Languages:</strong> Fluent in Arabic, French, English
          </p>
          <p>
            <strong>Certifications & Training:</strong> Certified Basketball
            Coach
          </p>
          <p>
            <strong>Activities:</strong> Basketball player in the Lebanese
            divisions and university team, Swimming
          </p>
          <p>
            <strong>Interests:</strong> Enthusiastic about sports and fitness,
            with a particular affinity for working with athletes due to personal
            involvement in physical training and athletics.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
