import '../../assets/font-fam.css'

export default function LabelText({textColor}){
    return(
        <>
            <p className={`text-md md:text-sm tracking-widest mt-2 font-semibold font-ws`} style={{color: textColor}}>PICTIC</p>
        </>
    );
}