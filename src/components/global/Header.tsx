import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import styles from '../../styles/Home.module.css'

export const Header = () => {
  const { asPath: path } = useRouter()

  return (
    <header className='p-4 flex justify-end'>
      <div className='flex gap-3'>
        <Link href='/'>
          <motion.a
            className={clsx(styles.link, {
              'font-bold': path === '/',
            })}
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ delay: 1 }}
          >
            Home
          </motion.a>
        </Link>
        <Link href='/projects'>
          <motion.a
            className={clsx(styles.link, {
              'font-bold': path === '/projects',
            })}
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ delay: 1.5 }}
          >
            Projects
          </motion.a>
        </Link>
        {/* {locales?.map((l, i) => {
    return (
      <motion.div
        key={i}
        className="flex"
        animate={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ delay: 2 + 0.5 * i }}
      >
        <Link passHref href={path} locale={l}>
          <NextImage
            src={l === "en" ? GBIcon : LTIcon}
            className={clsx("cursor-pointer", {
              "pointer-events-none": l === locale,
            })}
            width={24}
            height={18}
          />
        </Link>
      </motion.div>
    );
  })} */}
        <motion.div
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          transition={{ delay: 2 }}
        >
          EN
        </motion.div>
      </div>
    </header>
  )
}
