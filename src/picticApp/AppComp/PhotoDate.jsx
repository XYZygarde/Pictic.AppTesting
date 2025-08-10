const CurrDate = ({ textColor }) => {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yy = String(today.getFullYear()).slice(-2);

    const formattedDate = `${mm}-${dd}-${yy}`;

    return (
        <>
            <p
                className="text-[10px] text-neutral-500 font-medium tracking-wide mt-2 font-sans leading-none"
                style={{ color: `#${textColor}` }}
            >
                {formattedDate}
            </p>

        </>
    );
}

export default CurrDate;