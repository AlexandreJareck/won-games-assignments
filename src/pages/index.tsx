import Home, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { HomeData } from 'models/home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'
import { getSession } from 'next-auth/react'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<HomeData>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 10,
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcommingHighligth: highlightMapper(sections?.upcomingGames?.highlight),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames)
    }
  }
}
