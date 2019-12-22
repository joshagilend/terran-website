import React from "react"
import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"
import collinsiaHeterophylla from "../images/home/home_collinsia_heterophylla.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homeHeroPanel">
      <Panel>
        <div className="homeHero">
          <Headline
            title="A community of care and practice"
            titleAccent="building tools for a regenerative future"
            titleAccentColor="#2b80f0" />
          <p style={{
            fontFamily: 'DINPro-Light',
            lineHeight: `40px`,
            margin: `30px 0 50px`,
            width: `100%`,
          }}>We are technologists, systems thinkers, entrepreneurs, activists, and artists. We are here to amplify cooperation in service to regeneration in the Bay Area bioregion through technology, collective action and rebuilding the commons.</p>
          <div style={{textAlign: `center`}}>
            <Button label="What is Terran?" link="/what-is-terran/"/>
            <Button label="What are we doing?" link="/what-are-we-doing/"/>
            <Button label="Participate" link="/watershed/"/>
          </div>
        </div>
      </Panel>
    </div>
    <div>
      <Panel justification="center">
        <div className="twoColumnsLeftImage">
          <Image filename="home/home_erysimum_franciscanum2x.jpg" alt="Erysimum franciscanum" showCaption="true" />
        </div>
        <div className="twoColumnsRightText">
          <Headline
            title="Terran Collective is"
            titleAccent="a living system"
            titleAccentColor="#0ad066"
            subtitle="What is Terran?" />
          <p>Terran Collective is <strong>a community</strong> of people who are committed to the work of healing and transformation necessary for all beings in our bioregion to thrive.</p>
          <p>Terran is <strong>a living system</strong>. We embrace our interdependence with the web of life, and believe that there is abundance for all on this beautiful planet. To get there, we must re-design how humans relate to each other and the planet, applying the lessons of emergent strategy to adaptation, decentralization, fractal awareness, resilience, and iterative change to our work.</p>
          <p>As a <strong>community of care</strong>, we support each other on our paths of personal healing and growth. As <strong>a community of practice</strong>, we help each other find our purpose and share our gifts with the world, while collaborating on projects aligned with our mission. As <strong>a commons</strong>, we collectively govern and share resources.</p>
          <p>Relating in these new and remembered ways provides the laboratory through which we research and experiment with creating bioregional collective intelligence, in service to all beings thriving.</p>
          <div style={{textAlign: `center`}}>
            <Button label="More about what we are" link="/what-is-terran/"/>
          </div>
        </div>
      </Panel>
      <div className="threeColumns whatWereDoing">
        <Panel justification="space-between" bleed="true">
          <img className="collinsiaHeterophylla leftImage" src={collinsiaHeterophylla} alt="Collinsia heterophylla" />
          <div className="threeColumnsCenterText">
            <Headline
              title="We are building community, human practices and tools for collaboration and coordination"
              subtitle="What we're doing"
              justification="center" />
            <p>Terran Collective builds community and socio-technical tools to coordinate action. We aim to develop cooperative systems of coordination that can outcompete the market/state while nurturing healthy relationships with each other and the planet.</p>
            <p><strong>Community Weaving:</strong> Rebuilding community is the core of our theory of change. Through community we can develop resilience amidst rapid change, allowing us to navigate the ecological, political, cultural crises we face today.</p>
            <p><strong>Technology:</strong> We design software that serves human thriving, by supporting community building, collaborative sensemaking, cooperative decision-making and group coordination.</p>
            <p><strong>Collaborative Ecosystem Mapping:</strong> We are making transparent maps of our communities and using them to deepen relationships and collectively manage our resources.</p>
            <p><strong>Systems design for cooperative coordination:</strong> Designing, developing and experimenting with decentralized governance structures, gift economics and the creation of modern Guilds.</p>
            <p><strong>Movement building and culture creation:</strong> Telling new stories of interbeing and abundance, to align us around a shared purpose for human civilization and create a world that works for all.</p>
            <div style={{textAlign: `center`}}>
              <Button label="More about what we do" link="/what-are-we-doing/"/>
            </div>
          </div>
          <img className="collinsiaHeterophylla rightImage" src={collinsiaHeterophylla} alt="Collinsia heterophylla" />
        </Panel>
      </div>
      <Panel justification="center">
        <div className="twoColumnsLeftText">
          <Headline
            title="Our bioregion is where we practice and experiment"
            justification="left" />
          <p>We are building systems and tools for the world, starting in our own backyard. We believe that what we are building needs to be grounded in reality: The economic, ecological and social landscapes that we seek to improve are right outside our door.</p>
          <div style={{textAlign: `center`}}>
            <Button label="Why the bioregion?" link="/bioregion/"/>
          </div>
        </div>
        <div className="twoColumnsRightImage">
          <Image filename="home/home_sylvagus_bachmani2x.jpg" alt="Sylvagus bachmani" showCaption="true" />
        </div>
      </Panel>
      <Panel justification="center">
        <div className="twoColumnsLeftImage">
          <Image filename="home/home_nemophila_menziesii.jpg" alt="Nemophila menziesii" showCaption="true" />
        </div>
        <div className="twoColumnsRightText">
          <Headline
            title="Community & Resources"
            justification="left" />
          <p>Our work is to build community and share resources. As we discover new systems, tools, and practices, we want to share them with the world. Likewise, we want to be in relationship with anyone who is engaged in the type of work we are attempting. Please join the conversation, and check out the resources we've compiled.</p>
          <div style={{textAlign: `center`}}>
            <Button label="Our Community" link="/community/"/>
            <Button label="Library of Resources" link="/resources/"/>
          </div>
        </div>
      </Panel>
      <Panel justification="center">
        <div className="twoColumnsLeftText watershed">
          <div style={{ width: `200px`, margin: `40px auto`}}>
            <Image filename="logos/terran_watershed_logo.png" alt="Terran Watershed" />
          </div>
          <p style={{lineHeight: `40px`}}>The Watershed is our commons, channeling the flow of resources throughout our ecosystem, and supporting Terran’s nonprofit activities such as community building and providing free coordination tools.</p>
          <div style={{textAlign: `center`}}>
            <Button label="Participate" link="/watershed/"/>
          </div>
        </div>
        <div className="twoColumnsRightImage watershed">
          <Image filename="home/home_zalophus_californianus.jpg" alt="Zalophus californianus" showCaption="true" />
        </div>
      </Panel>
    </div>
  </Layout>
)

export default IndexPage
