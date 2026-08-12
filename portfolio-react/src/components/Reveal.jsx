import useReveal from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in-view' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
