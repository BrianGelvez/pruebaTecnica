import './TextAndStep.modules.css'
import verificacion from "../../assets/icons8-marca-de-verificación-50.png"
import tres from "../../assets/Screenshot 2023-09-20 175714.png";
import cuatro from "../../assets/cuatro.png"

export const TextAndStep = () => {
    const data = [
        {
            step1: "Step 1 : Cart Review",
            img: verificacion
        },
        {
            step2: "Step 2 : Checkout",
            img: verificacion
        },
        {
            step3: "Step 3 : Special Offer",
            img3: tres
        },
        {
            step4: "Step 4 : Confirmation",
            img4: cuatro
        }
    ]

    return (
        <div className="container-1">
            <div className="title-container-1">
                <p className="title-asd">Wait! You Order In Progress</p>
                <p className='subtitle-asd'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='data-container-asd'>
                <div className='steps'>
                    <img src={data[0].img}/>
                    <p>{data[0].step1}</p>
                </div>
                <div className='steps'>
                    <img src={data[1].img}/>
                    <p>{data[1].step2}</p>
                </div>
                <div className='steps'>
                    <img className='img3' src={data[2].img3}/>
                    <p className="bold-text">{data[2].step3}</p>
                </div>
                <div className='steps'>
                    <img className='img4' src={data[3].img4}/>
                    <p>{data[3].step4}</p>
                </div>
            </div>
        </div>
    )
}