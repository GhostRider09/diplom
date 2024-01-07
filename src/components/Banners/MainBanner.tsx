import { TMainBannerProps } from "./types"

export const MainBanner = ({imagePath, title}:TMainBannerProps) => {
  return (
    <div className="banner">
      <img src={imagePath} className="img-fluid" alt={title} />
      <h2 className="banner-header">{title}</h2>
    </div>
  )
}