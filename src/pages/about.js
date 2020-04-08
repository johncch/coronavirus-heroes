import React from "react"
import { css } from "@emotion/core"
import SEO from "../components/seo"

export default ({ data }) => (
  <div
    css={css`
      max-width: 720px;
      margin: 0 auto;
      padding: 20px;
    `}
  >
    <SEO />
    <p>
      <a href="/">Back to the list</a>
    </p>
    <h1>About Coronavirus Heroes</h1>
    <p>In memoriam: healthcare workers who have died of COVID-19.</p>
    <p>
      Our front line healthcare workers, the everyday heroes we rely on to care
      for us in our time of need, are themselves at great risk of contracting
      COVID-19 in the line of duty. The risk has been exacerbated by the
      shortage of Personal Protective Equipment (PPE) at the front lines. We
      want to honor the fallen heroes who have lost their lives fighting this
      pandemic, while highlighting the severity of the situation to call for
      action to provide adequate supplies of PPE to the front lines with utmost
      urgency.
    </p>
    <p>Read more in news sources:</p>
    <ul>
      <li>
        <a href="https://www.washingtonpost.com/nation/2020/04/05/youre-basically-right-next-nuclear-reactor/?arc404=true">
          ‘You’re basically right next to the nuclear reactor.’
        </a>
      </li>
      <li>
        <a href="https://www.cbsnews.com/news/home-health-care-workers-are-taking-care-of-americas-most-vulnerable-and-theyre-doing-it-without-ppe/">
          Home health care workers are taking care of America's most vulnerable
          – and they're doing it without PPE
        </a>
      </li>
      <li>
        <a href="https://www.straitstimes.com/world/united-states/chronic-global-shortage-of-personal-protective-gear-who">
          Coronavirus: Chronic global shortage of personal protective gear, says
          World Health Organisation
        </a>
      </li>
      <li>
        <a href="https://www.newsweek.com/coronavirus-deaths-infections-doctors-nurses-healthcare-workers-medical-staff-1496056">
          Over 100 Doctors and Nurses Have Died Combating Coronavirus Across the
          World
        </a>
      </li>
      <li>
        <a href="https://www.newyorker.com/science/medical-dispatch/how-doctors-on-the-front-lines-are-confronting-the-uncertainties-of-covid-19">
          How Doctors on the Front Lines Are Confronting the Uncertainties of
          COVID-19
        </a>
      </li>
      <li>
        <a href="https://www.medscape.com/viewarticle/927811">
          Topol: US Betrays Healthcare Workers in Coronavirus Disaster
        </a>
      </li>
      <li>
        <a href="https://news.sky.com/story/coronavirus-italys-doctors-and-nurses-are-in-trauma-over-deaths-of-more-than-100-colleagues-11968928">
          Coronavirus: Italy's doctors and nurses are in trauma over deaths of
          more than 100 colleagues
        </a>
      </li>
      <li>
        <a href="https://www.mirror.co.uk/news/uk-news/faces-doctors-nurses-who-died-21825137">
          Faces of the doctors and nurses who have died on the coronavirus
          frontline
        </a>
      </li>
      <li>
        <a href="https://www.sbs.com.au/news/the-coronavirus-has-now-killed-24-doctors-in-indonesia">
          The coronavirus has now killed 24 doctors in Indonesia
        </a>
      </li>
    </ul>
  </div>
)
