import { useRef, type CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const lines = text.split('\n')
  const totalChars = text.replace(/\n/g, '').length
  let globalIndex = 0

  return (
    <p ref={ref} className={className} style={style}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {line.split('').map((char) => {
            const idx = globalIndex
            globalIndex += 1
            return <Char key={idx} char={char} index={idx} total={totalChars} progress={scrollYProgress} />
          })}
        </span>
      ))}
    </p>
  )
}
