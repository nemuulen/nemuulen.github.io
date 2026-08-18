/**
 * INFOSCI103 Final Presentation - Project Detail Page
 * "Unmasking Depression: Using Online Social Networks to Detect Depressive Symptoms"
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface Infosci103FinalProjectProps {
  onBack: () => void;
}

export function Infosci103FinalProject({ onBack }: Infosci103FinalProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Unmasking Depression",
    subtitle: "INFOSCI103 Final Presentation | Social Computing",
    coverImage: "/images/projects/unmaskingdepression.png",
    tags: [
      "Social Computing",
      "Research Design",
      "Literature Review",
      "Mental Health",
      "Data Ethics",
    ],
    timeline: "INFOSCI103",

    overview:
      "A group research project in social computing examining whether online social network activity can indicate depressive symptoms, and proposing an original study design applying that question to Mongolian university students through emoji use. Completed with Khatanbuuvei Battulga, Nami Barsbold and Undran Enkhbaatar for Prof. Markus Neumann.",

    sections: [
      {
        title: "Literature Review",
        content: (
          <div>
            <p className="mb-3">
              Our anchor reading was Dr. Meeyoung Cha's "Activities on Facebook Reveal the Depressive
              State of Users" (2013), which analysed the online behaviour of 55 participants both
              quantitatively and qualitatively, using an application called EmotionDiary alongside
              established clinical scales (CES-D and BDI) to check reliability. It found that a
              depressed state showed up as fewer friends, fewer location tags, and more time spent
              reading depression-related tips.
            </p>
            <p className="mb-2"><strong>Across the wider literature, four findings recurred:</strong></p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Negative linguistic patterns, reduced interaction, and altered posting behaviour are
                strong predictors on text-led platforms like Facebook and Twitter
              </li>
              <li>
                On Instagram the markers are visual instead - darker photo tones and lower vibrancy
              </li>
              <li>
                Machine learning models identify depression and suicide risk from social data with
                high reported accuracy
              </li>
              <li>
                Online interventions, from expressive writing to AI chatbots, show early promise in
                easing symptoms
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Research Gaps We Identified",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Small participant numbers and short experimental durations</li>
              <li>Findings usually constrained to one specific platform</li>
              <li>Little attention to differences across age groups or gender</li>
              <li>
                Thin treatment of ethics, data privacy, and the potential misuse of predictive
                technologies - the gap we found most serious
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Why Mongolia",
        content: (
          <div>
            <p className="mb-3">
              Almost none of this research addresses Mongolia, despite conditions that make the
              question urgent:
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>44.6% of the population is under 24 (Davaasambuu, 2018)</li>
              <li>
                Mongolia has among the highest rates of adolescent suicide in East Asia and the
                Pacific (UNICEF, 2022)
              </li>
              <li>
                Research on the mental health of Mongolian citizens is scarce, and scarcer still for
                young people
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Our Proposed Study",
        content: (
          <div>
            <p className="mb-3">
              Where prior work reads posting behaviour or photo tone, we proposed reading{" "}
              <strong>emoji use</strong>. Framed through symbolic interactionism - emojis as symbolic
              communication that conveys emotional state - our hypothesis was that the frequency and
              type of emoji use by Mongolian university students could predict depressive symptoms.
            </p>
            <p className="mb-3">
              A secondary question interested us more: whether Gen-Z users employ certain emojis in
              ways opposite to their original depiction, which would undercut any naive
              sentiment-mapping approach.
            </p>
            <p className="mb-2"><strong>Seven-stage methodology:</strong></p>
            <ul style={{ listStyleType: "disc" }}>
              <li>Recruit 100 frequent OSN users from Mongolian universities, with compensation</li>
              <li>Questionnaire I - most-used platform and five most-used emojis</li>
              <li>Narrow 500 emojis down to the 20 most common using statistical tools</li>
              <li>
                Questionnaire II - rate those 20 on a 1-5 depressed-to-cheerful scale, with space to
                explain unusual usage
              </li>
              <li>Pre-analysis cross-referencing both questionnaires to form initial predictions</li>
              <li>Detect depression through validated CES-D measures</li>
              <li>Interview a professional psychiatrist and compare against clinical diagnosis</li>
            </ul>
            <p className="mt-3">
              Grounding the design against professional diagnosis rather than self-report alone was
              deliberate - it is the check most of the papers we reviewed lacked.
            </p>
          </div>
        ),
      },
      {
        title: "Ethics & Limitations",
        content: (
          <div>
            <p className="mb-3">
              Because the study reads personal social media activity to infer a clinical condition,
              the ethics were not an afterthought. We designed around informed consent, avoiding
              privacy violations, and involving a qualified psychiatrist rather than treating a
              statistical signal as a diagnosis.
            </p>
            <p className="mb-2"><strong>Acknowledged limitations:</strong></p>
            <ul style={{ listStyleType: "disc" }}>
              <li>Small sample size, constrained by a 3,250 RMB budget</li>
              <li>Reliance on self-reported data</li>
              <li>Narrow age band, and findings unlikely to transfer to other cultures</li>
            </ul>
            <p className="mt-3">
              The corresponding strength is specificity: a culturally grounded reading of emoji use
              among a demographic that uses them constantly, and a shared cultural background that
              makes interpretation more uniform.
            </p>
          </div>
        ),
      },
      {
        title: "Discussion Questions",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Is using social networks to detect depression better than traditional methods?</li>
              <li>What are the privacy and ethical concerns of doing so?</li>
              <li>Would you consent to having your own social media activity analysed this way?</li>
              <li>How much would you trust the results, and why?</li>
              <li>Can particular emojis genuinely indicate a person's mental state?</li>
            </ul>
          </div>
        ),
      },
    ],

    links: [],
    documents: [
      {
        title: "Final Presentation Slides",
        description: "Literature review, study design, ethics and references",
        fileName: "infosci103-final-depression-osn.pdf",
      },
    ],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
