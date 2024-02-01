import React from 'react'
import EventImg from '../Image/eventImg.jpeg'
import '../EventPage/Event.css'

function Event() {
    return (
        <div className="EventBox w-full h-fit bg-slate-900 p-10 flex flex-col items-center justify-around">
            <h1 className='text-center text-white pt-10'>Event</h1>
            {EventData.map((E) => (
                <div className="EventContainer w-full h-fit flex align-middle justify-evenly  flex-wrap ">
                    <div className="eventBoxCard1">
                        <img src={E.EventImg} alt='' className='eventcardImg' />
                        <div className="EventContent">
                            {E.description}
                        </div>
                    </div>
                    <div className="eventBoxCard2">
                        <img src={E.EventImg} alt='' className='eventcardImg' />
                        <div className="EventContent">
                            {E.description}

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default Event
const EventData = [
    {
        EventImg: EventImg,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis, quasi nemo doloremque repellendus, eligendi unde odio harum illum nesciunt eveniet aliquam sint voluptates repudiandae ea cumque ducimus, blanditiis reiciendis.Quis libero ullam obcaecati adipisci modi magnam suscipit necessitatibus corporis alias praesentium ab voluptatibus impedit velit porro officia provident ea, fuga magni harum? Cumque adipisci ex deleniti maiores delectus quo."
    },
    {
        EventImg: EventImg,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis, quasi nemo doloremque repellendus, eligendi unde odio harum illum nesciunt eveniet aliquam sint voluptates repudiandae ea cumque ducimus, blanditiis reiciendis.Quis libero ullam obcaecati adipisci modi magnam suscipit necessitatibus corporis alias praesentium ab voluptatibus impedit velit porro officia provident ea, fuga magni harum? Cumque adipisci ex deleniti maiores delectus quo."
    },
    {
        EventImg: EventImg,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis, quasi nemo doloremque repellendus, eligendi unde odio harum illum nesciunt eveniet aliquam sint voluptates repudiandae ea cumque ducimus, blanditiis reiciendis.Quis libero ullam obcaecati adipisci modi magnam suscipit necessitatibus corporis alias praesentium ab voluptatibus impedit velit porro officia provident ea, fuga magni harum? Cumque adipisci ex deleniti maiores delectus quo."
    },
]