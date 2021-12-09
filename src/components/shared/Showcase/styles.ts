import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/shared/Container'
import * as HeadingStyles from 'components/shared/Heading/styles'
import * as GameCardSliderStyles from 'components/shared/GameCardSlider/styles'
import * as HighlightStyles from 'components/shared/Highlight/styles'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Container},
    ${HighlightStyles.Container},
    ${GameCardSliderStyles.Container} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${HighlightStyles.Container} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }
    ${GameCardSliderStyles.Container} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
