import { profile } from '../data/profile'

/** Circle photo with a thin accent ring and a small gap. */
export function Photo() {
  const { jpg, webp, alt, width, height } = profile.photo
  return (
    <figure className="portrait" data-shape="circle">
      <div className="portrait-frame">
        <picture>
          <source srcSet={webp} type="image/webp" />
          <img
            className="portrait-photo"
            src={jpg}
            width={width}
            height={height}
            alt={alt}
            loading="eager"
            // React 18 does not know fetchPriority yet, so it goes in as a plain attribute.
            {...{ fetchpriority: 'high' }}
            decoding="async"
          />
        </picture>
      </div>
    </figure>
  )
}
