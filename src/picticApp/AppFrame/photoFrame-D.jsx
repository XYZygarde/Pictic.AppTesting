import CurrDate from '../AppComp/PhotoDate';
import '../../assets/font-fam.css'
import LabelText from '../AppComp/PhotoLabel';
import { PhotoSticker } from '../AppComp/PhotoStickers';

export default function PhotoFrameD({ images, photo, stickers = [], setStickers }) {
  return (
    <div
      className={`relative p-4 shadow w-44 md:w-54 ${images.layout}`}
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
      {/* Photo column */}
      <div className="flex flex-col gap-2">
        {photo.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`photo-${i}`}
            className="w-full h-32 md:h-36 object-cover rounded-md"
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
