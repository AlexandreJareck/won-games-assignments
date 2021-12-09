import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { BannerProps } from 'components/shared/Banner'
import BannerSlider from 'components/shared/BannerSlider'
import { Container } from 'components/shared/Container'
import { GameCardProps } from 'components/shared/GameCard'
import { HighlightProps } from 'components/shared/Highlight'
import Showcase from 'components/shared/Showcase'
import {
  SectionBanner,
  SectionFooter,
  SectionNews,
  SectionUpcoming
} from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <SectionBanner>
        <BannerSlider items={banners} />
      </SectionBanner>
    </Container>

    <SectionNews>
      <Showcase title="News" games={newGames} />
    </SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Container>
      <SectionUpcoming>
        <Showcase title="Upcoming" games={upcommingGames} />
        <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
      </SectionUpcoming>
    </Container>

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames} />

    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </section>
)

export default Home
