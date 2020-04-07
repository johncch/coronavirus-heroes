import React from "react"
import { css } from "@emotion/core"

export default ({ data }) => (
  <div
    css={css`
      max-width: 720px;
      margin: 0 auto;
      padding: 20px;
    `}
  >
    <p>
      <a href="/">Back to the list</a>
    </p>
    <h1>About Coronavirus Heroes</h1>
    <p>In memoriam: healthcare workers who have died of COVID-19.</p>
    <p>
      Our front line healthcare workers, the everyday heroes we rely on to care
      for us in our time of need, are themselves at great risk of contracting
      COVID-19 in the line of duty. The risk has been exacerbated by the shortage 
      of Personal Protective Equipment (PPE) at the front lines. We want to honor 
      the fallen heroes who have lost their lives fighting this pandemic, while
      highlighting the severity of the situation to call for action to provide
      adequate supplies of PPE to the front lines with utmost urgency.
    </p>
    <p>Read more in news sources:</p>
    <ul>
      <li>
        <a href="https://www.washingtonpost.com/nation/2020/04/05/youre-basically-right-next-nuclear-reactor/?arc404=true">
          https://www.washingtonpost.com/nation/2020/04/05/youre-basically-right-next-nuclear-reactor/?arc404=true
        </a>
      </li>
      <li>
        <a href="https://www.cbsnews.com/news/home-health-care-workers-are-taking-care-of-americas-most-vulnerable-and-theyre-doing-it-without-ppe/">
          https://www.cbsnews.com/news/home-health-care-workers-are-taking-care-of-americas-most-vulnerable-and-theyre-doing-it-without-ppe/
        </a>
      </li>
      <li>
        <a href="https://www.straitstimes.com/world/united-states/chronic-global-shortage-of-personal-protective-gear-who">
          https://www.straitstimes.com/world/united-states/chronic-global-shortage-of-personal-protective-gear-who
        </a>
      </li>
      <li>
        <a href="https://www.newsweek.com/coronavirus-deaths-infections-doctors-nurses-healthcare-workers-medical-staff-1496056">
          https://www.newsweek.com/coronavirus-deaths-infections-doctors-nurses-healthcare-workers-medical-staff-1496056
        </a>
      </li>
      <li>
        <a href="https://www.newyorker.com/science/medical-dispatch/how-doctors-on-the-front-lines-are-confronting-the-uncertainties-of-covid-19">
          https://www.newyorker.com/science/medical-dispatch/how-doctors-on-the-front-lines-are-confronting-the-uncertainties-of-covid-19
        </a>
      </li>
    </ul>
  </div>
)
