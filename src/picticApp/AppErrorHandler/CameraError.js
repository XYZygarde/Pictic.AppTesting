const CameraErrorHandling = ({ setCameraError, cameraError }) => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center p-3 z-50">
                <p>{cameraError}</p>
                <button
                    onClick={() => setCameraError(null)}
                    className="absolute right-4 top-1 text-lg font-bold"
                >
                    ×
                </button>
            </div>
        </>
    );
} 

export default CameraErrorHandling;