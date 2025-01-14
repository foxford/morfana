import React, { FC } from 'react'
import { LetterProps } from '../../types'
import * as Styled from './styled'

export const Letter: FC<LetterProps> = ({ className, symbol, width, height, debug = false, ...rest }: LetterProps) => {
  return (
    <Styled.Root className={className} width={width} height={height} lineHeight={height} debug={debug} {...rest}>
      {symbol}
    </Styled.Root>
  )
}

export { LetterProps }
