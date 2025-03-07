import React from "react"
import { gt } from "../libs/math"
import { format, lookupSymbol } from "../libs/parse"
import styles from "./SwapToken.module.scss"
import { GetTokenSvg } from "../helpers/token"

interface Props extends AssetItem {
  formatTokenName?: (symbol: string) => string
}

const SwapToken = ({ symbol, balance, formatTokenName }: Props) => {
  const symbols = symbol.split("-")
  return (
    <article className={styles.asset}>
      <header className={styles.header}>
        <div className={styles.symbol}>
          <div className={styles.logo}>
            <img src={GetTokenSvg(symbols[0])} width={25} height={25} alt="" />
          </div>
          <div className={styles.name}>
            {formatTokenName?.(symbols[0]) ?? lookupSymbol(symbols[0])}
          </div>
          {symbols.length > 1 ? (
            <div className={styles.divide}>
              <span>-</span>
            </div>
          ) : undefined}
          {symbols.length > 1 ? (
            <div className={styles.logo}>
              <img
                src={GetTokenSvg(symbols[1])}
                width={25}
                height={25}
                alt=""
              />
            </div>
          ) : undefined}
          {symbols.length > 1 ? (
            <div className={styles.name}>
              {formatTokenName?.(symbols[1]) ?? lookupSymbol(symbols[1])}
            </div>
          ) : undefined}
        </div>
      </header>

      <footer className={styles.footer}>
        {balance && gt(balance, 0) && (
          <p className={styles.balance}>
            Balance: <strong>{format(balance, symbol)}</strong>
          </p>
        )}
      </footer>
    </article>
  )
}

export default SwapToken
