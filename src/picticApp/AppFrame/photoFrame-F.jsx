import CurrDate from '../AppComp/PhotoDate';
import '../../assets/font-fam.css'
import { PhotoSticker } from '../AppComp/PhotoStickers';
import LabelText from '../AppComp/PhotoLabel';

export default function PhotoFrameF({ images, photo, stickers = [], setStickers  }) {
  return (
    <div
      className={`relative p-4 shadow w-64 ${images.layout}`}
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
      {/* Main photo */}
      <div className="flex items-center my-auto">
        <img
          src={photo}
          alt={`photo-${photo}`}
          className="w-full h-52 object-cover rounded-md"
        />
      </div>
      
       {/* stickers */}
       <PhotoSticker stickerRef={stickers} setStickerRef={setStickers} />
   

      {/* Footer */}
      <div className="w-full border-t mt-4" style={{ borderColor: `#${images.colorBorder}` }}></div>
      <LabelText textColor={images.colorPicked}/>
      
      {images.enableDate ? <CurrDate textColor={images.selectedColor}/> : null}
    </div>
  );
}
