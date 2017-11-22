import React, { Component, PropTypes } from 'react';
import styles from './styles.css'

export default ({flags}) => (
    <span className={styles.flags}>
      {flags.deprecated ? <span className={styles.flag}>Deprecated</span> : null}
      {flags.insecure ? <span className={styles.flag}>insecure</span> : null}
      {flags.unstable ? <span className={styles.flag}>unstable</span> : null}
    </span>
)
// The package flags (deprecated, unstable, insecure)