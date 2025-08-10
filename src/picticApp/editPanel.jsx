import { useState, useRef } from 'react';
import PhotoFrameA from './AppFrame/photoFrame-A';
import PhotoFrameB from './AppFrame/photoFrame-B';
import PhotoFrameC from './AppFrame/photoFrame-C';
import PhotoFrameD from './AppFrame/photoFrame-D';
import PhotoFrameE from './AppFrame/photoFrame-E';
import PhotoFrameF from './AppFrame/photoFrame-F';
import AppButton from './AppComp/AppBtn';
import EditColor from './AppComp/PhotoEditor/EditColor';
import EditBgImg from './AppComp/PhotoEditor/EditBgImg';
import EditPhotoSticker from './AppComp/PhotoEditor/EditSticker';
import EditLabel from './AppComp/PhotoEditor/EditLabel';
import EditDatePop from './AppComp/PhotoEditor/EditDatePop';
import { toPng } from 'html-to-image';

const EditImage = ({ Photo, Frame, closeEditor, closeUpload, clearPhoto }) => {

  const frames = [
    PhotoFrameA,
    PhotoFrameB,
    PhotoFrameC,
    PhotoFrameD,
    PhotoFrameE,
    PhotoFrameF
  ];

  const PhotoLayout = frames[Frame];
  const photoRef = useRef(null);


  const onExit = () => {
    closeEditor(false);
    closeUpload(false);
    clearPhoto([]);
  };

  // Frame background selection
  const [clickColor, setClickColor] = useState('');
  const [clickBgImg, setClickBgImg] = useState('');
  const [clickLbColor, setClickLabelColor] = useState('000000');
  const [clickShowDate, setClickShowDate] = useState(false);

  // Frame sticker selection 
  const [stickers, setStickers] = useState([]);

  const addSticker = (stickerUrl) => {
    setStickers((prev) => [...prev, stickerUrl]);
  };

  // Ensure only one is active
  const handleColorPick = (color) => {
    setClickColor(color);
    setClickBgImg('');
  };

  const handleBgPick = (bgUrl) => {
    setClickBgImg(bgUrl);
    setClickColor('');
  };

 const handleDownload = async () => {
  if (!photoRef.current) return;
  try {
    const dataUrl = await toPng(photoRef.current, {
      pixelRatio: 2,
      quality: 1,
    });
    const link = document.createElement("a");
    link.download = "Pictic.png";
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Failed to download image", error);
  }
};


  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center font-sans md:w-full bg-white md:bg-[#FFDDCC]">
      <div className="bg-gray-100 md:rounded-xl md:shadow-xl mt-24 w-full max-w-5xl max-h-[85vh] flex flex-col overflow-hidden md:max-w-[70%]">

        {/* Main Content */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 p-4 sm:p-6 overflow-y-auto bg-[#FFDDCC] md:bg-gray-100">

          {/* Preview */}
          <div className="flex-1 flex justify-center items-center p-8 bg-[#FFDDCC] md:bg-gray-100">
            <div className="max-w-full text-center" ref={photoRef}>
              <PhotoLayout
                images={{
                  layout: 'p-4',
                  enableDate: clickShowDate,
                  frameStyle: clickColor,
                  bgUrl: clickBgImg,
                  colorPicked: `#${clickLbColor}`,
                  selectedColor: clickLbColor,
                  colorBorder: clickLbColor || '000000'
                }}
                photo={Photo}
                stickers={stickers}
                setStickers={setStickers}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-[500px] min-h-fit bg-gray-50 p-4 rounded-xl shadow-sm flex flex-col items-stretch space-y-4 gap-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 w-full text-center">
              Design your frame
            </h3>

            {/* Background Color Picker */}
            <EditColor setFrameColor={handleColorPick} />

            {/* Background Image Picker */}
            <EditBgImg setFrameBgImg={handleBgPick} frameBgImg={clickBgImg} />

            {/* Frame sticker picker */}
            <EditPhotoSticker addSticker={addSticker} />

            {/* Label Color Picker */}
            <EditLabel setLabelColor={setClickLabelColor} />

            {/* Date Picker */}
            <EditDatePop setShowDate={setClickShowDate} />

          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 sm:p-6 border-t border-gray-200 space-x-3">
          <AppButton
            btnDesign="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition text-center cursor-pointer"
            onClick={onExit}
            label="Cancel"
          />
          <AppButton
            btnDesign="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center transition cursor-pointer"
            label="Download"
            icon="fa-download"
            onClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default EditImage;
