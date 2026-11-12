import { FiFileText, FiPlayCircle, FiGithub } from 'react-icons/fi'

const ITEMS = [
  { key: 'report', label: 'Report (PDF)', icon: FiFileText },
  { key: 'demo', label: 'Watch Demo', icon: FiPlayCircle },
  { key: 'github', label: 'Source Code', icon: FiGithub }
]

function ResourceLinks({ links = {} }) {
  const items = ITEMS.filter(item => links[item.key])
  if (items.length === 0) return null

  /* stopPropagation : cliquer un lien n'ouvre pas le case study de la carte */
  return (
    <div
      className="resource-links"
      onClick={event => event.stopPropagation()}
      onKeyDown={event => event.stopPropagation()}
    >
      {items.map(({ key, label, icon: Icon }) => (
        <a
          key={key}
          href={links[key]}
          target="_blank"
          rel="noreferrer"
          className="resource-link"
        >
          <Icon />
          {label}
        </a>
      ))}
    </div>
  )
}

export function DemoVideo({ src, title }) {
  if (!src) return null

  return (
    <div className="case-video">
      <video
        src={src}
        title={title}
        controls
        playsInline
      />
    </div>
  )
}

export default ResourceLinks