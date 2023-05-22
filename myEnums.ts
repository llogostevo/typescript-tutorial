// use of const in front of enum declaration will minimise the amount of JS code produced
const enum SeatChoice {
    AISLE = "aisle", 
    MIDDLE = "middle", 
    WINDOW = "window"
}

//when typing in SeatChoice. it restricts your options in the drop down
const person1Choice = SeatChoice.MIDDLE;
