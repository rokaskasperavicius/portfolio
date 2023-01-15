// Global
import { Header, Footer } from 'components/global'

type Props = {
  children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => (
  <div className='max-w-7xl m-auto'>
    <Header />

    {children}

    <Footer />
  </div>
)
