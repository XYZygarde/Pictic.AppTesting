import CurrDate from '../AppComp/PhotoDate';
import '../../assets/font-fam.css'
import LabelText from '../AppComp/PhotoLabel'
import { PhotoSticker } from '../AppComp/PhotoStickers'

export default function PhotoFrameC({ images, photo, stickers = [], setStickers }) {
  return (
    <div
      className={`relative p-4 shadow w-70 md:w-76 ${images.layout}`}
      style={{
        backgroundColor: images.frameStyle?.startsWith('linear-gradient')
          ? 'transparent'
          : `#${images.frameStyle || 'ffffff'}`,

        backgroundImage: images.bgUrl
          ? `url(${images.bgUrl})`
          : images.frameStyle?.startsWith('linear-gradient')
            ? images.frameStyle
            : 'none',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Grid of photos */}
      <div className="grid grid-cols-2 gap-2">
        {photo.slice(0, 6).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`photo-${i}`}
            className="w-full h-34 md:h-40 object-cover rounded-md"
          />
        ))}
      </div>

      {/* stickers */}
      <PhotoSticker stickerRef={stickers} setStickerRef={setStickers} />


      {/* Footer */}
      <div className="w-full border-t mt-4" style={{ borderColor: `#${images.colorBorder}` }}></div>
      <LabelText textColor={images.colorPicked} />
      
      {images.enableDate ? <CurrDate textColor={images.selectedColor}/> : null}
    </div>
  );
}
