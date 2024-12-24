import { LoginForm } from '@/components/login-form'
import { logger } from '@/lib/pinoLogger'
const log = logger.child({ component: 'Home' })

export default function Home() {
  log.info('Home page')
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
