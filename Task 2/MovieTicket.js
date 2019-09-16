
class Movie {
  constructor(movieId, title, duration, genre, rating, status, hallNumber) {
    this.movieId = movieId
    this.title = title
    this.duration = duration
    this.genre = genre
    this.rating = rating
    this.status = status //now showing or upcoming,
    this.hallNumber = hallNumber // showing in screen 1,2 or so on
  }
}

class UserInfo {
  constructor(userId, name, email, dob, mobileNumber) {
    this.userId = userId
    this.name = name
    this.email = email
    this.dob = dob
    this.mobileNumber = mobileNumber
  }
}

class HallInfo {
  constructor(hallNumber, seatCapacity, availableSeats) {
    this.hallNumber = hallNumber
    this.seatCapacity = seatCapacity
    this.availableSeats = availableSeats
  }
}

class BookingDetails {
  constructor(bookingId, paymentStatus, seatStatus, userInfoStatus) {
    this.bookingId = bookingId
    this.paymentStatus = paymentStatus
    this.seatStatus = seatStatus
    this.userInfoStatus = userInfoStatus
  }
}

class TicketInfo {
  constructor(ticketNumber, seatno, purchaseDate, showtime) {
    this.ticketNumber = ticketNumber
    this.seatno = seatno
    this.purchaseDate = purchaseDate
    this.showtime = showtime
  }
}






