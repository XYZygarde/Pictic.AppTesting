import { motion } from 'framer-motion'
import { useRef } from 'react';

export function PhotoSticker({ stickerRef, setStickerRef }) {

    const parentRef = useRef(null);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-wrap" ref={parentRef}>
            {stickerRef.map((src, index) => (
                <motion.img
                    key={index}
                    src={src}
                    alt={`sticker-${index}`}
                    drag
                    dragMomentum={false}
                    dragConstraints={parentRef}
                    className="h-12 md:h-16 relative top-0 left-0 w-auto cursor-pointer pointer-events-auto"
                    style={{ x: 0, y: 0 }}
                    onDoubleClick={() => {
                        const updatedStickers = [...stickerRef];
                        updatedStickers.splice(index, 1);
                        setStickerRef(updatedStickers); 
                    }}
                    title='double click to remove'
                />
            ))}
        </div>
    );
}
