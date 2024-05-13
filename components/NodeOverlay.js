import React from 'react';
import Image from 'next/image';
import styles from '@/styles/NodeOverlay.module.scss';

function NodeOverlay () {
    return (
      <>
        {/* <Image 
          src="/node.svg" 
          width={300} 
          height={300} 
          alt="Background Circle Image"
          className={styles.node_one}
        /> */}
        {/* <Image 
          src="/node-light.svg" 
          width={300} 
          height={300} 
          alt="Background Circle Image"
          className={`${styles.node_two} d-none d-md-block`}
        /> */}
        {/* <Image 
          src="/node-light.svg" 
          width={300} 
          height={300} 
          alt="Background Circle Image"
          className={`${styles.node_three} d-none d-md-block`}
        /> */}
        <Image 
          src="/node-light.svg" 
          width={300} 
          height={300} 
          alt="Background Circle Image"
          className={`${styles.node_four} hidden lg:block d-none d-md-block`}
        />
      </>
    );
  }


export default NodeOverlay;