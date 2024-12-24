import { LoginForm } from '@/components/LoginForm'
import { logger } from '@/lib/pinoLogger'
const log = logger.child({ component: 'Home' })

import Header from '@/components/Header'

export default function Home() {
  log.info('Home page')
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Header />
        <LoginForm />
      </div>
    </div>
  )
}
