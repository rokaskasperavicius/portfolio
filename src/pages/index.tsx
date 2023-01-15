import { motion, useAnimation } from 'framer-motion'
import NextImage from 'next/image'
import Link from 'next/link'

import LinkedInIcon from '../assets/linkedin.svg'
import GithubIcon from '../assets/github.svg'
import RightArrowIcon from '../assets/arrow-right.svg'
// Components
import { Image as DatoImage } from 'components'
import { ModularContent } from 'components/ModularContent'

// Helpers
import { request } from 'services/graphql'

// Queries
import { getHomePage } from 'graphql/queries'

// Types
import type { ModularContentRecords } from 'types'

import { AnimatePresence } from '../components/AnimatePresence'

import { GetHomePageQuery } from '../generated/graphql'

type Props = {
  data: GetHomePageQuery
}

const Home = ({ data }: Props) => {
  const leftP = useAnimation()
  const rightP = useAnimation()

  const Block = ({ text }: { text: string }) => (
    <span className='bg-primary text-white px-2 py-1 min-w-[80px] flex items-center justify-center rounded-md'>
      {text}
    </span>
  )

  const { homePage } = data
  const heroImage = homePage?.heroImage?.responsiveImage

  if (!homePage || !heroImage) return null

  return (
    <main className='relative after:absolute after:right-0 after:top-0 after:w-[1px] after:bg-gray-200 main-index before:absolute before:top-0 before:left-0 before:h-[1px] before:bg-gray-200 '>
      <div className='h-[calc(100vh-56px)] flex flex-col justify-center'>
        <div className='flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-center lg:gap-6 gap-14 mt-[-80px] sm:mt-8 lg:mt-0'>
          <div className='flex justify-between text-2xl sm:text-3xl flex-col sm:flex-row lg:flex-col gap-10 lg:gap-0 items-start sm:items-end lg:items-start'>
            <div className='hidden lg:block'></div>
            <motion.div
              id='hero-text'
              className='bg-[#fffdfc] z-10 rounded-bl p-10 border-l border-b border-solid border-gray-300 space-y-20 mr-[-100px]'
              initial='initial'
              animate='animate'
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              variants={{
                initial: {
                  x: -50,
                  opacity: 0,
                },
                animate: {
                  x: 0,
                  opacity: 1,
                },
              }}
            >
              <div>
                <div className='flex gap-[10px]'>
                  <div>I am Rokas - </div>
                  <div className='relative'>
                    <div className='absolute top-0 left-0 word'>motivated</div>
                    <div className='absolute top-0 left-0 word1'>
                      productive
                    </div>
                    <div className='absolute top-0 left-0 word2'>
                      experienced
                    </div>
                    <div className='absolute top-0 left-0 word3'>confident</div>
                    <div className='absolute top-0 left-0 word4'>
                      consistent
                    </div>
                    <div className='absolute top-0 left-0 word5 w-[200px]'>
                      open-minded
                    </div>
                  </div>
                </div>
                <div className='text-primary'>front-end developer</div>
                <div>
                  with <span className='text-primary'>4+ years </span> of work
                  experience.
                </div>
              </div>
              <div className='flex gap-2'>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <a
                    href='https://www.linkedin.com/in/rokas-kasperavi%C4%8Dius-a70458158/'
                    target='_blank'
                    rel='noreferrer'
                    className='flex'
                  >
                    <NextImage
                      title='LinkedIn'
                      alt='LinkedIn Icon'
                      className='cursor-pointer'
                      height={40}
                      width={40}
                      src={LinkedInIcon}
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <a
                    href='https://github.com/rokaskasperavicius'
                    target='_blank'
                    rel='noreferrer'
                    className='flex'
                  >
                    <NextImage
                      title='Github'
                      alt='Github Icon'
                      className='cursor-pointer'
                      height={40}
                      width={40}
                      src={GithubIcon}
                    />
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <div />
          </div>
          <motion.div
            id='hero-image'
            className='hidden sm:block'
            initial='initial'
            animate='animate'
            transition={{
              duration: 0.5,
            }}
            variants={{
              initial: {
                x: -50,
                opacity: 0,
              },
              animate: {
                x: 0,
                opacity: 1,
              },
            }}
          >
            <DatoImage image={heroImage} className='rounded-xl' />
          </motion.div>
        </div>
      </div>
      <div className='mt-20'>
        <ModularContent content={homePage.content as ModularContentRecords} />
      </div>
      <div>
        <h2 className='sm:text-2xl text-xl mt-12 sm:mt-40 text-center'>
          What&apos;s Next?
        </h2>
        <div className='text-lg sm:text-xl sm:mt-8 mt-4 flex justify-center gap-20 flex-col sm:flex-row'>
          <div className="relative after:absolute sm:after:h-full sm:after:top-0 sm:after:right-[-40px] sm:after:rotate-12 sm:after:w-[1px] after:bg-gray-300 after:w-2/3 after:h-[1px] after:bottom-[-40px] after:left-1/2 sm:after:left-auto after:-translate-x-1/2 before:content-['or'] before:text-gray-300 before:bg-white before:w-10 before:absolute before:bottom-[-54px] before:z-[1] before:left-1/2 before:-translate-x-1/2 before:text-center sm:before:right-[-58px] sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:left-auto sm:before:bottom-auto sm:before:translate-x-0">
            <AnimatePresence threshold={0.6} position='left'>
              <>
                <p>
                  Check my recent <span className='text-primary'>projects</span>{' '}
                  💻
                </p>
                <div className='flex gap-3'>
                  <Link href='/projects' passHref>
                    <motion.a
                      onHoverStart={() => leftP.start({ x: 5 })}
                      onHoverEnd={() => leftP.start({ x: 0 })}
                      className='underline cursor-pointer'
                    >
                      Read more
                    </motion.a>
                  </Link>
                  <motion.div animate={leftP} className='flex'>
                    <NextImage src={RightArrowIcon} />
                  </motion.div>
                </div>
              </>
            </AnimatePresence>
          </div>
          <div>
            <AnimatePresence position='right' threshold={0.6}>
              <>
                <p className='mt-0 sm:mt-24'>
                  I would love to hear about your{' '}
                  <span className='text-primary'>ideas</span> and{' '}
                  <span className='text-primary'>projects</span>. Let&#39;s talk
                  👋
                </p>
                <div className='flex gap-3'>
                  {/* <Link href="/email" passHref> */}
                  <motion.a
                    href='mailto:hello@rokaskasperavicius.dev'
                    target='_blank'
                    onHoverStart={() => rightP.start({ x: 5 })}
                    onHoverEnd={() => rightP.start({ x: 0 })}
                    className='underline cursor-pointer'
                  >
                    Write to me
                  </motion.a>
                  {/* </Link> */}
                  <motion.div animate={rightP} className='flex'>
                    <NextImage src={RightArrowIcon} />
                  </motion.div>
                </div>
              </>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps = async () => {
  const data = await request({ query: getHomePage })

  return {
    props: { data },
  }
}

export default Home
