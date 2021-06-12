const LGAs = {"Ogun":["Yewa North","Yewa South","Egbado North","Egbado South","Abeoukuta North","Obalande"],
"Lagos":[ "Alimosho","Ajeromi-Ifelodun","Kosofe","Mushin","Oshodi-Isolo","Ojo","Ikorodu","Surulere","Agege","Ifako-Ijaiye","Somolu","Amuwo-Odofin","Lagos Mainland","Ikeja","Eti-Osa","Badagry","Apapa","Lagos Island","Epe","Ibeju-Lekki"],
"Abuja":["FCT"],"Rivers":["Sapele"],"Ibadan":["Apete"],"Ilorin":["Ojo"]}

export default function LGAPicker(LGA,state) {
    LGA.splice(0, LGA.length)
    return LGA.push(LGAs[state])
}
