import React, { useEffect, useState } from 'react'
import * as reservation from '../../apis/reservation'
import ReservationInsert from '../../components/Reservation/ReservationInsert'
import { useParams } from 'react-router-dom'

const ReservationInsertContainer = () => {

  const [trainerProfile, setTrainerProfile] = useState([])
  const [reservationListByTrainer, setReservationListByTrainer] = useState([])
  const [ptCount, setPtCount] = useState(0)

  const {no} = useParams()

  

  const getData = async () => {

    const response = await reservation.sortByTrainer(no)
    const data = await response.data

    setTrainerProfile(data.trainerProfile)
    setReservationListByTrainer(data.reservationListByTrainer)
    setPtCount(data.myReservation.ptCount)

    console.dir(data);
    
  }
  
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <ReservationInsert trainerProfile={trainerProfile} reservationListByTrainer={reservationListByTrainer} no={no} ptCount={ptCount}/>
    </>
  )
}

export default ReservationInsertContainer
