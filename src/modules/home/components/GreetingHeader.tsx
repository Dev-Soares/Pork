import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'
import { getGreeting } from '@/shared/utils/date'

interface Props {
  name?: string | null
}

export default function GreetingHeader({ name }: Props) {
  const greeting = getGreeting()
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  const firstName = name?.split(' ')[0] || 'convidado'

  return (
    <motion.div variants={stagger} initial="hidden" animate="show">
      <motion.p variants={fadeUp} className="text-sm text-neutral-500 font-medium mb-2 capitalize">
        {today}
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className="font-brand tracking-tight text-neutral-50"
        style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.1 }}
      >
        {greeting},
        <br />
        <span className="text-brand">{firstName}</span>
      </motion.h1>
    </motion.div>
  )
}
