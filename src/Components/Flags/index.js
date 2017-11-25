import React, { Component, PropTypes } from 'react';
import styles from './styles.css'

export default ({flags, size}) => (
  <span className={size === 'big' ? styles.big : styles.small}>
    <span className={styles.flags}>
      {flags.deprecated ? <span className={styles.flagDeprecated}>Deprecated</span> : null}
      {flags.insecure ? <span className={styles.flagInsecure}>insecure</span> : null}
      {flags.unstable ? <span className={styles.flagUnstable}>unstable</span> : null}
    </span>
  </span>
)